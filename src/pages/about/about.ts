import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewsProvider} from '../../providers/news/news';
import { ViewsportsPage } from '../viewsports/viewsports';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  article;
  image ;
url;
  arr =[];
  constructor(public navCtrl: NavController,private news:NewsProvider) {
    this.news.GetSports().then((data:any)=>{
      console.log(data);
  
      this.image=data.articles[0].urlToImage ;
      this.url=data.articles[0].url;
  
  
      for (let index = 0; index < 9; index++) {
  
        this.arr.push(data.articles[index]);
       
        
      }
  
  
      
    })
  }
  Sports(i){
 
    this.navCtrl.push(ViewsportsPage , {obj:i});
  }
  }


