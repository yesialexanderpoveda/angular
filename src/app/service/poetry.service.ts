import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poetry } from '../modelo/modelo';
@Injectable({
   providedIn: 'root'
})

export class PoetryService {



   constructor(private http: HttpClient) {

   }

   configUrl = 'http://localhost:3001/v0/'




   getPoems(): Observable<any> {
      let url = `${this.configUrl}poems`;
      return this.http.get(url);
   }


   deletePoem(id: string): Observable<any> {

      let url = `${this.configUrl}/poem${id}`

      return this.http.delete(url)
   }


   createPoem(poetry: Poetry): Observable<any> {

      let url = `${this.configUrl}/poem`
      return this.http.post(url, poetry)
   }



   updatePoem(id: string, poetry: Poetry): Observable<any> {

      let url = `${this.configUrl}poem/${id}`

      return this.http.put(url, poetry)
   }

}
