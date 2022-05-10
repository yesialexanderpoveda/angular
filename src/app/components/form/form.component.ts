import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
   botonId!: Boolean;
   boton!: Boolean;
  @Output() dtForm = new EventEmitter();
  @Input() dtComp!: Boolean; 
  @Input() idComp!: Boolean;
  
  nameCom = 'Enviar formulario'
  form = new FormGroup({
     id: new FormControl('', [Validators.required]),
     author: new FormControl('', [Validators.required]),
     gender: new FormControl('', [Validators.required]),
     description: new FormControl('', [Validators.required])

    
  }) ;
  constructor(private _formuilder: FormBuilder) { }

  ngOnInit(): void {
   this.boton = this.dtComp;
   this.botonId = this.idComp;
   this.form
  }


send(): any{
   
      this.dtForm.emit(this.form.value)
   
   

}

}
