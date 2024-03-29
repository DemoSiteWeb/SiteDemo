import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { MonPublicationComponent } from './publication/mon-publication.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { MonAccueilComponent } from './accueil/accueil.component';
import {RouterModule,Routes} from '@angular/router';
import {AuthService} from './services/Auth.service';
import { ContactComponent } from './contact/contact.component';
import { CeremoniesComponent } from './ceremonies/ceremonies.component';
import { FourOhFourComponentComponent } from './four-oh-four-component/four-oh-four-component.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { ReglementComponent } from './reglement/reglement.component';
import { AppareilServiceComponent } from './appareil-service/appareil-service.component';


const routes: Routes  = [
  { path: 'contact', component: ContactComponent},
  { path: 'publication', component: MonPublicationComponent},
  { path: '', component: MonAccueilComponent},
  { path: 'ceremonies', component: CeremoniesComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'reglement', component: ReglementComponent},
  { path: 'button', component: AppareilServiceComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'not-found', component: FourOhFourComponentComponent},
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    MonAccueilComponent,
    MonPublicationComponent,
    ContactComponent,
    CeremoniesComponent,
    FourOhFourComponentComponent,
    PhotosComponent,
    VideosComponent,
    ReglementComponent,
    AppareilServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent, MonPublicationComponent,ContactComponent,CeremoniesComponent,MonAccueilComponent,ReglementComponent,AppareilServiceComponent],

})
export class AppModule {




}
