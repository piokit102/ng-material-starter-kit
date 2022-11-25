import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {CategoriesListComponentModule} from "./components/categories-list/categories-list.component-module";
import {CryptoListComponentModule} from "./components/crypto-list/crypto-list.component-module";
import {SelectBoxComponentModule} from "./components/select-box/select-box.component-module";
import {CheckboxCategoryComponentModule} from "./components/checkbox-category/checkbox-category.component-module";
import {MenuCategoryComponentModule} from "./components/menu-category/menu-category.component-module";
import {ProductTableComponentModule} from "./components/product-table/product-table.component-module";
import {NewTableComponentModule} from "./components/new-table/new-table.component-module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ProductListComponentModule,
        CategoriesListComponentModule,
        CryptoListComponentModule,
        SelectBoxComponentModule,
        CheckboxCategoryComponentModule,
        MenuCategoryComponentModule,
        ProductTableComponentModule,
        NewTableComponentModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
