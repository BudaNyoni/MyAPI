import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
 
  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }
  GetNews(){

    let apiKey =" https://newsapi.org/v2/top-headlines?sources=news24&apiKey=ba26fa667ad14ac5ba20716d4d0d1bb2"
  
    return new Promise((resolve,reject) => {
      this.http.get(apiKey).subscribe(data =>{
        resolve(data);
      })
    });
}
GetBusiness(){

  let apiKey =" https://newsapi.org/v2/top-headlines?sources=the-economist&apiKey=ba26fa667ad14ac5ba20716d4d0d1bb2"

  return new Promise((resolve,reject) => {
    this.http.get(apiKey).subscribe(data =>{
      resolve(data);
    })
  });
}
GetSports(){
  let apiKey = "https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=ba26fa667ad14ac5ba20716d4d0d1bb2";
  
  
  return new Promise((resolve,reject) => {
    this.http.get(apiKey).subscribe(data =>{
      resolve(data);
    })
  });
}
// GetSoccer(){
//   let apikey ="http://apisoccer.com/api/Soccer/isAlive?apiKey=freeAPIKey"; 
// }

GetWeather(city){
  // let apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=durban,southafrica&APPID=a61b0fc36627acc74a0eaf82a9d07e8a' ;
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=' +city +','+'southafrica&APPID=a61b0fc36627acc74a0eaf82a9d07e8a'
  return new Promise((resolve,reject) => {
    this.http.get(url).subscribe(data =>{
      resolve(data);
    })
  });
  

//  this.Apikey =  'a61b0fc36627acc74a0eaf82a9d07e8a'

//  this.url = 'https://api.openweathermap.org/data/2.5/'
  
//  let Url = this.url + 'weather';
//  Url +='?Apikey=' + this.Apikey;
//  Url += '&q=' + city;
//  Url += ',' + country;
//  return this.http.get(Url);
// let G = new apiKey(){

// }

}
}
