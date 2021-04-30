import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameServiceProvider } from '../../providers/game-service/game-service';
import { AlertController } from 'ionic-angular';




/*
  Generated class for the DialogInputServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DialogInputServiceProvider {

  constructor(public http: HttpClient, public AlertCtrl: AlertController, public dataService: GameServiceProvider,) {
    console.log('Hello DialogInputServiceProvider Provider');
  }


  showPrompt(item?, index?) {
    const alert = this.AlertCtrl.create({
      title: item ? 'Edit Item' : "Add Item",
      message: item ? "Please edit item" : "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Game Name',
          value: item ? item.name : null
        },
        {
          name: 'status',
          placeholder: 'Status',
          value: item ? item.Status : null
          
          

          

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log("Saved CLick", item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);

            }
            else {
              this.dataService.addItem(item);

            }

          }
        }
      ]
    });
    alert.present();
  }




}




