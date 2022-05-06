import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MuhPlusComponent } from './muh-plus/muh-plus.component';
import { MuhplusSidebarComponent } from './muh-plus/muhplus-sidebar/muhplus-sidebar.component';
import { DOSComponent } from './muh-plus/dos/dos.component';
import { GambitComponent } from './muh-plus/gambit/gambit.component';
import { HOAComponent } from './muh-plus/hoa/hoa.component';
import { MOTSComponent } from './muh-plus/mots/mots.component';
import { NWComponent } from './muh-plus/nw/nw.component';
import { PFComponent } from './muh-plus/pf/pf.component';
import { SDComponent } from './muh-plus/sd/sd.component';
import { SOAComponent } from './muh-plus/soa/soa.component';
import { StreetsComponent } from './muh-plus/streets/streets.component';
import { TOPComponent } from './muh-plus/top/top.component';
import { GeneralComponent } from './muh-plus/general/general.component';

@NgModule({
  declarations: [
    AppComponent,
    MuhPlusComponent,
    MuhplusSidebarComponent,
    DOSComponent,
    GambitComponent,
    HOAComponent,
    MOTSComponent,
    NWComponent,
    PFComponent,
    SDComponent,
    SOAComponent,
    StreetsComponent,
    TOPComponent,
    GeneralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
