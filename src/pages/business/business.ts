import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewBusinessPage } from '../view-business/view-business';
import { NewsProvider } from '../../providers/news/news';


/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {
  article;
  image ;
url;
  arr =[];
  constructor(public navCtrl: NavController,private news:NewsProvider) {
    this.news.GetBusiness().then((data:any)=>{
      console.log(data);
  
      this.image=data.articles[0].urlToImage ;
      this.url=data.articles[0].url;
  
  
      for (let index = 0; index < 9; index++) {
  
        this.arr.push(data.articles[index]);
       
        
      }
  
  
      
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }
  Stories(i){
 
    this.navCtrl.push(ViewBusinessPage , {obj:i});
  }
}
