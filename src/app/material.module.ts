import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatListModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatListModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatListModule, MatInputModule],
})
export class MaterialModule { }