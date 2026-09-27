import {resumeSet} from './resume.mjs';
import {freshState,migrate,view,newSet,applyAction,modules} from './lib/catalog.mjs';
const database=new Promise((resolve,reject)=>{const r=indexedDB.open('morning-lab-device-'+new URL('./',import.meta.url).pathname,1);r.onupgradeneeded=()=>r.result.createObjectStore('records');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});
let queue=Promise.resolve();
async function transaction(fn){
 const db=await database;
 return new Promise((resolve,reject)=>{const tx=db.transaction('records','readwrite'),store=tx.objectStore('records'),r=store.get('learning');let result;
  r.onsuccess=()=>{try{const data=migrate(r.result||freshState());result=fn(data,store);store.put(data,'learning');}catch(e){reject(e);tx.abort();}};
  tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error||Error('기록 저장에 실패했어요.'));tx.onabort=()=>reject(tx.error||Error('기록을 저장하지 못했어요.'));
 });
}
export function deviceApi(url,body={},setId=''){
 if(url==='/api/auth')return Promise.resolve({authenticated:true,required:false});
 if(url==='/api/ai/status')return Promise.resolve({connected:false,message:'PC 없이 학습 가능 · AI 질문은 내 ChatGPT에서 이어가요.'});
 const task=()=>transaction((data,store)=>{
  if(url==='/api/export')return structuredClone(data);
  if(url==='/api/import'){
   const incoming=body.state;
   if(!incoming||![1,2].includes(incoming.version)||!incoming.settings||!Array.isArray(incoming.settings.enabled)||!incoming.settings.enabled.length||incoming.settings.enabled.some(id=>!modules.some(m=>m.id===id))||!Array.isArray(incoming.notes)||!incoming.days||!incoming.drafts)throw Error('Morning Lab 백업 파일을 선택해주세요.');
   const next=migrate(structuredClone(incoming));
   if(!next.instances||!next.sets||!next.attempts)throw Error('백업 형식을 확인해주세요.');
   view(next);store.put(data,'before-import');Object.keys(data).forEach(k=>delete data[k]);Object.assign(data,next);return {ok:true};
  }
  if(url==='/api/refresh'){const id=newSet(data,new Date(),setId,body.module||'',body.index);data.activeSetId=id;return view(data,new Date(),id);}
  if(url==='/api/resume'){
   const lesson=data.instances[body.lessonId];if(!lesson)throw Error('수업을 찾을 수 없어요.');
   const id=newSet(data,new Date(),setId);data.sets[id].lessons[lesson.module]=lesson.id;data.activeSetId=id;return {state:view(data,new Date(),id),module:lesson.module};
  }
  if(url==='/api/action'){
   const a={...body};if(a.module&&['quiz','complete','draft'].includes(a.type)&&setId){const id=data.sets[setId]?.lessons[a.module];if(!id||(a.lessonId&&a.lessonId!==id))throw Error('수업이 변경됐어요. 다시 열어주세요.');a.lessonId=id;}applyAction(data,a);return view(data,new Date(),setId);
  }
  if(url==='/api/state')return view(data,new Date(),setId||resumeSet(data));
  throw Error('AI 질문은 ChatGPT로 가져가기 버튼을 이용해주세요.');
 });
 const result=queue.then(task,task);queue=result.catch(()=>{});return result;
}
