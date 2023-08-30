import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CakeComponent } from 'src/cake/cake.component';
import { CakeViewComponent } from 'src/cake-view/cake-view.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { HeaderComponent } from 'src/header/header.component';
import { CakeOrderComponent } from 'src/cake-order/cake-order.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from 'src/login/login.component';
import { SearchComponent } from 'src/search/search.component';
import { OrderDetailsComponent } from 'src/order-details/order-details.component';
import {MatTableModule} from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageNotFoundComponent } from 'src/page-not-found/page-not-found.component';
import { FotterComponent } from 'src/fotter/fotter.component';



@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    CakeViewComponent,
    HeaderComponent,
    CakeOrderComponent,
    LoginComponent,
    SearchComponent,
    OrderDetailsComponent,
    PageNotFoundComponent,
    FotterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTableModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
