import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'; /*import dopisany*/
import { OfferComponent } from './components/offer/offer.component';
import { ComputersComponent } from './components/computers/computers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { SoftwaresComponent } from './components/softwares/softwares.component';
import { ComputerListComponent } from './components/admin/computer-list/computer-list.component';
import { LaptopListComponent } from './components/admin/laptop-list/laptop-list.component';
import { SoftwareListComponent } from './components/admin/software-list/software-list.component';

const routes: Routes = [
  {path: "", redirectTo: '/offer', pathMatch: 'full'},
  {path: "offer", component: OfferComponent},
  {path: "computers", component: ComputersComponent},
  {path: "laptops", component: LaptopsComponent},
  {path: "softwares", component: SoftwaresComponent},
  {path: "admin", component: AdminComponent,
  children: [
    {path: "", redirectTo: 'computerList', pathMatch: 'full'},
    {path: "computerList", component: ComputerListComponent},
    {path: "laptopList", component: LaptopListComponent},
    {path: "softwareList", component: SoftwareListComponent},
    ]
  },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
