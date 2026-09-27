import {loadPyodide} from './runtime/pyodide.mjs';
// Each run gets a fresh worker and virtual filesystem; never executes on the Node host.
self.onmessage=async ({data})=>{
 self.postMessage({type:'loading'});
 let output='';
 const append=text=>{if(output.length<20000)output+=(text+'\n').slice(0,20000-output.length);};
 try{
  const py=await loadPyodide({indexURL:new URL('./runtime/',import.meta.url).href,stdout:append,stderr:append});
  self.postMessage({type:'ready'});
  py.setStdin({stdin:()=>null});
  await py.runPythonAsync(data.code);
  self.postMessage({type:'done',output:output||'(출력 없음 — print()로 값을 출력해 보세요.)',raw:output});
 }catch(e){self.postMessage({type:'error',output:output+'\n'+String(e.message||e)});}
};
