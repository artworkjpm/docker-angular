import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogMapComponent } from './components/dialog-map/dialog-map.component';
import { ImageCityComponent } from './components/image-city/image-city.component';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogCreateComponent } from './components/dialog-create/dialog-create.component';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DialogMapComponent,
    ImageCityComponent,
    DialogEditComponent,
    DialogCreateComponent,
    AboutAppComponent,
    AboutMeComponent,
    DataTableComponent,
  ],
  entryComponents: [DialogMapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
