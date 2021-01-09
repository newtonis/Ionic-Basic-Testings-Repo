import { Observable } from 'rxjs';

/** Person type, for now on only has name and available hours */

export interface Person{
    name : string;
    timetable : Observable<{[timeCode : string]: boolean}>;
}