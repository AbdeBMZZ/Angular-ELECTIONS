import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Partie} from '../../models/Partie';

@Component({
  selector: 'app-list-partie',
  templateUrl: './list-partie.component.html',
  styleUrls: ['./list-partie.component.scss']
})
export class ListPartieComponent implements OnInit {
  public parties: Array<Partie>;

  constructor(private service :AppService) {
  }

  ngOnInit(): void {
    this.parties = this.service.praties;
  }

}
