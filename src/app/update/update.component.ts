import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {
  
 
  constructor() { }
  
  changeForm(form: any){
    console.log(form, 'Im update')
  }
  ngOnInit(): void {
  }

}
