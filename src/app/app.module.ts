import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Routes, RouterModule } from '@angular/router';
import { DessinComponent } from './dessin/dessin.component';
import { DecoComponent } from './deco/deco.component';
import { MeublesComponent } from './meubles/meubles.component';
import { CommandesComponent } from './commandes/commandes.component';
import { VanlifeComponent } from './vanlife/vanlife.component';
import { NewsComponent } from './news/news.component';
import { AproposComponent } from './apropos/apropos.component';

const appRoutes: Routes = [
  {
  path: 'accueil',
  component: AccueilComponent
},
{
  path: '',
  component: AccueilComponent
},
{
  path: 'deco',
  component: DecoComponent
},
{
  path: 'meubles',
  component: MeublesComponent
},
{
  path: 'commandes',
  component: CommandesComponent
},
{
  path: 'dessin',
  component: DessinComponent
},
{path: 'vanlife',
component: VanlifeComponent
},
{path: 'quisuije',
component: AproposComponent
},
{path: 'news',
component: NewsComponent
},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    DessinComponent,
    DecoComponent,
    MeublesComponent,
    VanlifeComponent,
    NewsComponent,
    AproposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
