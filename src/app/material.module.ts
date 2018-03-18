import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatListModule, MatInputModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatListModule, MatInputModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatListModule, MatInputModule, MatSidenavModule],
})
export class MaterialModule { }