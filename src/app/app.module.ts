import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { Gif4uService } from '../../gif4u.service';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'gif4u_web/gif4u', component: UserComponent },
  { path: 'gif4u_web/gif4u/**', component: UserComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [ Gif4uService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
