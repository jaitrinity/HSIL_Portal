import { CurrencyPipe } from '@angular/common';

export const CustomCurrencyFormat = (target : object, key : string | symbol) => {
    let value = target[key];    
    let currencyPipe : CurrencyPipe;
    this.currencyPipe = new CurrencyPipe('en-Us');
    const getter = () => {
        return value;
    };

    const setter = (val) => {
        if(val != ''){
            value = this.currencyPipe.transform(val,'INR',true,'1.0-0');                     
        }        
        else {
            value = val;
        }
    }
    Reflect.defineProperty[key];
    Reflect.defineProperty(target,key,{
        get : getter,
        set : setter
    });
}