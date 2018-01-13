import {fillzero} from './fillzero';
export const datetime=(time)=>{
    var d=new Date();
    d.setTime(time);
    return `${d.getFullYear()}-${fillzero(d.getMonth()+1)}-${fillzero(d.getDate())}`;
}