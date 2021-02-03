//Used for testing scheduler.js
const {
  addTask,
  checkTaskExists,
  removeTask,
  scheduler,
} = require("./scheduler");

//Scheduler log configuration
const SCHEDULER_LOG_INTERVAL = 500;
const SCHEDULER_LOG_END_TIME = 10000;
let currentSchedulerInterval = 0;

/**  Scheduler logger start  */
const schedulerLogger = setInterval(() => {
  currentSchedulerInterval += SCHEDULER_LOG_INTERVAL;
  console.log(
    `[${currentSchedulerInterval}] `,
    JSON.stringify(
      [...scheduler]
        .sort((i, j) => (i.intervalMS > j.intervalMS ? 1 : -1))
        .map((i) => `${i.intervalMS} : ${i.name}`)
    )
  );
}, SCHEDULER_LOG_INTERVAL);

setTimeout(() => {
  clearInterval(schedulerLogger);
}, SCHEDULER_LOG_END_TIME);
/**  Scheduler logger end  */

//Adding some tasks

/**
 * Assuming this task needs to be running, and should always be checked to make sure
 * it exists in the scheduler.
 */

addTask("task1", 1000, false, () => console.log("task 1"));

addTask("task 2", 1500, false, () => console.log("task 2"));

addTask("Check Task4", 1000, false, () => {
  console.log("Check if Task4 Exists", checkTaskExists("task 4"));
});
setTimeout(() => {
  addTask("task 4", 3000, false, () => {
    console.log("task 4");
  });
}, 5000);

setTimeout(() => {
  const removedTask = removeTask("task1");
  console.log("removed task 1: ", JSON.stringify(removedTask));
}, 4000);

//remove all tasks from the scheduler and exit app
setTimeout(() => {
  console.log("Scheduler time is over, killing all tasks");
  /*
  Must take a copy of the scheduler array here,
   because looping over a modified array with removed items
   results in missing some tasks in the loop
   */
  [...scheduler].forEach((task) => {
    removeTask(task.name);
  });
  console.warn("All Tasks killed!");
  console.log("*******************************************");
}, SCHEDULER_LOG_END_TIME);
