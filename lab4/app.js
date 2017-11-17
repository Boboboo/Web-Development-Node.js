const todo = require("./todo");
const connection = require("./mongoConnection");
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidv4 = require('uuid/v4');


async function  main (){
    //1.Create a task with the following details
    const firstTask=await todo.createTask("Ponder Dinosaurs",
    "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");

    //2.Log the task, and then create a new task with the following details
    console.log(firstTask);
    const secondTask=await todo.createTask("Play Pokemon with Twitch TV","Should we revive Helix?");

    //3.After the task is inserted, query all tasks and log them
    const allTasks=await todo.getAllTasks();
    console.log(allTasks);

    //4.After all the tasks are logged, remove the first task
    const removeFirst=await todo.removeTask(allTasks[0]._id);

    //5.Query all the remaining tasks and log them
    const tasksAfterRemove=await todo.getAllTasks();
    console.log(tasksAfterRemove);

    //6.Complete the remaining task
    const remainTask=await todo.completeTask(tasksAfterRemove[0]._id);

    //7.Log the task that has been completed with its new value
    console.log(remainTask);

    const db = await connection();
    await db.close();
}
main ();