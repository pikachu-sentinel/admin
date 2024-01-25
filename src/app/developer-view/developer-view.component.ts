import { Component } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { PipelineService } from '../_services/pipeline.service';
import { User } from '../_models/user.model';



@Component({
  selector: 'app-developer-view',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './developer-view.component.html',
  styleUrl: './developer-view.component.css'
})
export class DeveloperViewComponent {
  userList: User[] = [];
  displayedColumns: string[] = ['name', 'password'];
  dataSource = new MatTableDataSource<User>([]);

  constructor(private pipelineService: PipelineService, public dialog: MatDialog) {
    this.pipelineService.sendgetAll();
  }
  ngOnInit() {
    this.pipelineService.getAll().subscribe((data: User[]) => {
      this.dataSource.data = data;
    })
  }
}