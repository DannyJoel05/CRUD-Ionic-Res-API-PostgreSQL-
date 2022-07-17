import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private url:string;
  public ruta:string;
  public json:any;

  constructor() { 
    this.url= environment.apiUrl;
  }
  //Definir el metodo get

  public async getService():Promise<any>{
     console.log(this.url+this.ruta)
    try {
      const res= await axios({
        method:'GET',
        url:this.url+this.ruta
      })
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  public async postService():Promise<any>{
    try {
      const res= await axios({
        method:'POST',
        url:this.url+this.ruta,
        data: this.json
      })
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }



}
