import { Routes } from '@angular/router';
import { CarConfigComponent } from './components/car-config/car-config.component';
import { CarModelComponent } from './components/car-model/car-model.component'; ''
import { SummaryComponent } from './components/summary/summary.component';

export const routes: Routes = [
  { path: '', component: CarModelComponent },
  { path: 'config', component: CarConfigComponent },
  { path: 'summary', component: SummaryComponent }
];
