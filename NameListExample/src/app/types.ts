import { Observable } from 'rxjs';
import { format, parse, eachDayOfInterval } from 'date-fns';

/** Person type, for now on only has name and available hours */

export interface Person{
    id : string;
    name : string;
    timetable : {[timeCode : string]: boolean};
}

export interface YearDay{
    hour: number;
    day: number;
    month: number;
    year: number;
}

export interface CollectionSettings{
    startDate: string;
    endDate: string;
    startHour: number;
    endHour: number;
    mode: string;
}

export function timeToString(hour: number, day: number, month: number, year: number) : string{
    var date: Date = new Date();
    date.setFullYear(year, month);
    date.setHours(hour);
    date.setDate(day);

    return format(date, "YYYY-MM-DD'T'HH");
}

export function stringToTime(time : string) : YearDay{
    var date: Date = parse(time, "YYYY-MM-DD'T'HH", new Date());
    var hour : number = date.getHours();
    var day : number = date.getDate();
    var month : number = date.getMonth();
    var year : number = date.getMonth();

    var ans: YearDay = {
        hour: hour,
        day: day,
        month: month,
        year: year    
    };

    return ans;
}

export function getDaysBetween(startTime: string, endTime: string){
    var startDate: Date = parse(startTime, "YYYY-MM-DD'T'HH", new Date());
    var endDate: Date = parse(endTime, "YYYY-MM-DD'T'HH", new Date());

    var interval = eachDayOfInterval(
        {start: startDate, end: endDate}
    );

    var ans: string[] = [];

    for (let day_id in interval){
        var dateString: string = format(interval[day_id], "YYYY-MM-DD'T'HH");

        ans.push(dateString);
    }
    return ans;
}
