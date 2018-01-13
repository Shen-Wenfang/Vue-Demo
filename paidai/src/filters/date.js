import {fillzero} from './fillzero';
export const date=(time)=>{
    var d=new Date();
    d.setTime(time);
    return `${d.getHours()}:${fillzero(d.getMinutes())}`;
}