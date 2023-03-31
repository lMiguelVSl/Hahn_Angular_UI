import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CrudUiMaterialComponent } from './components/crud-ui-material/crud-ui-material.component';
import { MaterialModule } from './shared/material/material.module';
import { GridUiMaterialComponent } from './components/grid-ui-material/grid-ui-material.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrudUiMaterialComponent,
    GridUiMaterialComponent,
    ErrorpageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
