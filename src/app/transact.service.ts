import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Transaction } from './Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactService {

  constructor(private http:HttpClient) { }

  insertTransaction(newTransact:Transaction){
    var header =new HttpHeaders();
    header.append('Content-Type','application/json');
    return this.http.post<JSON>('/now/transfer/'+newTransact.From,newTransact,{headers:header});
  }
}
