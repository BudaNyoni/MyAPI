import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import {NewsProvider} from '../../providers/news/news';
import { ViewPage } from '../view/view';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  article;
  image ;
url;
  arr =[];
 
  splash = true;
  secondPage = SecondPage;

  constructor(public navCtrl: NavController,private news:NewsProvider) {
    this.news.GetNews().then((data:any)=>{
      console.log(data);
  
      this.image=data.articles[0].urlToImage ;
      this.url=data.articles[0].url;
  
  
      for (let index = 0; index < 9; index++) {
  
        this.arr.push(data.articles[index]);
       
        
      }
  
  
      
    })
  }
  ionViewDidLoad(){
    setTimeout(()=>this.splash = false , 3000);
 
 }

 Stories(i){
 
  this.navCtrl.push(ViewPage , {obj:i});
}
//  ViewNews(i){
//   this.news.GetNews().then((data:any)=>{
    
//     this.arr.push(data.articles[i]);
//     console.log(data);

//     // this.image=data.articles[0].urlToImage ;
//     // this.url=data.articles[0].url;

 
  
  
//    this.navCtrl.push(ViewPage)
//  console.log(this.arr);
  
 
// });
//  }
}
