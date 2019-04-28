import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Transaction } from 'src/app/Transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }

  getTransactions(id){
    return this.http.get<Transaction[]>('http://localhost:3000/transactions/'+id);
  }
}
