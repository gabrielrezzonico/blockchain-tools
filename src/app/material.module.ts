import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatListModule, MatInputModule, MatSidenavModule,
    MatTableModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatListModule, MatInputModule, MatSidenavModule,
    MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatListModule, MatInputModule, MatSidenavModule,
    MatTableModule],
})
export class MaterialModule { }