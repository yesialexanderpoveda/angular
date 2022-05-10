import { Component, OnInit } from '@angular/core';
import { PoetryService } from '../../service/poetry.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.sass']
})
export class PoetryComponent implements OnInit {



  constructor(
    private _poems: PoetryService
  ) { }
  poems!: any[]

  ngOnInit(): void {
    this.getPoetry()
  }



  getPoetry() {

    this._poems.getPoems().subscribe((dta: any) => {

      this.poems = dta;

    })


  }
}
