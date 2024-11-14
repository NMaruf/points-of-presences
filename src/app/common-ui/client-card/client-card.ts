import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { JsonPipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from '../modal/dialog';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Card with footer
 */
@Component({
  selector: 'client-card',
  templateUrl: 'client-card.html',
  styleUrl: 'client-card.css',
  standalone: true,
  imports: [MatCardModule, JsonPipe, MatChipsModule, MatProgressBarModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCard {
    
    longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
    Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
    usually kept as a companion animal or for showing.`;
    @Input() client: any;
    readonly dialog = inject(MatDialog);

    openDialog(): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        // minWidth: '90%',
        minWidth: '1200px',
        data: this.client.pointsOfPresence,
      });
  
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('Диалог закрыт');
      });
    }
}
