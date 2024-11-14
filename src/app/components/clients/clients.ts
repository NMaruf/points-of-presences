import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { ClientCard } from "../../common-ui/client-card/client-card";
import { PointsOfPresencesService } from '../../data/services/points-of-presences.service';
import { JsonPipe } from '@angular/common';
// import { Store } from '../../store/store';
import { store } from '../../store/store';
import { MobxAngularModule } from 'mobx-angular';

@Component({
  selector: 'clients',
  templateUrl: 'clients.html',
  styleUrl: 'clients.css',
  standalone: true,
  imports: [MatCardModule, JsonPipe, MatChipsModule, MatProgressBarModule, ClientCard, MobxAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// @observer
export class Clients {
    pointsOfPresencesService = inject(PointsOfPresencesService)


    store = store

  constructor() {
  }

  ngOnInit() {
    this.pointsOfPresencesService.getMrkpListWithFilters();
  }
}
