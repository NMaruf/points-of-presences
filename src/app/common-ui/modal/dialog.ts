import {ChangeDetectionStrategy, Component, Inject, inject, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { JsonPipe } from '@angular/common';
import { TableExpandableRowsExample } from "../table/table";
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Dialog with header, scrollable content and actions
 */
// @Component({
//   selector: 'dialog-content-example',
//   templateUrl: 'dialog-content-example.html',
//   standalone: true,
//   imports: [MatButtonModule, MatDialogModule],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class DialogContentExample {
//   readonly dialog = inject(MatDialog);

//   openDialog() {
//     const dialogRef = this.dialog.open(DialogComponent);

//     dialogRef.afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     });
//   }
// }

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
//   standalone: true,
//   imports: [MatDialogModule, MatButtonModule],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class DialogComponent {}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  styleUrl: 'dialog.css',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, JsonPipe, TableExpandableRowsExample, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  readonly dialog = inject(MatDialog);
  constructor(
  public dialogRef: MatDialogRef<DialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) {}

  // @Input() point: any;

  onClose(): void {
    this.dialogRef.close();
  }
}
