import { Pipe, PipeTransform } from "@angular/core";

// fernando | toggleCase = 'FERNANDO'
// FERNANDO | toggleCase = 'fernando'

@Pipe({
  name: 'canFlyPipe'
})

export class CanFlyPipe implements PipeTransform{

  // transform(vuela: boolean = false): String {
  //   return  (vuela) ? 'VUELA' : 'NO VUELA';
  // }

  transform(vuela: boolean = false): 'VUELA' | 'NO VUELA' {
    return  (vuela) ? 'VUELA' : 'NO VUELA';
  }

}
