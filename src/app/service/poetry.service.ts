import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poetry } from '../model/model';
import { ToastrService } from 'ngx-toastr';
@Injectable({
   providedIn: 'root'
})

export class PoetryService {



   constructor(private http: HttpClient, private _toastr: ToastrService) {

   }


   configUrl = 'http://localhost:3001/v0/'


   getPoems(): Observable<any> {

      let url = `${this.configUrl}poems`;

      return this.http.get(url);
   }


   deletePoem(id: string): Observable<any> {

      let url = `${this.configUrl}/poem/${id}`
      this._toastr.info("El producto fue eliminado", "Producto eliminado!")
      return this.http.delete(url)
   }


   createPoem(poetry: Poetry): Observable<any> {

      let url = `${this.configUrl}/poem`
      this._toastr.success(`añadido`, 'poetryApp')
      return this.http.post(url, poetry)
   }



   updatePoem(id: string, poetry: Poetry): Observable<any> {

      let url = `${this.configUrl}poem/${id}`
      this._toastr.warning("El producto fue actualizado", "Producto actualizado!");
      return this.http.put(url, poetry)
   }

}
