/*
5- create a javascript module named "scheduler.js" that exposes 3 functions,
    this module should be used to schedule the execution of a specific function to be repeated every X amount of milliseconds
*/

/**
 *
 * @param name a unique name for the task
 * @param intervalMS at what interval the function should be executed
 * @param immediate should the function be called immediately or wait for the first intervalMS tick
 * @param func the function to be executed
 *
 * @return  name: the name of the task
 */

//Please run 5.js

let scheduler = [];
const addTask = ({ name, intervalMS, immediate, func }) => {
  const task = { name, intervalMS, immediate, func };
  if (immediate) {
    func();
  }
  const intervalId = setInterval(func, intervalMS);
  scheduler.push({
    ...task,
    intervalId,
  });
};
/**
 *
 * @param name the name of the task to be removed
 *
 * @return
 * @param name a unique name for the task
 * @param intervalMS at what interval the function should be executed
 * @param immediate should the function be called immediately or wait for the first intervalMS tick
 * @param func the function to be executed
 */
const removeTask = (name) => {
  let taskToRemove = {};
  scheduler.forEach((task, taskIndex) => {
    if (task.name === name) {
      clearInterval(task.intervalId);
      taskToRemove = task;
      scheduler.splice(taskIndex, 1);
    }
  });
  delete taskToRemove.intervalId;
  return taskToRemove;
};

/**
 *
 * @param name unique name of the task
 * @return true|false: whether the task with the given name already exists or not
 *
 */
const checkTaskExists = (name) => {
  //split just for logging
  const isExist = Boolean(scheduler.filter((i) => i.name === name).length);
  // console.log("Check if exists", name, " => ", isExist);
  return isExist;
};

module.exports = {
  addTask,
  removeTask,
  checkTaskExists,
  scheduler, // was exported mainly for logging purposes, should be replaced by a getter, or logging to be moved in this module
};
