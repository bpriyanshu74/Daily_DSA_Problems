/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    let dayOfWeek = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday" ]
    let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

    function leap(yr){
        return ((yr % 4 == 0 && yr % 100 !== 0) || (yr % 400 == 0))
    }
    let totaldays = 0
    for(let y=1971; y<year; y++){
        totaldays += leap(y) ? 366 : 365
    }

    for(let m=1; m<month; m++){
        if(m == 2 && leap(year)){
            totaldays += 29
        }
        else{
            totaldays += daysInMonth[m-1]
        }    
    }

    totaldays += day - 1
    
    return dayOfWeek[totaldays % 7]

    
};