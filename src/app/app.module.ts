import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogMapComponent } from './components/dialog-map/dialog-map.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';
import { ImageCityComponent } from './components/image-city/image-city.component';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogCreateComponent } from './components/dialog-create/dialog-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DialogMapComponent,
    GooglemapsComponent,
    ImageCityComponent,
    DialogEditComponent,
    DialogCreateComponent,
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
