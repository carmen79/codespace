import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

//Components

import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
    { path: '' , component: HomeComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: '**', redirectTo: ''}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};
