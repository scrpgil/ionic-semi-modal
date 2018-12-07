import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  counter: number = 0;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  showSemiModal() {
    const modal = this.modalCtrl.create("SemiModalPage", {
      counter: this.counter
    });
    modal.onDidDismiss(res => {
      if (res !== null) {
        this.counter = res;
      }
    });
    modal.present();
  }
}
