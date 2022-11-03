import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Truck } from '../../models/truck.model';

@Injectable({
	providedIn: 'root',
})
export class TruckService {
	constructor(private http: HttpClient) {}

	getCamion(truck: Truck) {
		return truck;
	}

	/*
	getCamionById(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/camiones/${id}`).pipe(
      catchError(error => {
        return error
      })
    )
  }
  getCamionByMtr(matricula: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/camiones/${matricula}`).pipe(
      catchError(error => {
        return error
      })
    )
  }


  */
	cancelTruck(id: Number) {}
	setTruckInTable(id: Number) {}
}
