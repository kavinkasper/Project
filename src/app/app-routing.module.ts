import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeOrderComponent } from 'src/cake-order/cake-order.component';
import { CakeViewComponent } from 'src/cake-view/cake-view.component';
import { LoginComponent } from 'src/login/login.component';
import { OrderDetailsComponent } from 'src/order-details/order-details.component';
import { PageNotFoundComponent } from 'src/page-not-found/page-not-found.component';
import { ActivateService } from 'src/services/activate.service';
import { CandeactivateService } from 'src/services/candeactivate.service';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: CakeViewComponent },
  { path: "home/:id", component: CakeOrderComponent, canDeactivate: [CandeactivateService] },
  { path: "login", component: LoginComponent },
  { path: "orders", component: OrderDetailsComponent, canActivate: [ActivateService] },
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
