import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarConfiguratorService } from '../../services/car-configurator.service';
import { NavbarComponent } from '../navbar/navbar.component';


export interface Config {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
}

export interface ConfigList {
  configs: Config[];
  towHitch: boolean;
  yoke: boolean;
}

@Component({
  selector: 'app-car-config',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, CurrencyPipe],
  templateUrl: './car-config.component.html',
  styleUrl: './car-config.component.scss'
})
export class CarConfigComponent implements OnInit {

  configList: ConfigList;
  selectedConfig: Config | undefined;
  selectedCarImageUrl: string;
  selectedModelCode: string;
  constructor(public service: CarConfiguratorService) { }

  ngOnInit() {

    this.service.getCarConfig(this.service.selectedModelCode).subscribe({
      next: (res) => {
        this.configList = res;
      },
      error: (e) => {
        console.log(e)
      }
    })

  }

  onConfigChange() {
    if (!this.service.selectedConfigId)
      this.service.isConfigSelected = false;
    else {
      this.service.selectedConfig = this.configList.configs.filter(x => x.id == this.service.selectedConfigId)[0];
      // localStorage.setItem('selectedConfig', JSON.stringify(this.service.selectedConfig));
      this.service.isConfigSelected = true;
      // localStorage.setItem('isConfigSelected', 'true');
    }
  }

}
