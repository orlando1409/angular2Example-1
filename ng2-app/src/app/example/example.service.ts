import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ExampleService {
  products: Array<Example.Models.IProduct>;
  productsObserver: Observable<Example.Models.IProduct[]>;
  constructor(private http: Http) { }
  getListProducts():  Observable<Example.Models.IProduct[]> {
    this.productsObserver = this.http.get('http://localhost:3000/products')
      .map((res: Response) => res.json());
    return this.productsObserver;
  }
  getTranslate():Observable<any>{
    return this.http.get('http://localhost:3000/translateData')
            .map((res: Response) => res.json());
  }
}
