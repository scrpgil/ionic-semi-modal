import { Component } from "@angular/core";
import { IonicPage, ViewController, NavParams } from "ionic-angular";
import { BackdropProvider } from "../../providers/backdrop/backdrop";

@IonicPage()
@Component({
  selector: "page-semi-modal",
  templateUrl: "semi-modal.html"
})
export class SemiModalPage {
  counter: number = 0;

  constructor(public viewCtrl: ViewController, public navPrams: NavParams, public backdrop: BackdropProvider) {
    this.counter = this.navPrams.data.counter;
    this.backdrop.show();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SemiModalPage");
  }

  up() {
    this.counter++;
  }

  down() {
    this.counter--;
  }

  close() {
    this.backdrop.hide();
    this.viewCtrl.dismiss(null);
  }
  save() {
    this.backdrop.hide();
    this.viewCtrl.dismiss(this.counter);
  }
}
