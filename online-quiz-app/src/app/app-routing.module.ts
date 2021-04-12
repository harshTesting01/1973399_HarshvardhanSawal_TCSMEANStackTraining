import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path: 'intro', component: IntroComponent, pathMatch: 'full' },
  {path: 'login', component: LoginComponent, pathMatch: 'full' },
  {path: 'quiz', component: QuestionsComponent, pathMatch: 'full' },
  {path: '', redirectTo: 'intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
