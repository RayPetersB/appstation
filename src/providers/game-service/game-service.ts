import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { removeArrayItem } from 'ionic-angular/umd/util/util';

/*
  Generated class for the GameServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameServiceProvider {

  items =[
    {
    name: "Final Fantasy 7 Remake",
    status: "Chapter 4 - extreme mode"
    },
  ];








  constructor(public http: HttpClient) {
    console.log('Hello GameServiceProvider Provider');
  }


  

  getItems() {
    return this.items
  }

  removeItem(index){
    this.items.splice(index,1)
  }

  addItem(item){
    this.items.push(item);

  }

  editItem(item,index){
    this.items[index] = item;
  }

}

// removeItem(index) 