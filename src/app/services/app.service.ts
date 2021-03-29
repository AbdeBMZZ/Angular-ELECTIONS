import { Injectable } from '@angular/core';
import {Partie} from '../models/Partie';
import {Citoyen} from '../models/Citoyen';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _praties: Array<Partie>;
  public _citoyens: Map<Citoyen, Partie>;
  public nbrVotes:any;
  constructor() {
    this._praties = new Array<Partie>();
    this._praties.push(new Partie("Parti de l'avant-garde démocratique et sociale.","Le parti représente l'opposition radicale au régime.","1991"));
    this._praties.push(new Partie("Mouvement populaire national","célèbre le berbère et veut le berbère sera enseigné","31/01/2012"));
    this._citoyens = new Map<Citoyen, Partie>();
    this.nbrVotes=0;
  }

  get citoyens(): Map<Citoyen, Partie> {
    return this._citoyens;
  }

  set citoyens(value: Map<Citoyen, Partie>) {
    this._citoyens = value;
  }

  get praties(): Array<Partie> {
    return this._praties;
  }
  public partieExist(nom:string): boolean{
    return this.praties.find(p => p.nom === nom) !== undefined;

  }
  public addPartie(partie: Partie): boolean {
    console.log("hello");
    if(this._praties.find(p => p.nom === partie.nom) != null)
      return false;
    this._praties.push(partie);
    return true;
  }

  public removePartie(partie: Partie): boolean {
    let tmpPartie =  this._praties.find(p => p === partie);
    if(tmpPartie === undefined)
      return false;
    this._praties.splice(this._praties.indexOf(tmpPartie),1);
  }

  public voter(citoyen:Citoyen, nomPartie: String) {
    let partie = this._praties.find(p => p.nom === nomPartie);
    console.log(partie);
    if( partie === undefined )
      return false;
    if (this._citoyens.has(citoyen))
      return false;
    else{
      this._citoyens.set(citoyen, partie);  
      partie._nbrVotes++;
      return true;
    }

  }

}
