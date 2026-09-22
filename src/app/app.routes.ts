import { Routes } from '@angular/router';

import { Accueil } from './accueil/accueil';
import { Apropos } from './apropos/apropos';
import { Competences } from './competences/competences';
import { Projets } from './projets/projets';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';

export const routes: Routes = [

  {
    path: 'accueil',
    component: Accueil
  },

  {
    path: 'apropos',
    component: Apropos
  },

  {
    path: 'competences',
    component: Competences
  },

  {
    path: 'projets',
    component: Projets
  },

  {
    path: 'experience',
    component: Experience
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  }

];