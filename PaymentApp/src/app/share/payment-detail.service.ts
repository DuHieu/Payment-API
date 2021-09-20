import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http : HttpClient) { }

  formData:PaymentDetail = new PaymentDetail();
  list : PaymentDetail[] | undefined;
  readonly baseUrl = 'http://localhost:31109/api/PaymentDetail'

  postPaymentDetail(){
   return this.http.post(this.baseUrl, this.formData);
  }

  putPaymentDetail(){
    return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymetDetail(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[])
  }
}
