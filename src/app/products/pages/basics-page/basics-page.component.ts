import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPAgeComponent {

  public nameLower:string = 'daniela'
  public nameUpper:string = 'DANIELA'
  public fullName:string = 'dANiElA aViLA'

  public customDate:Date = new Date();

}
