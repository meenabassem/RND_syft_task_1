/*
Notes:
1- This task aims at testing your knowledge with javascript/es6 
2- Feel free to research/google your way through the answers
3- Execution time & memory consumption is an important factor, try to optimize your solution as much as possible
4- No 3rd party packages allowed
5- Answer each question in a separate file under "answers" directory named with the question name (e.g. 1.js, 2.js ...etc)

============================================================================================
Given the q1.json file
============================================================================================
1- make a function that group all the data in the array by the "platform" value ()
i.e.  the output should be an object with keys being the platform and the value being the corresponding array of objects
{
    "Instagram": [Obj1, Obj2]
}
============================================================================================
2- make a function that find the id of the object having the largest "amount" value


============================================================================================
Given the q3.json file
============================================================================================

3- make a function that find the object having the largest "campaignActiveCreators_aggregate.aggregate.count" value in each "location"
i.e. the output should be something like
{
    "WW": 41,
    "GG": 51,
}

============================================================================================
4- make a function that calculate the sum of "campaignActiveCreators_aggregate.aggregate.count" value in each location
i.e. the output should be something like
{
    "WW": 241,
    "GG": 841,
}

=============================================================================================================
5- create a javascript module named "scheduler.js" that exposes 3 functions,
this module should be used to schedule the execution of a specific function to be repeated every X amount of milliseconds

5.1- addTask({ name: String, intervalMS: Int, immediate: Boolean, func: Function })
adds 

ARGS:
    name: a unique name for the task
    intervalMS: at what interval the function should be executed
    immediate: should the function be called immediately or wait for the first intervalMS tick
    func: the function to be executed
RETURNS:
    name: the name of the task

5.2- removeTask(name)
ARGS:
    name: the name of the task to be removed

RETURNS:
    name: the name of the task
    intervalMS: at what interval the function should be executed
    immediate: should the function be called immediately or wait for the first intervalMS tick
    func: the function to be executed


5.3- checkTaskExists(name)
ARGS:
    name: unique name of the task

RETURNS:
    true|false: wether the task with the given name already exists or not 

*/
