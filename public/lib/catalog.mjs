import {expandedBank} from './content.mjs';
import {joseonCourse} from './joseon-course.mjs';
import {idiomCourse} from './idiom-course.mjs';
import {pythonCourse} from './python-course.mjs';
export const modules = [
 {id:'history',name:'역사 탐구',en:'HISTORY',tag:'조선 왕별 이야기 · 108문제',minutes:5,color:'#bb6b41',icon:'book',description:'태조부터 순종까지, 왕별 이야기와 사건의 흐름을 읽어요.'},
 {id:'words',name:'말의 깊이',en:'WORDS & IDEAS',tag:'사자성어 퀴즈 모음집',minutes:4,color:'#8c7860',icon:'type',description:'익숙한 말의 정확한 뜻과 쓰임을 익혀요.'},
 {id:'english',name:'매일 영어',en:'ENGLISH',tag:'한 문장부터 자연스럽게',minutes:6,color:'#547e78',icon:'globe',description:'듣고, 소리 내고, 내 이야기로 바꿔 써요.'},
 {id:'speech',name:'생각을 말로',en:'SPEAKING',tag:'60초 스피치',minutes:5,color:'#8b7599',icon:'mic',description:'흩어진 생각을 명확한 한 문장으로 전해요.'},
 {id:'ai',name:'AI 리터러시',en:'AI LITERACY',tag:'기업 AI 도입 · 고급 Q&A',minutes:5,color:'#69815d',icon:'spark',description:'정책·전략 컨설턴트의 관점으로 기업의 어려운 질문에 답해요.'},
 {id:'python',name:'매일 Python',en:'PYTHON LAB',tag:'입문 → 기초 → 활용 → 심화',minutes:15,color:'#4d79a1',icon:'type',description:'하루 한 단계, 직접 코드를 쓰고 실행하며 배워요.'}
];
const lesson = (title,body,question,options,answer,explanation,practice,phrase='') => ({title,body,question,options,answer,explanation,practice,phrase,source:'기본 학습 콘텐츠'});
const legacyBank = {
 history:[
 lesson('훈민정음, 문자에 담긴 문제 해결','훈민정음은 1443년에 창제되고 1446년에 반포되었습니다. 당시 한자는 우리말을 표현하기 어려웠고 익히기도 쉽지 않았습니다. 새 문자는 백성이 자기 뜻을 더 쉽게 표현하도록 마련되었습니다. 창제와 반포는 서로 다른 시점이라는 점을 구분해 보세요.','훈민정음의 창제와 반포 연도를 바르게 연결한 것은?',['1443년 창제 · 1446년 반포','1446년 창제 · 1443년 반포','1392년 창제 · 1443년 반포'],0,'창제는 1443년, 해설서와 함께 반포된 해는 1446년입니다.','지금 내 생활에서 “접근하기 어려운 지식”을 하나 고르고, 쉽게 전할 방법을 적어보세요.'),
 lesson('산업혁명, 발명 너머의 변화','18세기 후반 영국에서 시작된 산업혁명은 기계와 공장제 생산의 확산을 뜻합니다. 증기기관뿐 아니라 자본, 노동력, 자원, 교통 등의 조건이 함께 작용했습니다. 생산량이 늘었지만 도시 노동자의 열악한 노동 환경 같은 문제도 나타났습니다.','산업혁명을 설명하는 가장 적절한 관점은?',['한 발명가가 혼자 만든 변화','기술과 사회·경제적 조건이 결합한 변화','농업이 완전히 사라진 사건'],1,'역사적 변화는 여러 조건이 상호작용한 결과로 이해해야 합니다.','AI가 일하는 방식을 바꾸는 모습과 산업혁명의 공통점 하나, 차이점 하나를 적어보세요.'),
 lesson('실크로드는 하나의 길이 아니었다','실크로드는 유라시아를 연결한 여러 교역 경로를 통칭합니다. 물품뿐 아니라 종교, 기술, 사상도 이동했습니다. 교역은 한 상인이 전 구간을 이동하는 방식만이 아니라 여러 지역의 중개를 통해서도 이루어졌습니다.','실크로드에 대한 설명 중 적절한 것은?',['비단만 운반한 단일 도로','여러 경로로 물품과 문화가 이동한 교류망','로마와 중국이 공동 건설한 고속도로'],1,'여러 교역로와 중개 지역이 연결된 교류망이었습니다.','요즘 지식과 문화가 이동하는 “새로운 실크로드”는 무엇일까요?')
 ],
 words:[
 lesson('온고지신 · 과거에서 새롭게 배우기','온고지신(溫故知新)은 옛것을 익히고 그것을 통해 새것을 안다는 뜻입니다. 외운 것을 반복하는 데서 멈추지 않고, 기존 경험을 새로운 상황에 연결하는 태도를 담고 있습니다.','온고지신의 예로 가장 가까운 것은?',['예전 실패 기록에서 새 프로젝트의 개선점을 찾는다','옛 방법은 이유 없이 무조건 따른다','이전 기록은 모두 버리고 새로 시작한다'],0,'과거의 경험을 돌아보고 새로운 통찰로 연결하는 행동입니다.','최근 경험에서 다시 꺼내볼 교훈을 한 문장으로 남겨보세요.'),
 lesson('기회비용 · 선택 뒤에 남는 것','기회비용은 어떤 선택으로 포기한 대안들 가운데 가장 가치 있는 대안의 가치입니다. 실제 지출뿐 아니라 포기한 시간이나 기회도 고려합니다. 이미 지출해 되돌릴 수 없는 매몰비용과 구분해야 합니다.','주말에 공부를 선택했을 때 기회비용은?',['과거에 이미 산 책값','포기한 대안 중 가장 가치 있는 활동의 가치','공부 이외 모든 활동의 가치를 더한 값'],1,'기회비용은 포기한 최선의 대안의 가치입니다.','오늘 시간을 쓸 일 하나와, 그 때문에 포기하는 최선의 대안을 적어보세요.'),
 lesson('과유불급 · 적절함을 찾는 판단','과유불급(過猶不及)은 지나친 것이 미치지 못한 것과 같다는 뜻입니다. 무조건 적게 하라는 뜻이 아니라 목적과 상황에 맞는 정도를 찾으라는 의미로 이해할 수 있습니다.','과유불급의 뜻은?',['많을수록 언제나 좋다','지나침도 부족함처럼 바람직하지 않다','시작이 어려우면 하지 않는다'],1,'지나침과 모자람 모두를 경계하는 말입니다.','내 루틴에서 줄여야 오래 지속할 수 있는 부분은 무엇인가요?')
 ],
 english:[
 lesson('작은 습관을 영어로 소개하기','“I’m trying to build a habit of reading every morning.”은 “매일 아침 읽는 습관을 들이려고 해요”라는 뜻입니다. build a habit of 뒤에는 reading처럼 동명사를 씁니다. 완벽한 발음보다 문장을 의미 단위로 끊어 소리 내는 데 집중하세요.','빈칸에 알맞은 표현은? I’m trying to build a habit of ___.',['read','reading','to read'],1,'전치사 of 뒤에 동사를 쓰려면 동명사 reading 형태를 사용합니다.','문장의 reading을 원하는 습관으로 바꾸고, 나만의 문장 두 개를 써보세요.','I’m trying to build a habit of reading every morning.'),
 lesson('의견을 부드럽게 전달하기','“From my perspective, small steps make a big difference.”는 “제 관점에서는 작은 실천이 큰 차이를 만듭니다”라는 뜻입니다. From my perspective는 자신의 관점임을 밝히면서 의견을 시작하는 표현입니다.','From my perspective의 뜻으로 가장 가까운 것은?',['내 관점에서는','예외 없이 반드시','지난주부터'],0,'자신의 관점이라는 점을 나타내는 표현입니다.','From my perspective로 시작하는 의견과 그 이유를 영어로 적어보세요.','From my perspective, small steps make a big difference.'),
 lesson('명확하게 되묻기','“Could you clarify what you mean by that?”은 상대가 말한 뜻을 좀 더 명확하게 설명해 달라는 정중한 요청입니다. 이해하지 못한 부분을 확인하는 것도 대화 실력입니다.','정중하게 의미를 확인하는 표현은?',['You are wrong.','Could you clarify what you mean by that?','Never mind, I know everything.'],1,'Could you clarify…?는 설명을 요청하는 정중한 표현입니다.','회의나 여행에서 되묻고 싶은 상황을 하나 정하고 짧은 대화를 써보세요.','Could you clarify what you mean by that?')
 ],
 speech:[
 lesson('결론부터, PREP로 말하기','PREP는 주장(Point), 이유(Reason), 예시(Example), 주장 재강조(Point)의 순서로 내용을 구성하는 연습법입니다. “아침 독서가 필요합니다 → 생각을 정리할 수 있기 때문입니다 → 어제 읽은 문장으로 회의 안건을 정리했습니다 → 그래서 10분 독서를 제안합니다”처럼 연결해 보세요.','PREP의 기본 순서는?',['예시 → 결론 → 인사 → 이유','주장 → 이유 → 예시 → 주장 재강조','이유 → 이유 → 이유 → 끝'],1,'핵심 주장을 먼저 밝히고 이유와 예시로 뒷받침한 뒤 다시 강조합니다.','“하루 10분의 공부가 필요한 이유”를 PREP 네 문장으로 적고 60초 동안 말해보세요.'),
 lesson('추상적인 말에 장면 더하기','“열심히 했습니다”보다 “매일 아침 15분씩 기록하고 금요일에 돌아봤습니다”가 구체적입니다. 듣는 사람이 떠올릴 수 있는 행동, 시간, 상황을 넣어보세요. 숫자는 실제로 아는 것만 사용합니다.','더 구체적인 표현은?',['소통을 엄청 많이 했습니다','아주 혁신적으로 개선했습니다','매주 월요일에 15분 회의로 막힌 일을 확인했습니다'],2,'구체적인 시간과 행동이 들어 있어 청자가 상황을 떠올릴 수 있습니다.','“나는 꾸준히 노력하는 사람입니다”를 실제 경험이 보이는 세 문장으로 바꿔 말해보세요.'),
 lesson('한 번에 하나의 메시지','짧은 스피치에서는 청자가 기억할 핵심을 하나 고르는 것이 도움이 됩니다. 시작과 끝에 같은 핵심을 배치하고, 사례는 그 메시지를 뒷받침하는 것으로 선택하세요.','60초 발표를 준비할 때 먼저 할 일은?',['전달할 핵심 메시지 하나를 고른다','아는 전문용어를 모두 나열한다','가능한 한 빨리 말한다'],0,'짧은 시간일수록 하나의 핵심을 분명히 전달하는 것이 중요합니다.','“이번 주에 배운 것” 중 하나를 골라 결론, 경험, 앞으로의 행동 순서로 말해보세요.')
 ],
 ai:[
 lesson('그럴듯함과 정확함은 다르다','언어 모델은 학습한 패턴과 입력 맥락을 바탕으로 답변을 생성합니다. 자연스럽게 설명하더라도 사실이 틀리거나 존재하지 않는 출처를 만들 수 있습니다. 중요한 주장에는 원문과 날짜를 확인하는 습관이 필요합니다.','AI 답변에 포함된 중요한 통계를 사용할 때 적절한 행동은?',['문장이 자연스러우면 바로 인용한다','원 출처와 기준 시점, 문맥을 확인한다','AI에게 확실하냐고만 한 번 묻는다'],1,'정확성은 자신감 있는 문체가 아니라 실제 근거를 확인해서 판단해야 합니다.','AI에게 물어볼 질문 하나를 쓰고, 답변에서 어떤 부분을 별도로 검증할지 적어보세요.'),
 lesson('좋은 요청은 평가 기준을 담는다','목표, 필요한 맥락, 제약, 원하는 출력 형식을 알려주면 결과를 평가하기 쉬워집니다. “요약해 줘”보다 “처음 읽는 사람을 위해 핵심 주장 세 개와 확인이 필요한 사실을 분리해 줘”처럼 요청할 수 있습니다.','더 명확한 요청은?',['알아서 잘해줘','좋은 걸 만들어줘','초보자용으로 핵심 개념 세 개와 예시 한 개씩 설명해줘'],2,'대상, 범위와 출력 형식이 드러나 결과를 판단하기 쉽습니다.','지금 공부하는 주제로 목표·맥락·형식을 포함한 요청문을 만들어보세요.'),
 lesson('검색 증강 생성, RAG 이해하기','RAG는 관련 문서를 검색해 그 내용을 모델의 답변 생성에 활용하는 접근입니다. 모델의 모든 지식을 새로 학습시키는 것과는 다릅니다. 검색된 문서가 오래되거나 질문과 맞지 않으면 답변도 부정확할 수 있습니다.','RAG를 가장 잘 설명하는 것은?',['검색한 관련 자료를 답변 생성에 활용한다','질문마다 모델 전체를 처음부터 학습한다','인터넷에 있는 모든 사실을 항상 보장한다'],0,'검색 단계로 가져온 자료를 생성 단계의 맥락으로 사용합니다.','내가 자주 확인하는 문서 세 가지와, 그 문서를 바탕으로 답받고 싶은 질문을 적어보세요.')
 ]
};
export const bank={...expandedBank,history:joseonCourse,words:idiomCourse,python:pythonCourse};
export function dayKey(now = new Date(), timezone = 'Asia/Seoul') { return new Intl.DateTimeFormat('en-CA',{timeZone:timezone,year:'numeric',month:'2-digit',day:'2-digit'}).format(now); }
export function shiftDay(date,days){const d=new Date(date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+days);return d.toISOString().slice(0,10);}
export function dailyLesson(module,date){const n=Math.floor(Date.parse(date+'T00:00:00Z')/86400000),pool=legacyBank[module]||bank[module];return {...pool[n%pool.length],id:`${date}:${module}`,module,date};}
export function freshState(){return {version:1,settings:{name:'',timezone:'Asia/Seoul',enabled:modules.map(m=>m.id)},days:{},notes:[],drafts:{},customLessons:{}};}
export function lessonFor(state,module,date){return state.customLessons[`${date}:${module}`]||dailyLesson(module,date);}
export function migrate(state){
 state.chats??={};
 if(!state.courseRevision){state.settings.enabled=[...new Set([...state.settings.enabled,'python'])];state.cursors??={};state.cursors.history=0;state.courseRevision=3;}
 if(state.courseRevision===3){state.cursors??={};state.cursors.history=0;state.cursors.words=24;state.courseRevision=4;}
 if(state.version===2)return state;
 state.version=2;state.sets={};state.instances={};state.attempts={};state.cursors={};
 state.settings.workProfile ||= '정책·전략 컨설팅: 기업의 AI 도입 관련 고급 질문에 답변';
 const keys=new Set([...Object.keys(state.customLessons||{}),...Object.keys(state.drafts||{}),...Object.entries(state.days).flatMap(([d,v])=>Object.keys(v).map(m=>d+':'+m))]);
 for(const key of keys){const [date,module]=key.split(':');if(!bank[module])continue;state.instances[key]=structuredClone(lessonFor(state,module,date));if(state.days[date]?.[module])state.attempts[key]=structuredClone(state.days[date][module]);}
 return state;
}
export function newSet(state,now=new Date(),previousSet='',onlyModule='',chosenIndex){
 migrate(state);const date=dayKey(now,state.settings.timezone),id=crypto.randomUUID();
 if(previousSet&&!state.sets[previousSet])throw Error('학습 묶음을 찾을 수 없어요. 새로고침해주세요.');
 if(onlyModule&&!bank[onlyModule])throw Error('학습 모듈을 확인해주세요.');
 if(chosenIndex!==undefined&&(!onlyModule||!Number.isInteger(chosenIndex)||chosenIndex<0||chosenIndex>=bank[onlyModule].length))throw Error('수업 번호를 확인해주세요.');
 const set={id,date,lessons:{...(state.sets[previousSet]?.lessons||{})}};
 for(const m of modules){
  if(onlyModule&&onlyModule!==m.id&&set.lessons[m.id])continue;
  const index=m.id===onlyModule&&chosenIndex!==undefined?chosenIndex:(state.cursors[m.id]||0)%bank[m.id].length;state.cursors[m.id]=index+1;
  const key=id+':'+m.id;state.instances[key]={...structuredClone(bank[m.id][index]),id:key,date,module:m.id,number:index+1,total:bank[m.id].length};set.lessons[m.id]=key;
 }
 state.sets[id]=set;return id;
}
export function resolveLesson(state,module,date,lessonId){
 if(!lessonId)return lessonFor(state,module,date);
 const l=state.instances?.[lessonId];if(!l||l.module!==module)throw Error('학습 항목을 찾을 수 없어요.');return l;
}
export function view(state,now=new Date(),setId=''){
 const date=dayKey(now,state.settings.timezone),set=state.sets?.[setId];
 if(setId&&!set)throw Error('학습 묶음을 찾을 수 없어요. 새로고침해주세요.');
 return {...state,today:date,setId:set?.id||'',modules,counts:Object.fromEntries(modules.map(m=>[m.id,bank[m.id].length])),curricula:Object.fromEntries(['history','python'].map(id=>[id,bank[id].map((l,index)=>({index,title:l.title,year:l.year,era:l.era,stage:l.stage,day:l.day}))])),lessons:Object.fromEntries(modules.map(m=>[m.id,set&&set.lessons[m.id]?state.instances[set.lessons[m.id]]:lessonFor(state,m.id,date)]))};
}
export function applyAction(state,action,now=new Date()){
 const date=dayKey(now,state.settings.timezone), ids=modules.map(m=>m.id);
 const checkModule=()=>{if(!ids.includes(action.module))throw Error('학습 모듈을 확인해주세요.');};
 if(action.type==='settings'){
  if(typeof action.name!=='string'||action.name.length>30||!Array.isArray(action.enabled)||!action.enabled.length||action.enabled.some(id=>!ids.includes(id)))throw Error('이름과 루틴을 확인해주세요.');
  if(action.workProfile!==undefined){if(typeof action.workProfile!=='string'||action.workProfile.length>1000)throw Error('업무 소개는 1,000자 이내로 작성해주세요.');state.settings.workProfile=action.workProfile.trim();}state.settings.name=action.name.trim();state.settings.enabled=[...new Set(action.enabled)];
 }else if(action.type==='quiz'){
  checkModule();if(action.date!==date)throw Error('날짜가 바뀌었어요. 새로고침 후 오늘의 학습을 열어주세요.');
  const l=resolveLesson(state,action.module,date,action.lessonId);if(!Number.isInteger(action.answer)||!l.options[action.answer])throw Error('답을 선택해주세요.');
  const day=state.days[date]??={};const entry=action.lessonId?((state.attempts??={})[l.id]??={}):(day[action.module]??={});if(entry.quiz)return state;
  entry.quiz={answer:action.answer,correct:action.answer===l.answer,at:now.toISOString()};(day[action.module]??={}).quiz=entry.quiz;
  if(!entry.quiz.correct&&!state.notes.some(n=>n.lessonId===l.id&&n.kind==='wrong'))state.notes.unshift({id:crypto.randomUUID(),lessonId:l.id,module:action.module,kind:'wrong',title:l.question,body:`내 답: ${l.options[action.answer]}\n정답: ${l.options[l.answer]}\n\n${l.explanation}`,created:date,due:date,interval:0,reviews:0});
 }else if(action.type==='complete'){
  checkModule();if(action.date!==date)throw Error('날짜가 바뀌었어요. 새로고침해주세요.');
  const l=resolveLesson(state,action.module,date,action.lessonId);const day=(state.days[date]??={})[action.module]??={};const entry=action.lessonId?((state.attempts??={})[l.id]??={}):day;if(['speech','python'].includes(action.module)){if(!(state.drafts[l.id]||'').trim())throw Error('연습 내용을 먼저 작성해주세요.');}else if(!entry.quiz)throw Error('확인 퀴즈를 먼저 풀어주세요.');entry.completed=true;entry.completedAt=now.toISOString();day.completed=true;
 }else if(action.type==='draft'){
  checkModule();if(typeof action.text!=='string'||action.text.length>10000)throw Error('연습 글은 10,000자 이내로 작성해주세요.');const l=resolveLesson(state,action.module,date,action.lessonId);state.drafts[l.id]=action.text;
 }else if(action.type==='note'){
  if(!ids.includes(action.module)||typeof action.title!=='string'||!action.title.trim()||action.title.length>150||typeof action.body!=='string'||action.body.length>10000)throw Error('제목과 내용을 확인해주세요.');
  state.notes.unshift({id:crypto.randomUUID(),module:action.module,kind:'memo',title:action.title.trim(),body:action.body,created:date,due:date,interval:0,reviews:0});
 }else if(action.type==='review'){
  const n=state.notes.find(n=>n.id===action.id);if(!n||!['again','good','easy'].includes(action.rating))throw Error('복습 항목을 확인해주세요.');
  n.interval=action.rating==='again'?1:action.rating==='easy'?Math.max(4,n.interval*3):Math.max(2,n.interval*2);n.due=shiftDay(date,n.interval);n.reviews++;n.lastReviewed=date;
 }else throw Error('지원하지 않는 작업입니다.');
 return state;
}
