import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  data: any = history.state.package
}
