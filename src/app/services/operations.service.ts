import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Ioperations} from '../models/ioperations';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
operations: Ioperations[] = [
  {
    id: 1,
    operation: 'Multiplicación'
  },
  {
    id: 2,
    operation: 'División'
  },
  {
    id: 3,
    operation: 'Suma'
  },
    {
  id: 4,
  operation: 'Suma'
}
];
  constructor() { }
  fetchOperations(): Observable<any> {
    return of(this.operations);
  }
}
