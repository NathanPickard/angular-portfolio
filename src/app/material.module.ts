import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatRadioModule
  ]
})
export class MaterialModule { }


