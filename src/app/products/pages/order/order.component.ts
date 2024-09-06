import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heros:Hero[]= [
    {
      name:'Superman',
      canFly: true,
      color: Color.red
    },
    {
      name:'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name:'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name:'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name:'Linterna verde',
      canFly: true,
      color: Color.green
    },
  ]

  toggleupperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero){
    this.orderBy = value;
  }

}
