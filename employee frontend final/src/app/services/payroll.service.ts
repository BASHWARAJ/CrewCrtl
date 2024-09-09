// src/app/services/payroll.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  private apiUrl = 'http://localhost:8080/api/payroll'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  calculatePayroll(payrollData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payrollData);
  }
}
