import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../components/car-config/car-config.component';
import { Model, ModelColors } from '../components/car-model/car-model.component';

@Injectable({
  providedIn: 'root'
})
export class CarConfiguratorService {

  private headers: HttpHeaders;
  public selectedModel: Model;
  public selectedModelCode: string | undefined;
  public selectedColor: ModelColors;
  public modelColors: ModelColors[];
  public selectedColorCode: string;
  public selectedConfig: Config | undefined;
  public selectedConfigId: number | undefined;
  public selectedCarImageUrl: string;
  public isModelAndColorSelected: boolean = false;
  public isConfigSelected: boolean = false;
  public isTowHitchChecked: boolean = false;
  public isYokeChecked: boolean = false;

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  public getCarModel(): Observable<any> {

    let url: string = "/models"

    return this.http.get(url, { headers: this.headers });

  }

  public getCarConfig(modelCode: any): Observable<any> {

    let url: string = "/options/" + modelCode;

    return this.http.get(url, { headers: this.headers });

  }
}
