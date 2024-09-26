import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tariff} from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(`${this.apiUrl}/tariffs`);
  }
}
