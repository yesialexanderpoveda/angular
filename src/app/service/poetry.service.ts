import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poetry } from '../modelo/modelo';
import { ToastrService } from 'ngx-toastr';
@Injectable({
   providedIn: 'root'
})

export class PoetryService {



   constructor(private http: HttpClient, private toasttr: ToastrService) {

   }

  
   configUrl = 'http://localhost:3001/v0/'




   getPoems(): Observable<any> {
      
      let url = `${this.configUrl}poems`;
     
      return this.http.get(url);
   }


   deletePoem(id: string): Observable<any> {

      let url = `${this.configUrl}/poem/${id}`
      this.toasttr.warning(`eliminado`, 'poetryApp')
      return this.http.delete(url)
   }


   createPoem(poetry: Poetry): Observable<any> {

      let url = `${this.configUrl}/poem`
      this.toasttr.success(`añadido`, 'poetryApp')
      return this.http.post(url, poetry)
   }



   updatePoem(id: string, poetry: Poetry): Observable<any> {

      let url = `${this.configUrl}poem/${id}`
      this.toasttr.success(`actualizado`, 'poetryApp')
      return this.http.put(url, poetry)
   }

}
