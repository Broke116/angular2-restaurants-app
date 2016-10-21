import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name:'custom' })

export class CustomPipe implements PipeTransform {
    transform(value:string,args:string[]){
        var limit = (args && args[0]) ? parseInt(args[0]):10;
        if(value){
            return value.substring(0, limit) + "...";
        }
    }
}