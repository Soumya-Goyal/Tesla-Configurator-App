import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarConfiguratorService } from '../../services/car-configurator.service';
import { NavbarComponent } from '../navbar/navbar.component';



export interface ModelColors {
  code: string;
  description: string;
  price: number;
}

export interface Model {
  code: string;
  colors: ModelColors[];
  description: string;
}

@Component({
  selector: 'app-car-model',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './car-model.component.html',
  styleUrl: './car-model.component.scss'
})
export class CarModelComponent implements OnInit {
  public selectedModel: Model;
  public selectedColor: ModelColors;
  public modelList: Model[] = [];
  public modelColors: ModelColors[] = [];
  public imageUrl: string = 'assets/images/'
  public selectedCarImageUrl: string = '';

  constructor(public service: CarConfiguratorService) {
  }

  ngOnInit() {

    this.service.getCarModel().subscribe({
      next: (res) => {
        this.modelList = res;
      },
      error: (e) => {
        console.log(e)
      }
    })

  }

  onModelChange() {
    if (this.service.selectedModelCode === undefined) {
      this.service.selectedColorCode = '';
      this.service.modelColors = [];
      this.service.isModelAndColorSelected = false;
      this.service.isConfigSelected = false;
    }

    else {
      this.service.selectedModel = this.modelList.filter(x => x.code == this.service.selectedModelCode)[0];
      //   localStorage.setItem('selectedModel', JSON.stringify(this.service.selectedModel));
      this.service.modelColors = [];
      let i = this.modelList.findIndex((model) => model.description == this.service.selectedModel.description);
      this.service.modelColors = this.modelList[i].colors;
      this.service.selectedColorCode = this.service.selectedModel.colors[0].code;
      this.onColorChange();
    }
  }

  onColorChange() {
    this.service.selectedColor = this.service.modelColors.filter(x => x.code == this.service.selectedColorCode)[0];
    // localStorage.setItem('selectedColor', JSON.stringify(this.service.selectedColor));
    this.service.selectedCarImageUrl = this.imageUrl + this.service.selectedModelCode + ':' + this.service.selectedColorCode + '.jpeg';
    // localStorage.setItem('selectedImage', this.service.selectedCarImageUrl);
    if (this.service.selectedCarImageUrl != '') {
      this.service.isModelAndColorSelected = true;
      // localStorage.setItem('isModelAndColorSelected', 'true');
    }
    this.resetStep2Info();
  }

  resetStep2Info() {
    this.service.selectedConfigId = undefined;
    this.service.selectedConfig = undefined;
    this.service.isConfigSelected = false;
    this.service.isTowHitchChecked = false;
    this.service.isYokeChecked = false;
  }
}
