import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DOSComponent } from './muh-plus/dos/dos.component';
import { GambitComponent } from './muh-plus/gambit/gambit.component';
import { GeneralComponent } from './muh-plus/general/general.component';
import { HOAComponent } from './muh-plus/hoa/hoa.component';
import { MOTSComponent } from './muh-plus/mots/mots.component';
import { MuhPlusComponent } from './muh-plus/muh-plus.component';
import { MuhplusSidebarComponent } from './muh-plus/muhplus-sidebar/muhplus-sidebar.component';
import { NWComponent } from './muh-plus/nw/nw.component';
import { PFComponent } from './muh-plus/pf/pf.component';
import { SDComponent } from './muh-plus/sd/sd.component';
import { SOAComponent } from './muh-plus/soa/soa.component';
import { StreetsComponent } from './muh-plus/streets/streets.component';
import { TOPComponent } from './muh-plus/top/top.component';

const routes: Routes = [
  { path: 'muh-plus', component: MuhPlusComponent, children: [
      { path: 'muhplus-sidebar', component: MuhplusSidebarComponent },
      { path: 'General', component: GeneralComponent },
      { path: 'DOS', component: DOSComponent },
      { path: 'HOA', component: HOAComponent },
      { path: 'MOTS', component: MOTSComponent },
      { path: 'PF', component: PFComponent },
      { path: 'SD', component: SDComponent },
      { path: 'SOA', component: SOAComponent },
      { path: 'Gambit', component: GambitComponent },
      { path: 'Streets', component: StreetsComponent },
      { path: 'NW', component: NWComponent },
      { path: 'TOP', component: TOPComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
