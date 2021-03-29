import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { PartiesComponent } from './components/parties/parties.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { VoterComponent } from './components/voter/voter.component';

const routes: Routes = [
  {path:"",component:ResultatsComponent},
  {path:"resultat",component:ResultatsComponent},
  {path:"voter",component:VoterComponent},
  {path:"parties",component:PartiesComponent},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
