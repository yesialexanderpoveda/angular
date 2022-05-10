import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  
  constructor() { }

  

  changeForm(form: any){
    console.log(form, 'Im create')
  }
  ngOnInit(): void {
  }

}
