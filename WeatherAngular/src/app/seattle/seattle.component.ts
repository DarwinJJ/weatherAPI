import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  humidity: String;
  aveTemp: String;
  highTemp: String;
  lowTemp: String;
  weatherStatus: String;
  weatherData: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSeattleWeather();
  }
  getSeattleWeather(){
    let observable = this._httpService.getWeather("98101");
    observable.subscribe(data => {
      this.humidity = data.main.humidity;
      this.avgTemp = this.kelvinToF(data.main.temp);
      this.highTemp = this.kelvinToF(data.main.temp_max);
      this.lowTemp = this.kelvinToF(data.main.temp_min);
      this.weatherStatus = data.weather[0].description;
      this.weatherData = data; 
    })
  }

  kelvinToF(temperature){
    var newTemp = Math.floor(temperature * (9/5) - 459.67);
    return newTemp; 
  }

}
