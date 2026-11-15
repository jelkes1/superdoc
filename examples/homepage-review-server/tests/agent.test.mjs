import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {SuperDocClient} from '@superdoc/sdk';
import {runAgent} from '../examples/review-server/agent.mjs';
test('saves a tracked edit without changing the source', {timeout:90000}, async()=>{
 const dir=await fs.mkdtemp(path.join(os.tmpdir(),'superdoc-review-')),input=path.resolve('public/SuperDoc.docx'),out=path.join(dir,'reviewed.docx'),original=await fs.readFile(input);let calls=0;
 try{await runAgent({input,output:out,callModel:async()=>++calls===1?{role:'assistant',content:null,tool_calls:[{id:'title',type:'function',function:{name:'superdoc_perform_action',arguments:JSON.stringify({action:'replace_text',edits:[{find:'Mutual Agreement for Document Excellence',replace:'Mutual Agreement for DOCX Excellence'}],changeMode:'tracked'})}}]}:{role:'assistant',content:'Done'}});
 assert.deepEqual(await fs.readFile(input),original);
 const client=new SuperDocClient();let doc;try{await client.connect();doc=await client.open({doc:out});assert((await doc.trackChanges.list({})).total>0);assert.match(await doc.getText({}),/DOCX Excellence/);}finally{if(doc)await doc.close({discard:true});await client.dispose();}
 }finally{await fs.rm(dir,{recursive:true,force:true});}
});
