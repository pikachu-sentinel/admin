
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { PipelineService } from '../_services/pipeline.service';
import { User } from '../_models/user.model';

import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { pipe } from 'rxjs';

export interface DialogData {
  password: string;
  name: string;
  id: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-developer-view',
  templateUrl: './developer-view.component.html',
  styleUrl: './developer-view.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule],
})
export class DeveloperViewComponent {
  userList: User[] = [];

  password: string = "";
  name: string = "";

  constructor(public dialog: MatDialog, private pipelineService: PipelineService) {
    this.pipelineService.sendgetAll();
  }

  ngOnInit() {
    this.pipelineService.getAll().subscribe((data: User[]) => {
      this.userList = data;
    })
  }
  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, id: id,password: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.password = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private pipelineService: PipelineService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(data:DialogData): void {
   this.pipelineService.EditUser(data);
   this.dialogRef.close();
  }
}
