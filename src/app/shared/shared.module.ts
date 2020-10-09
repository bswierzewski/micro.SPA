import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, HttpClientModule, FlexLayoutModule, FormsModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
})
export class SharedModule {}
