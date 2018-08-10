import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewsProvider} from '../../providers/news/news';
import Arr from '../Array';
import { Info } from '../Class';
// import 'rxjs/add/operator/map';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  url;
  arr = [];
  name;
  // private searchQuery: string = '';
  cities = [];
  temp:string;
  list :string [];
description:string;
  condition;
  city;
  deg:string;
  icon1 = 'http://openweathermap.org/img/w/10d.png';
  constructor(public navCtrl: NavController,private news:NewsProvider) {

    console.log(this.city);

    this.news.GetWeather(this.city).then((data:any)=>{
      console.log(data);
      

      // this.name = data.name
      // this.humidity=data.main.humidity;
      // this.deg = data.wind.deg;
      // this.description=data.weather[0].description;
   

      // this.icon = data.weather[0].icon;


  
  //  this.arr.push(data.weather);

  //     for (let index = 0; index < 9; index++) {
  
  //       this.arr.push(data.weather[index]);
       
        
      
  
   
  //  console.log(this.arr);
  //     }    
  });

  }
  ionViewWillEnter() {
    // this.initializeList();
   }

   ViewNews(name,description,deg,temp,icon){
    this.news.GetWeather(this.city).then((data:any)=>{
      this.name = data.name;
      this.temp=data.main.temp;
      this.deg = data.wind.deg;
      this.description=data.weather[0].description;
      this.icon1 = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      this.temp = (data.main.temp - 273.15).toFixed() + "°c";
      console.log(data);
    });
//     //  let B = new Info(name,description,deg,temp,icon);
//     //  console.log(this.arr);
// this.arr.push(B);
   }

// getWeather(a:any){
// this.initializeList();
// this.news;
// let B = a.target.value;
// if (B && B.trim() != '') {
//   this.list = this.list.filter((L) => {
//     return (L.toLowerCase().indexOf(B.toLowerCase()) > -1);
//   })
// }
// }

//    initializeList(){
//      this.list = ['johannesburg','kimberley','bloemfontein','polokwane','durban','capetown','Mahikeng','Nelspruit'];
//    }

//   getWeather(city:string, country:string){
// this.news.GetWeather(city,country)
// // .map(data =>data.json())
// .subscribe(data =>{
//   this.arr.push(data);
// })
  
}
