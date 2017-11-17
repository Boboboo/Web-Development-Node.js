const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));


async function getFileAsString(path){
    if(!path) throw "Error in getFileAsString.";
    var data=await fs.readFileSync(path,"utf-8");
    return data;                                
}

async function getFileAsJSON(path){
    if(!path) throw "Error in getFileAsJSON.";
    var data=await fs.readFileSync(path,"utf-8");
    let jsonData=JSON.parse(data);
    return jsonData;      
}

async function saveStringToFile(path,text){
    if(!path) throw "Error in saveStringToFile: path.";
    if(text===undefined || typeof text !=="string" || text ==="") throw "Error in saveStringToFile: text.";
    var res=await fs.writeFileSync(path,text,"utf-8");
    return true;
}

async function saveJSONToFile(path,obj){
    if(!path) throw "Error in saveJSONToFile: path.";
    if(!obj || typeof obj!=="object")  throw "Error in saveJSONToFile: obj.";
    var res=await fs.writeFileSync(path,JSON.stringify(obj,null,4),"utf-8");
    return true;
}

module.exports={getFileAsString,getFileAsJSON,saveStringToFile,saveJSONToFile};


