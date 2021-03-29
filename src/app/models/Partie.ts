import { Citoyen } from "./Citoyen";

export class Partie{
  private _nom:string;
  private _description:string;
  private _dateCreation:string;
  public _nbrVotes:number;

  constructor(nom: string, description: string, dateCreation: string) {
    this._nom = nom;
    this._description = description;
    this._dateCreation = dateCreation;
    this._nbrVotes =0;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get description(): string {
    return this._description;
  }

  set descripion(value: string) {
    this._description = value;
  }

  get dateCreation(): string {
    return this._dateCreation;
  }

  set dateCreation(value: string) {
    this._dateCreation = value;
  }

}
