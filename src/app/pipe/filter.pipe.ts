import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(objs:any, term:any): any {
    if (term === undefined) {
    return objs;
    }
    return objs.filter((obj)=> {
    return (obj.teamOne.toLowerCase().includes(term.toLowerCase())
    || obj.teamTwo.toLowerCase().includes(term.toLowerCase()))
    })
  }

}
