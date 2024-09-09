// src/app/components/payroll/payroll.component.ts
import { Component } from '@angular/core';
import { PayrollService } from '../../services/payroll.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent {
  payrollDetails: any[] = [];

  constructor(private payrollService: PayrollService) { }

  // Handle form submission
  onSubmit(form: NgForm) {
    if (form.valid) {
      const payrollData = form.value;
      this.payrollService.calculatePayroll(payrollData).subscribe(
        (data) => {
          this.payrollDetails.push(data); // Add the calculated payroll to the list
          form.reset(); // Reset the form
        },
        (error) => {
          console.error('Error calculating payroll', error);
        }
      );
    }
  }
}
