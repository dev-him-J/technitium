// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’

// 	Call all these functions in route.js inside the test-me route handler
const dateToday = new Date();
let arrMonth = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const printDate = () => {
  return dateToday;
};

const printMonth = () => {
  const getMonthIndex = dateToday.getMonth();
  return arrMonth[getMonthIndex];
};
const getBatchInfo = (batch, week, topic) => {
  return `${batch}, ${week}, the topic for today is ${topic}
   `;
};

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;
