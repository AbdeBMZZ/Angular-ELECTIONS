import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {Partie} from '../../models/Partie';

@Component({
  selector: 'app-add-partie',
  templateUrl: './add-partie.component.html',
  styleUrls: ['./add-partie.component.scss']
})
export class AddPartieComponent implements OnInit {
  addForm = new FormGroup({
    nom : new FormControl('',[Validators.required,Validators.minLength(3)]),
    date : new FormControl('',Validators.required),
    description : new FormControl('',[Validators.required,Validators.minLength(10)])
  });


  constructor(private service:AppService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let nom = this.addForm.getRawValue().nom.trim();
    let date = this.addForm.getRawValue().date.trim();
    let description = this.addForm.getRawValue().description.trim();
    if(this.addForm.valid)
        if(this.service.addPartie(new Partie(nom,description,date)))
          this.addForm.reset();
    }
}

