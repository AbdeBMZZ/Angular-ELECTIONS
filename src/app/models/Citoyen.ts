export class Citoyen{
  private _cin:string;
  private _nom:string;
  private _prenom:string;

  constructor(cin: string, nom: string, prenom: string) {
    this._cin = cin;
    this._nom = nom;
    this._prenom = prenom;
  }

  get cin(): string {
    return this._cin;
  }

  set cin(value: string) {
    this._cin = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }
}

