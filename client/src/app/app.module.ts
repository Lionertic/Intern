import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { Routes,RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TrasactComponent } from './trasact/trasact.component';
import {FormsModule} from '@angular/forms';

const appRoutes : Routes=[
  {path: 'users' , component: UsersComponent},
  {path: 'user/:id', component:UserComponent},
  {path:'transfer/:id',component:TrasactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    TrasactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
