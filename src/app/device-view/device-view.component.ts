import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { PipelineService } from '../pipeline.service';
import { timer } from 'rxjs';
import { State } from '../state';

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
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  stateList: State[] = [];

  constructor(private pipelineService: PipelineService) {
    timer(1000, 1000).subscribe(() => {
      this.pipelineService.sendStates();
    });
  }

  ngOnInit() {
    this.pipelineService.getStates().subscribe((data: State[]) => {
      this.stateList = data;
    })
  }
}
