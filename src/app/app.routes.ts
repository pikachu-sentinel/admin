import { Routes } from '@angular/router';
import { DeveloperViewComponent } from './developer-view/developer-view.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { HistoryViewComponent } from './history-view/history-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'history', component: HistoryViewComponent },
    { path: 'state', component: DeviceViewComponent },
    { path: 'developer', component: DeveloperViewComponent }
];