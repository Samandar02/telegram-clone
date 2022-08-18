import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string): string {
    return ((<string>value).substring(0,20)+"...");
  }

}
