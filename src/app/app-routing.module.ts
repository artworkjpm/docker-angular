import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { DataTableComponent } from './components/data-table/data-table.component';

const routes: Routes = [
  { path: '', component: DataTableComponent },
  { path: 'about-this-app', component: AboutAppComponent },
  { path: 'about-me', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
