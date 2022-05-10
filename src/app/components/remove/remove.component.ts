import { Component, OnInit } from '@angular/core';
import { PoetryService } from '../../service/poetry.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.sass']
})
export class RemoveComponent implements OnInit {

  dtaForForm = true;
  constructor(
    private _poetryService: PoetryService
  ) { }

  changeForm(form: any) {

    this._poetryService.deletePoem(form.id).subscribe(dta => {


      console.log('delete with exit');

    })

  }
  ngOnInit(): void {
  }

}
