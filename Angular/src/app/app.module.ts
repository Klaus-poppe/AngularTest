import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetComponent } from './sign-in/forget/forget.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { OptionsComponent } from './options/options.component';
import { DataProviderService } from './services/data-provider.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { TopicComponent } from './topic/topic.component';

const appRoutes: Routes = [
  { path: '', component: SignInComponent},
  { path: 'home', component: HomeComponent },
  { path: 'signUp', component: SignUpComponent},
  { path: 'forgetPassword', component: ForgetComponent},
  { path : 'options' , component: OptionsComponent},
  { path : 'questions' , component: QuestionComponent},
  { path : 'topic' , component: TopicComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent,
    ForgetComponent,
    SubjectsComponent,
    TitleComponent,
    FooterComponent,
    OptionsComponent,
    QuestionComponent,
    TopicComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
