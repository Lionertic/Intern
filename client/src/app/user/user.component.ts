import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Transaction} from '../Transaction';
import {TransactionService} from '../transaction.service';
import { UsersService } from '../users.service';
import { User } from '../User';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  transactions:Transaction[];
  id:string;
  users:User[];

  constructor(private router:Router,private transactionService:TransactionService,private usersService:UsersService) { }

  ngOnInit() {
    this.id=this.router.url.substring(6);
    this.usersService.getUsers()
    .subscribe( users => {
      this.users=users;
      this.transactionService.getTransactions(this.id)
        .subscribe(transaction => this.transactions=transaction);
    });
  }
}
