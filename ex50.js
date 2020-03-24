/**
 * You prefer a good old 12-hour time format. But the modern world we live in would rather use the 24-hour format and you see it everywhere. 
 * Your task is to convert the time from the 24-h format into 12-h format by following the next rules:
- the output format should be 'hh:mm a.m.' (for hours before midday) or 'hh:mm p.m.' (for hours after midday)
- if hours is less than 10 - don't write a '0' before it. For example: '9:05 a.m.
 */
function timeConverter(dayTime) {
    let hh = parseInt(dayTime[0] + dayTime[1]);
    let hhPm = hh - 12;
    let mm = dayTime[3] + dayTime[4];
    if (hh === 0) {
        return 12 + ':' + mm + ' a.m.'
    } else if (hh === 12) {
        return dayTime + ' p.m.'
    } else if (hh < 12) {
        return hh + ':' + mm + ' a.m.';
    } else {
        return hhPm + ':' + mm + ' p.m.';
    }
}
console.log(timeConverter('00:00'));
console.log(timeConverter('12:00'));
console.log(timeConverter('18:24'));
console.log(timeConverter('03:24'));