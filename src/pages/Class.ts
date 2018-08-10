export class Info{

name:string;
humidity:string;
deg:string;
description:string;
icon;


constructor(name:string,humidity:string,deg:string,description:string,icon){
this.name = name;
this.humidity = humidity;
this.deg = deg;
this.description = description;
this.icon = icon;
}
}