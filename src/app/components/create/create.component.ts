import { Component, OnInit } from '@angular/core';
import { PoetryService } from '../../service/poetry.service';
import { Poetry } from '../../modelo/modelo';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  dtaForForm = true;
  constructor(private _poetryService: PoetryService) { }

  

  changeForm(form: any){
    

    const poetry: Poetry = {
      author: `${form.author}`,
      gender: `${form.gender}`,
      description: `${form.description}`
    };
    if(form.author === '' || form.gender === '' || form.description ===''){
        console.log('error');
        

    }else{
      
     this._poetryService.createPoem(poetry).subscribe(data =>{

      console.log("exito");
     }) 
      
    }
   
  }
  ngOnInit(): void {
  }

}
