const mongoCollections = require("./mongoCollections");
const uuidv4 = require('uuid/v4');
const todoItems = mongoCollections.todoItems;


async function createTask(title,description){
    if(!title) throw "Invalid title.";
    if(!description) throw "Invalid description.";

    const todoItemsCollecton=await todoItems();
    let newTask={
        _id:uuidv4(),
        title:title,
        description:description,
        completed: false,
        completedAt: null
    };
    const insertInfo=await todoItemsCollecton.insertOne(newTask);
    if(insertInfo.insertedCount===0) throw "Could not create task.";
    const newId=insertInfo.insertedId;
    return await this.getTask(newId);
}

async function getAllTasks(){
    const todoItemsCollecton=await todoItems();
    const tasks=await todoItemsCollecton.find({}).toArray();
    return tasks;
}


async function getTask(id){
    if(!id) throw "Invalid id.";
    const todoItemsCollecton=await todoItems();
    const task=todoItemsCollecton.findOne({_id:id});
    if(task===null) throw "No task with that id.";
    return task;
}

async function completeTask(taskId){
    if(!taskId) throw "Invalid taskId.";
    const todoItemsCollecton=await todoItems();
    const task=await this.getTask(taskId);
    let newDate=new Date();
    const completeInfo=await todoItemsCollecton.updateOne(
        {_id:taskId},
        {$set:{completed:true,completedAt:newDate}}
    );
    if(completeInfo.modifiedCount===0) throw "Could not complete task successfully.";
    return await this.getTask(taskId);
}

async function removeTask(id){
    if(!id) throw "Invalid id.";
    const todoItemsCollecton=await todoItems();
    const removeInfo=await todoItemsCollecton.removeOne({_id:id});
    if(removeInfo.deleteCount===0) throw "Could not remove task.";
    return true;
}

module.exports={createTask,getTask,getAllTasks,completeTask,removeTask};