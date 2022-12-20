const dateDisplay = document.getElementById('display-date');

var date = new Date();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

for(var dateCount = [months, days]; dateCount <= [months.length, days.length]; i++);

var month = months[date.getMonth(dateCount)];
var day = days[date.getDay(dateCount)];
var year = date.getFullYear()

var dateDisplayResult = `${day + " "}${month + " "}${year + " "}${date.getDay() + " "}${date.getHours()}:${date.getSeconds()}`;

dateDisplay.textContent = dateDisplayResult;
