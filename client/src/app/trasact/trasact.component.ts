import { Component, OnInit } from '@angular/core';
import {TransactService} from '../transact.service'
import {Router} from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../User';
@Component({
  selector: 'app-trasact',
  templateUrl: './trasact.component.html',
  styleUrls: ['./trasact.component.css']
})
export class TrasactComponent implements OnInit {

  From:string;
  To:string;
  Credit:number;
  users:Array<User>;

  constructor(private router:Router,private transactService:TransactService,private usersService:UsersService) { 
    this.From=this.router.url.substring(10);
    this.users=new Array<User>()
  }

  transfer(){
    const newTransaction = {
      From:this.From,
      To:this.To,
      Credit:this.Credit,
      Date:new Date()
    };
    this.transactService.insertTransaction(newTransaction)
      .subscribe((res)=>{
          console.log(res);
          
      });
  }
  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(users =>{ 
        users.forEach((user)=>{
          if(this.From.localeCompare(user._id) != 0)
            this.users.push(user);
        })
      });
  }
}
