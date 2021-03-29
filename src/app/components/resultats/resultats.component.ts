import { Component, OnInit } from '@angular/core';
import { Citoyen } from 'src/app/models/Citoyen';
import { Partie } from 'src/app/models/Partie';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss']
})
export class ResultatsComponent implements OnInit {
  public cit:Map<Citoyen,Partie>;
  public parties: Array<Partie>;
  public partie:Partie;

  constructor(public service:AppService) {
    this.cit= service._citoyens;

    console.log("abdellah");
    console.log(this.cit);
    console.log(this.service.praties);
    console.log(this.service.nbrVotes);

  }

  ngOnInit(): void {
  }

}
