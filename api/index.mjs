import {createApp} from '../server.mjs';
const app=createApp();
export const config={maxDuration:300,api:{bodyParser:false}};
export default async function handler(req,res){
 await new Promise(resolve=>{res.once('finish',resolve);res.once('close',resolve);app.emit('request',req,res);});
}
