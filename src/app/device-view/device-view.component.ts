import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { PipelineService } from '../_services/pipeline.service';
import { timer } from 'rxjs';
import { State } from '../_models/state.model';

/**
 * @title Card with footer
 */
@Component({
  selector: 'app-device-view',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './device-view.component.html',
  styleUrl: './device-view.component.css'
})

export class DeviceViewComponent {
  stateList: State[] = [];

  constructor(private pipelineService: PipelineService) {
    timer(1000, 1000).subscribe(() => {
      this.pipelineService.sendStates();
    });
  }

  ngOnInit() {
    this.pipelineService.getStates().subscribe((data: State[]) => {
      this.stateList = data.slice(0, 5);
    })
  }
}
