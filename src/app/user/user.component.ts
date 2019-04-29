import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Transaction} from '../Transaction';
import {TransactionService} from '../transaction.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  transactionsFrom:Transaction[];
  transactionsTo:Transaction[];
  id:string;

  constructor(private router:Router,private transactionService:TransactionService) { }

  ngOnInit() {
    this.id=this.router.url.substring(6);
    
    this.transactionService.getTransactionsFrom(this.id)
      .subscribe(transaction => this.transactionsFrom=transaction);

    this.transactionService.getTransactionsTo(this.id)
      .subscribe(transaction => this.transactionsTo=transaction);
  }
}
