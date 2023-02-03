import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



const routes: Routes = [
  {
    path:"", component:DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forChild(routes), MatSidenavModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
