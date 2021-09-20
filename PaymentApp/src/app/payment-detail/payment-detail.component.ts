import { PaymentDetailService } from 'src/app/share/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../share/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:PaymentDetail){
    this.service.formData = selectedRecord;
  }

  onDelete(id: number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deletePaymetDetail(id)
      .subscribe(
      res =>{
        this.service.refreshList();
        this.toastr.error('Delete successfully', 'Payment Detail Register')
      },
      err =>{
        console.log(err)
      }
      )
    }


  }
}
