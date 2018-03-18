import { Component, OnInit } from '@angular/core';
import { OPCODES, Opcode} from './data';

@Component({
  selector: 'app-opcodes',
  templateUrl: './opcodes.component.html',
  styleUrls: ['./opcodes.component.css']
})
export class OpcodesComponent implements OnInit {
  displayedColumns = ['value', 'mnemonic', 'gas', 'removeStack', 'addStack', 'notes', 'formula'];
  dataSource = OPCODES;

  constructor() { }

  ngOnInit() {
  }

}
