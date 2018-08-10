import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { HomePage } from '../home/home';





/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  article;
  image ;
url;
  arr =[];
  publishedAt;
  description;
  title;

  indx  =this.navParams.get("obj");
obj;
  constructor(public navCtrl: NavController, public navParams: NavParams,private news:NewsProvider) {

    this.news.GetNews().then((data:any)=>{
      console.log(data);
  
      this.image=data.articles[0].urlToImage;
      this.url=data.articles[0].url;
    this.description = data.articles[0].description;
  this.title =  data.articles[0].title;
  
  for (let index = 0; index < 9; index++) {
  
    this.arr.push(data.articles[index]);
   
    
  }
  

  this.news.GetNews().then((data:any)=>{
    this.obj =  data.articles[this.navParams.get("obj")];
 
      if(this.obj != null || this.obj != undefined){
        this.title = this.obj.title;
        this.image= this.obj.urlToImage;
        this.url = this.obj.url;
        this.description = this.obj.description;
        this.publishedAt = this.obj.publishedAt;
      }
    else{
         this.title = this.navParams.get('sendTopic');
        this.url = this.navParams.get('sendSite');
         alert(this.navParams.get(this.obj))
    }
  })

  
  
  
      // for (let index = 0; index < 9; index++) {
  
      //   this.arr.push(data.articles[index]);
       
        
      // }
  
  
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  View(){

  }

}
