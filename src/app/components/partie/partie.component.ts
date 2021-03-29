import {Component, Input, OnInit} from '@angular/core';
import {Partie} from '../../models/Partie';
import {AppService} from '../../services/app.service';

@Component({
  selector: '[app-partie]',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss']
})
export class PartieComponent implements OnInit {
  @Input() public partie:Partie;

  constructor(private service:AppService) { }

  ngOnInit(): void {

  }

  onClick(partie){
    this.service.removePartie(partie);
  }
}
