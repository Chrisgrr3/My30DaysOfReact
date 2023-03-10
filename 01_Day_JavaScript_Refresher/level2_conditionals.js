// 1. Write a code which can give grades to students according to theirs scores:
// 80 - 100, A
// 70 - 89, B
// 60 - 69, C
// 50 - 59, D
// 0 - 49, F

function grade(num) {
    if (num <= 100 && num >= 90) {
        console.log('A')
    } else if (num <= 89 && num >= 80) {
        console.log('B')
    } else if (num <= 79 && num >= 70) {
        console.log('C')
    } else if (num <= 69 && num >= 60) {
        console.log('D')
    } else if (num <= 59 && num >= 0) {
        console.log('F')
    } else {
        console.log('You did not enter a valid grade.')
    }
}


// 2. Check if the season is Autumn, Winter, Spring or Summer.If the user input is:
// September, October or November, the season is Autumn.
//     December, January or February, the season is Winter.
//         March, April or May, the season is Spring
// June, July or August, the season is Summer

function checkSeason(month) {
    month = month.toLowerCase()
    if (month == 'september' | month == 'october' | month == 'november') {
        console.log('Autumn')
    } else if (month == 'december' | month == 'january' | month == 'february') {
        console.log('Winter')
    } else if (month == 'march' | month == 'april' | month == 'may') {
        console.log('Spring')
    } else if (month == 'june' | month == 'july' | month == 'august') {
        console.log('Summer')
    } else {
        console.log('You did not enter a valid month.')
    }
}
checkSeason('aPril')
checkSeason("auGuST")
checkSeason("Septemmberr")
checkSeason('JULY')


// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

function isWorkDay(day) {
    day = day.toLowerCase()
    if (day == 'monday' | day == 'tuesday' | day == 'wednesday' | day == 'thursday' | day == 'friday') {
        console.log('That is a working day.')
    } else if (day == 'saturday' | day == 'sunday') {
        console.log('That is not a working day.')
    } else {
        console.log('You did not enter a valid day.')
    }
}

isWorkDay('monDay')
isWorkDay('eisdv')
isWorkDay('192')
isWorkDay('SaTuRDAy')
isWorkDay('tursday')