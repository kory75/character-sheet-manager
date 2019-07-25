import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SheetListComponent } from './sheetList/sheetList.component';

import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ParanoiaModule } from "./paranoia/paranoia.module";

const appRoutes: Routes = [
    { path: 'home', component: SheetListComponent },
    { path: 'paranoia', loadChildren: './paranoia/paranoia.module#ParanoiaModule'  },

    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    /*{ path: '**', component: PageNotFoundComponent }*/
];


@NgModule({
  declarations: [
      AppComponent,
      SheetListComponent,
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      ),
      NgbModule,
      ParanoiaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
