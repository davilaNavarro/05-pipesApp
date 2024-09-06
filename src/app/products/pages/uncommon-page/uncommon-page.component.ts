import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

//I18n Select
public name:string = 'Anderson';
public gender:'male'|'female' = 'male';
public invitationMap ={
  'male': 'invitarlo',
  'female': 'invitarla',
}

changeClient():void{
  this.name = 'Melissa';
  this.gender = 'female';
}

//i18nPlural
public clients: string[] = ['Anderson', 'Kimber', 'Tio pollo', 'Nico'];
public clientsMap ={
  '=0' : 'no tenemos ningún cliente esperando',
  '=1' : 'no tenemos un cliente esperando',
  'other' : 'no tenemos # clientes esperando',
}

deleteClient(){
  this.clients.shift();
}

//keyValue Pipe
public person = {
  name: 'Fernando',
  age: 26,
  address: 'PH'
}

//Async Pipe
public myObervavleTimer: Observable<number> = interval(2000).pipe(
  tap(value => console.log('tap', value))
);

public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
  setTimeout(() =>{
    resolve('tenemos data en la promesa')
    console.log('tenemos data en la promesa')
  }, 3500);
})


}
