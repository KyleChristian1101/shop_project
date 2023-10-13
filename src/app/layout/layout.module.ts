import { NgModule } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from '../component/topnav/topnav.component';
import { SidenavComponent } from '../component/sidenav/sidenav.component';
import { ScreenComponent } from '../component/screen/screen.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,


  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    
  ]
  
})
export class LayoutModule { }