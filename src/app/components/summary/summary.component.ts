import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CarConfiguratorService } from '../../services/car-configurator.service';
import { Config } from '../car-config/car-config.component';
import { Model, ModelColors } from '../car-model/car-model.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CurrencyPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  public selectedModel: Model;
  public selectedColor: ModelColors;
  public selectedConfig = {} as Config;
  public selectedCarImageUrl: string;
  public totalPrice: number;
  public towHitchPrice: number = 1000;
  public yokePrice: number = 1000;

  constructor(public service: CarConfiguratorService) { }

  ngOnInit() {
    this.totalPrice = (this.service.selectedConfig ? this.service.selectedConfig.price : 0) + this.service.selectedColor.price;
    if (this.service.isTowHitchChecked)
      this.totalPrice += 1000;
    if (this.service.isYokeChecked)
      this.totalPrice += 1000;

  }
}
