import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message:string, title:any){
    this.toastr.success(message, title)
  }
  
  showError(message:string, title:any){
      this.toastr.error(message, title)
  }
  
  showInfo(message:string, title:any){
      this.toastr.info(message, title)
  }
  
  showWarning(message:string, title:any){
      this.toastr.warning(message, title)
  }
}
