//UC1 IF ELSE Condition
{
    const IsABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10)%2;
    if(empCheck == IsABSENT){
        console.log("Employee is ABSENT. Exiting program");
        
    }else{
        console.log("PRESENT");
    }
}
//UC2 SWITCH STATEMENT
//UC3 FUNCTION TO CALCULATE WAGE 
//UC4 UC5 CALCULATE TILL THE CONDITION
// USE FOR LOOP AND WHILE LOOP
//UC6 STORE DAILY WAGE IN ARRAY
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_OF_WORKING_DAYS = 20;
const MAX_WORKING_HR = 160;
function getWorkingHour(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}


let totalHrs = 0;
let totalWorkingdays=0;
let empDailyWageArr = new Array();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

while( totalHrs <= MAX_WORKING_HR && totalWorkingdays < NO_OF_WORKING_DAYS){
    totalWorkingdays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalHrs += getWorkingHour(empCheck);
    empHrs = getWorkingHour(empCheck);
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalHrs);
console.log(" Total days are: "+totalWorkingdays+"\n Hours worked is:"+totalHrs+"\n Employee wage is: "+empWage);
//Array helper function 
// UC7A CalcTotalWage using array forEach traversal or reduce method
let totalWage = 0;
function sum(dailyWage){
    totalWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A - Total days are:"+totalWorkingdays+"\n Hours worked is:"+totalHrs+"\n Employee wage is: "+totalWage);

function totalWages(totalWages,DailyWage){
    return totalWages + DailyWage;
}
console.log("UC7A - Emp wage with reduce: "+empDailyWageArr.reduce(totalWages,0));
console.log("______________________________________________________________")
//UC 7B show the day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDailyWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+" = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDailyWithWage);
console.log("UC7B Daily wage map");
console.log(mapDayWithWageArr);
console.log("______________________________________________________________")

//UC 7C Show days when full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter when Fulltime wage earned");
console.log(fullDayWageArr);
console.log("______________________________________________________________")

//UC 7D fIND THE FIREST OCCURRENCE WHEN FULL TIME WAGE WAS EARNED USING FIND FUNCTION
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7D first time fulltime wage was earned on day: "+mapDayWithWageArr.find(findFullTimeWage));
console.log("______________________________________________________________")

//UC 7E Check if Every Element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7E check if all element have full time wage: "+fullDayWageArr.every(isAllFullTimeWage));
console.log("______________________________________________________________")

//UC 7F Check if there is any Part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F check if any part time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));
console.log("______________________________________________________________")

//UC 7G Find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0 ) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G number of days emp worked "+empDailyWageArr.reduce(totalDaysWorked,0));
console.log("______________________________________________________________")