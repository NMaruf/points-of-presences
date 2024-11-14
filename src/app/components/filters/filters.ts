import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface IFilter {
    value: string;
    viewValue: string;
  }

/** @title Basic date range picker */
@Component({
  selector: 'filters',
  templateUrl: 'filters.html',
  styleUrl: 'filters.css',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatDatepickerModule, MatSelectModule, MatInputModule, MatChipsModule, MatIconModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Filters {
    selectedValue!: string;
    statuses: IFilter[] = [
        {value: 'allStatuses', viewValue: 'Все'},
        {value: 'active', viewValue: 'Активная'},
        {value: 'notactive', viewValue: 'Неактивная'}
      ];

    predodobies: IFilter[] = [
        {value: 'allPredodoby', viewValue: 'Все'},
        {value: '30', viewValue: 'Предодобы до 30%'},
        {value: '50', viewValue: 'Предодобы 30-50%'},
        {value: '70', viewValue: 'Предодобы более 50%'}
      ];


}