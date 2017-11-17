const fileData=require("./fileData.js");
const textMetrics=require("./textMetrics.js");
const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));


async function main(){
    const resOne=await mainOne("./chapter1.txt","./chapter1.result.json");
    const resTwo=await mainTwo("./chapter2.txt","./chapter2.result.json");
    const resThree=await mainThree("./chapter3.txt","./chapter3.result.json");
}
main();

async function mainOne(file, existFile){
    if(!file) throw "No file provided.";
    if(!existFile) throw "No existFile provided.";
    
    if(fs.existsSync(existFile)){
        const existData=await fs.readFileSync(existFile,"utf-8");
        console.log(existData);
        return existData;
    }else{
        const data=await fileData.getFileAsString(file);
        const simData=await textMetrics.simplify(data);  
        const saveSimData=await fileData.saveStringToFile("./chapter1.debug.txt",simData); 
        const newData=await fileData.getFileAsString("./chapter1.debug.txt");
        const createData=await textMetrics.createMetrics(newData);
        const saveJSON=await fileData.saveJSONToFile("./chapter1.result.json",createData);
        const getData=await fileData.getFileAsJSON("./chapter1.result.json");
        return console.log(createData);
    }   
}

async function mainTwo(file, existFile){
    if(!file) throw "No file provided.";
    if(!existFile) throw "No existFile provided.";
    
    if(fs.existsSync(existFile)){
        const existData=await fs.readFileSync(existFile,"utf-8");
        console.log(existData);
        return existData;
    }else{
        const data=await fileData.getFileAsString(file);
        const simData=await textMetrics.simplify(data);  
        const saveSimData=await fileData.saveStringToFile("./chapter2.debug.txt",simData); 
        const newData=await fileData.getFileAsString("./chapter2.debug.txt");
        const createData=await textMetrics.createMetrics(newData);
        const saveJSON=await fileData.saveJSONToFile("./chapter2.result.json",createData);
        const getData=await fileData.getFileAsJSON("./chapter2.result.json");
        return console.log(createData);
    }   
}

async function mainThree(file, existFile){
    if(!file) throw "No file provided.";
    if(!existFile) throw "No existFile provided.";
    
    if(fs.existsSync(existFile)){
        const existData=await fs.readFileSync(existFile,"utf-8");
        console.log(existData);
        return existData;
    }else{
        const data=await fileData.getFileAsString(file);
        const simData=await textMetrics.simplify(data);  
        const saveSimData=await fileData.saveStringToFile("./chapter3.debug.txt",simData); 
        const newData=await fileData.getFileAsString("./chapter3.debug.txt");
        const createData=await textMetrics.createMetrics(newData);
        const saveJSON=await fileData.saveJSONToFile("./chapter3.result.json",createData);
        const getData=await fileData.getFileAsJSON("./chapter3.result.json");
        return console.log(createData);
    }   
}








