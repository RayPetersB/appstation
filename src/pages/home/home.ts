import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { removeArrayItem } from 'ionic-angular/umd/util/util';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GameServiceProvider } from '../../providers/game-service/game-service';
import { DialogInputServiceProvider } from '../../providers/dialog-input-service/dialog-input-service';
// import { SocialSharing } from '@ionic-native/social-sharing';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Appstation"

  errorMessage: string;





  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public AlertCtrl: AlertController, public dataService: GameServiceProvider, public dialogInputService: DialogInputServiceProvider, ) {



  }

  loadItems() {
    return this.dataService.getItems();
  }


  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'FINISH HIIIM! - .' + index + "...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);
  }


  // shareItem(item, index) {
  //   console.log("Sharing Item - ", item, index);
  //   const toast = this.toastCtrl.create({
  //     message: "Sharing Your Ish -." + index + "...",
  //     duration: 3000
  // });

  //   toast.present();

  //   let message = "Game Item - Name:" + item.name + " - Status " + item.status;
  //   let subject = "Shared via App Station";
  //   this.socialSharing.share(message, subject).then(() => {

  //     console.log("Shared Successfully!");
  //   }).catch((error) => {
  //     console.error("Error while sharing", error);
    // });





  



  editItem(item, index) {
    console.log("Editing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Forgot Something?? - .' + index + "...",
      duration: 3000
    });
    toast.present();
    this.dialogInputService.showPrompt(item, index);

  }

  addItem() {
    console.log("adding Item");
    this.dialogInputService.showPrompt();
  }




}

