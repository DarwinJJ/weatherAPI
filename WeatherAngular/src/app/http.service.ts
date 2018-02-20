import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {

  }
  getWeather(zipcode) {
    let weather = this._http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=8e8c83b1a88c4203fff51af41d98b59a`);
    return weather;
  }

}


