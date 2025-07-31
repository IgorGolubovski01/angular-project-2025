import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserModel } from '../models/user.model';
import { MatTableModule } from '@angular/material/table';
import { UtilsService } from '../../services/utils.service';
import { OrderModel } from '../models/order.model';

@Component({
  selector: 'app-user',
  imports: [NgIf, MatButtonModule, MatCardModule, MatTableModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    displayedColumns: string[] = ['id', 'destination', 'airline', 'count','price','total','status','rating', 'actions'];

  public user: UserModel | null = null

  constructor(private router: Router, public utils: UtilsService){
    if (!UserService.getActiveUser){
      router.navigate(['/home'])
      return
    }

    this.user = UserService.getActiveUser()
  }

  public doChangePassword(){
    const newPassword = prompt('Enter your new password')
    if(newPassword == '' || newPassword == null){
      alert('Password cannot be empty')
      return
    }
    alert(UserService.changePassword(newPassword) ? 'Password has been changed' : 'Failed to change password')
  }

  public doPay(order: OrderModel){
    order.status = 'paid'
    if(UserService.createOrUpdateOrder(order)){
      alert("Paid")
      this.user = UserService.getActiveUser()
      return
    }
  }
}
