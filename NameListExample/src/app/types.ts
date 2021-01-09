import { Observable } from 'rxjs';
import { format, parse } from 'date-fns';

/** Person type, for now on only has name and available hours */

export interface Person{
    name : string;
    timetable : Observable<{[timeCode : string]: boolean}>;
}

export interface yearDay{
    hour: number;
    day: number;
    month: number;
    year: number;
}

export function timeToString(hour: number, day: number, month: number, year: number) : string{
    var date: Date = new Date();
    date.setFullYear(year, month);
    date.setHours(hour);
    date.setDate(day);

    return format(date, "YYYY-MM-DD'T'HH");
}

export function stringToTime(time : string) : yearDay{
    var date: Date = parse(time, "YYYY-MM-DD'T'HH", new Date());
    var hour : number = date.getHours();
    var day : number = date.getDate();
    var month : number = date.getMonth();
    var year : number = date.getMonth();

    var ans: yearDay = {
        hour,
        day,
        month,
        year    
    };

    return ans;
}