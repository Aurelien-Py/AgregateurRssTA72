import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Feed } from '../../models/Feed/feed';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public feed: Feed;
  public nombre: number;
  public listImages = [ 'assets/imgs/Image1.jpg', 'assets/imgs/Image2.jpg','assets/imgs/Image3.jpg','assets/imgs/Image4.jpg'];
  public image;
  public feeddescription: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.feed = navParams.get('feed');
    this.randomImage(this.feed);
    this.getDescription(this.feed);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  } 

  openlink(feed: Feed){
    window.open(feed.link);
  }
  randomImage(feed: Feed) {
    let min = 0;
    let max = 4;
    this.nombre = Math.floor((Math.random() * (max - min))+ min);
    if(!feed.thumbnail){
    this.image = this.listImages[this.nombre];
    }
    else {
      this.image =  feed.thumbnail ;
    }
  }

  getDescription(feed: Feed){
    if (!feed.description){
      this.feeddescription = null ;
    }
    else {
      this.feeddescription = feed.description;
    }
  }
}
