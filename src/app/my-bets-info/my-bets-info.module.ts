import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBetsInfoComponent } from './my-bets-info/my-bets-info.component';



@NgModule({
  declarations: [MyBetsInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyBetsInfoComponent
  ]
})
export class MyBetsInfoModule { }
