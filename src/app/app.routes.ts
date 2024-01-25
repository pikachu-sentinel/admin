import { Routes } from '@angular/router';
import { DeveloperViewComponent } from './developer-view/developer-view.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { HistoryViewComponent } from './history-view/history-view.component';

export const routes: Routes = [
    { path: 'history', component: HistoryViewComponent },
    { path: 'state', component: DeviceViewComponent },
    { path: 'developer', component: DeveloperViewComponent }
];