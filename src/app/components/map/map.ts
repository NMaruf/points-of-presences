// import { Component, Input } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { GoogleMapsModule } from '@angular/google-maps';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// import { latLng, tileLayer } from 'leaflet';

// interface Marker {
//   position: google.maps.LatLngLiteral;
//   label?: string;
// }

// @Component({
//   selector: 'map',
//   templateUrl: 'map.html',
//   styleUrls: ['map.css'],
//   standalone: true,
//   imports: [LeafletModule, GoogleMapsModule],
// })
// export class Map {
//   title = 'Google Maps with Angular';
  
//   // Начальная позиция карты
//   center: google.maps.LatLngLiteral = { lat: 51.678418, lng: 7.809007 };
//   zoom = 8;

//   // Массив меток
//   markers: Marker[] = [
//     { position: { lat: 51.678418, lng: 7.809007 }, label: 'Marker 1' },
//     { position: { lat: 51.689418, lng: 7.819007 }, label: 'Marker 2' },
//     { position: { lat: 51.670418, lng: 7.799007 }, label: 'Marker 3' },
//   ];
// }


// import { Component, Input } from '@angular/core';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// import { latLng, tileLayer } from 'leaflet';

// @Component({
//   selector: 'map',
//   templateUrl: 'map.html',
//   styleUrls: ['map.css'],
//   standalone: true,
//   imports: [LeafletModule],
// })
// export class Map {
//   // Начальные координаты центра карты
//   lat = 51.505;
//   lng = -0.09;
//   zoom = 13;

//   @Input() leafletMarkerOptions: any;

//   // Список меток
//   markers = [
//     { lat: 51.505, lng: -0.09, label: 'Marker 1' },
//     { lat: 51.51, lng: -0.1, label: 'Marker 2' },
//     { lat: 51.51, lng: -0.08, label: 'Marker 3' }
//   ];

//   // Опции карты
//   options = {
//     layers: [
//       tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 18,
//       }),
//     ],
//     zoom: this.zoom,
//     center: latLng(this.lat, this.lng),
//   };
// }

// import { Component, OnInit } from '@angular/core';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// import * as L from 'leaflet';

// @Component({
//   selector: 'map',
//   templateUrl: 'map.html',
//   styleUrls: ['map.css'],
//   standalone: true,
//   imports: [LeafletModule],
// })
// export class Map implements OnInit {
//   private map!: L.Map; 

//   ngOnInit(): void {
//     this.initMap();
//     this.addMarkers();
//   }

//   private initMap(): void {
//     this.map = L.map('map').setView([51.505, -0.09], 13);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//     }).addTo(this.map);
//   }

//   private addMarkers(): void {
//     const points = [
//       { lat: 51.5, lng: -0.09 },
//       { lat: 51.51, lng: -0.1 },
//       { lat: 51.49, lng: -0.08 }
//     ];

//     points.forEach(point => {
//       L.marker([point.lat, point.lng]).addTo(this.map);
//     });
//   }
// }

// src/app/map/map.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare const ymaps: any;

@Component({
  selector: 'map',
  templateUrl: 'map.html',
  styleUrls: ['map.css'],
  standalone: true,
  imports: [CommonModule],
})
export class Map implements OnInit {
  private map: any;
  // @Input() mapLoaded = new EventEmitter<boolean>();
  @Input() mapLoaded!: (loaded: boolean) => void;

  // Массив с данными о точках
  private points = [
    { coords: [55.751574, 37.573856], balloonContent: 'Москва' },
    { coords: [59.934280, 30.335099], balloonContent: 'Санкт-Петербург' },
    { coords: [54.738762, 55.972118], balloonContent: 'Уфа' },
    { coords: [56.838011, 60.597464], balloonContent: 'Екатеринбург' },
    { coords: [55.030199, 82.920430], balloonContent: 'Новосибирск' }
    // Добавьте другие точки по мере необходимости
  ];

  constructor() { }

  ngOnInit(): void {
    // this.mapLoaded.emit(true);
    this.initMap();
  }

  private initMap(): void {
    ymaps.ready(() => {
      this.map = new ymaps.Map('map', {
        center: [55.751574, 37.573856], // Центр карты (Москва)
        zoom: 4,
        controls: ['zoomControl']
      });

      // this.mapLoaded.emit(true);
      // if (this.mapLoaded) {
      //   console.log("внутр");
        
      //   this.mapLoaded(true);
      // }
  
      // Добавление меток на карту
      this.points.forEach(point => {
        const placemark = new ymaps.Placemark(point.coords, {
          balloonContent: point.balloonContent
        });
        this.map.geoObjects.add(placemark);
      });
      
    });
  }

  
}




