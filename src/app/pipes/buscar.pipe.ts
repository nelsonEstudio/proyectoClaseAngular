import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"buscar"})
export class BuscarPipe implements PipeTransform {
    transform(value: any[], property:string, val:string) {
        return value.filter(infoarreglo=> infoarreglo[property].includes(val) )
    }
}