import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.sass']
})
export class RemoveComponent implements OnInit {

  dtaForForm = true;
  constructor() { }
  
  changeForm(form: any){
    console.log(form, 'Im remove')
  }
  ngOnInit(): void {
  }

}
