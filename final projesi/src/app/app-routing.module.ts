import { HomeComponent } from './components/home/home.component';
import { UrunComponent } from './components/urun/urun.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UyeComponent } from './components/uye/uye.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'urunler', component: UrunComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
