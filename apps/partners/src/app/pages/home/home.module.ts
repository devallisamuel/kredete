import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@kredete-frontends/third-party-style';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('dashboard', {}),
    MaterialModule,
    MatSidenavModule,
  ],
})
export class HomeModule {}
