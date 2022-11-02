import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camion } from '../../models/camion.model';
@Injectable({
	providedIn: 'root',
})
export class CamionService {
	constructor(private http: HttpClient) {}

	getCamion(camion: Camion) {
		return camion;
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
