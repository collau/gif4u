import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DisplayComponent } from './components/display/display.component';
import { GifsComponent } from './components/gifs.component';
import { Gif4uService } from '../../gif4u.service';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent,
    GifsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ Gif4uService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
