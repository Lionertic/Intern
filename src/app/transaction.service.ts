import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Transaction } from 'src/app/Transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }

  getTransactionsFrom(id){
    return this.http.get<Transaction[]>('/now/transactionsFrom/'+id);
  }

  getTransactionsTo(id){
    return this.http.get<Transaction[]>('/now/transactionsTo/'+id);
  }
}
