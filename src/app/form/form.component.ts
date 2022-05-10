import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

   boton!: Boolean;
  @Output() dtForm = new EventEmitter();
  @Input() dtComp!: Boolean; 
  
  nameCom = 'Enviar formulario'
  form = new FormGroup({
     id: new FormControl(''),
     author: new FormControl(''),
     gender: new FormControl(''),
     description: new FormControl('')

    
  }) ;
  constructor(private _formuilder: FormBuilder) { }

  ngOnInit(): void {
   this.boton = this.dtComp;
  
  }


send(): any{

   this.dtForm.emit(this.form.value)
}

}
