import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Citoyen } from 'src/app/models/Citoyen';


@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  parties = this.service.praties;
  voteForm: FormGroup;

  constructor(private service:AppService) { 
    
  }

  ngOnInit(): void {
    this.voteForm = new FormGroup({
      cin: new FormControl(''),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      partie: new FormControl(''),
    })
  };

  onSubmit() {
    let cin = this.voteForm.getRawValue().cin.trim();
    let nom = this.voteForm.getRawValue().nom.trim();
    let prenom = this.voteForm.getRawValue().prenom.trim();
    let partie = this.voteForm.getRawValue().partie.trim();

    
    
    if(nom!== "" && prenom !== "" && cin !== "" && partie !== ""){
      let citoyen= new Citoyen(cin,nom,prenom);
      console.log(this.service.voter(citoyen,partie));
      this.service.voter(citoyen,partie)
    }
  }
}
