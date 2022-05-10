import { Component, OnInit } from '@angular/core';
import { PoetryService } from '../../service/poetry.service';
import { Poetry } from '../../model/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {
  
 
  constructor(private _poetryService: PoetryService) {

   }
  
  changeForm(form: any){
    const poetry: Poetry = {
      author: `${form.author}`,
      gender: `${form.gender}`,
      description: `${form.description}`
    };
    if(form.author === '' || form.gender === '' || form.description ==='' || form.id === ''){
      console.log('error');
      

  }else{
    this._poetryService.updatePoem(form.id, poetry).subscribe(dta =>{
      console.log("actualizado")
    })

  }

    
    
  }
  ngOnInit(): void {
  }

}
