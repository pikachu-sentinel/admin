import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';
import { PipelineService } from './pipeline.service';
import { History } from './history';
import { State } from './state';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin';
}


// newMessage = '';
// messageList: string[] = [];
// historyList: History[] = [];
// stateList: State[] = [];

// constructor(private pipelineService: PipelineService) {
//   timer(1000, 1000).subscribe(() => {
//     this.pipelineService.sendStates();
//   });
// }

// ngOnInit() {
//   // this.pipelineService.getNewMessage().subscribe((message: string) => {
//   //   this.messageList.push(message);
//   //   console.log(this.messageList);
//   // })
//   this.pipelineService.getStates().subscribe((data: State[]) => {
//     this.stateList = data;
//   })
//   this.pipelineService.getHistories().subscribe((data: History[]) => {
//     this.historyList = data;
//   })
// }

// sendMessage() {
//   this.pipelineService.sendMessage(this.newMessage);
//   this.newMessage = '';
// }