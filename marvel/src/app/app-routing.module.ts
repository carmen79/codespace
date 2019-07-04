import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgModule } from '@angular/core';


// Aquí definimos nuestras rutas, estas hay que exportarlas al  router de angular
const routes: Routes = [
        {path: '', component: HomeComponent},
        {path: 'profile', component: ProfileComponent},
        { path: '**', redirectTo: ''}
    ]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}