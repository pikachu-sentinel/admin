import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PipelineService } from '../pipeline.service';
import { History } from '../history';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-history-view',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './history-view.component.html',
  styleUrl: './history-view.component.css'
})

export class HistoryViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'with', 'fromtime', 'duration', 'file'];
  dataSource = new MatTableDataSource<History>([]);
  @ViewChild(MatPaginator, { static: false }) paginator: any

  constructor(private pipelineService: PipelineService) {
  }
  ngOnInit() {
    this.pipelineService.getHistories().subscribe((data: History[]) => {
      this.dataSource.data = data
    })
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
