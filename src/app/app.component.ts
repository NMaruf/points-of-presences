import { AfterViewInit, Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointsOfPresencesService } from './data/services/points-of-presences.service';
import {CommonModule, JsonPipe } from '@angular/common';
import { IPointPresences } from './data/interfaces/points.interface';
import { ClientCard } from "./common-ui/client-card/client-card";
import { Clients } from "./components/clients/clients";
import { Filters } from "./components/filters/filters";
import { Map } from "./components/map/map";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe} from '@angular/common';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, ClientCard, Clients, Filters, LeafletModule, Map, MatTabsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'points-of-presences';
  // pointsOfPresencesService = inject(PointsOfPresencesService)
  // isVisible = false;

  // ngAfterViewInit() {
  //   this.checkElement();
  // }

  // toggleVisibility() {
  //   this.isVisible = !this.isVisible;
  //   setTimeout(() => this.checkElement(), 0); // Ждем обновления DOM
  // }

  // checkElement() {
  //   console.log("checkElement");
    
  //   const myElement = document.getElementById('my-element-id');
  //   if (myElement) {
  //     const width = myElement.offsetWidth;
  //     console.log('Width:', width);
  //   } else {
  //     console.error('Element not found');
  //   }
  // }

  // clients: any = []

  // constructor() {
  //   this.pointsOfPresencesService.getMrkpListWithFilters().subscribe((val: any) => {
  //     this.clients = val.clients
  //   })
  // }

  // @Input() 
  mapLoaded = false;

  onMapLoaded(event: any) {
    this.mapLoaded = event?.target.value;
    if (event?.target.value) {
      console.log('Карта загружена и готова к использованию');
      // Здесь можно выполнить дополнительные действия, если это необходимо
    }
  }
  
}
