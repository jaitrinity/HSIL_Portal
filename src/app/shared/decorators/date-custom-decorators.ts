import { DatePipe } from '@angular/common';

export const CustomDateFormat = (target : object, key : string | symbol) => {
    let value = target[key];    
    let datePipe : DatePipe;
    this.datePipe = new DatePipe('en-Us');
    const getter = () => {
        return value;
    };

    const setter = (val) => {
        value = this.datePipe.transform(val,'medium');              
    }
    Reflect.defineProperty[key];
    Reflect.defineProperty(target,key,{
        get : getter,
        set : setter
    });
}