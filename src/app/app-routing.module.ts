import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import {CategoriesListComponent} from "./components/categories-list/categories-list.component";
import {CategoriesListComponentModule} from "./components/categories-list/categories-list.component-module";
import {CategoriesServiceModule} from "./services/categories.service-module";
import {CryptoListComponent} from "./components/crypto-list/crypto-list.component";
import {CryptoListComponentModule} from "./components/crypto-list/crypto-list.component-module";
import {CryptoServiceModule} from "./services/crypto.service-module";
import {SelectBoxComponent} from "./components/select-box/select-box.component";
import {SelectBoxComponentModule} from "./components/select-box/select-box.component-module";
import {SelectBoxServiceModule} from "./services/select-box.service-module";
import {CheckboxCategoryComponent} from "./components/checkbox-category/checkbox-category.component";
import {CheckboxCategoryComponentModule} from "./components/checkbox-category/checkbox-category.component-module";
import {CheckboxCategoryServiceModule} from "./services/checkbox-category.service-module";
import {MenuCategoryComponent} from "./components/menu-category/menu-category.component";
import {MenuCategoryComponentModule} from "./components/menu-category/menu-category.component-module";

@NgModule({
  imports: [RouterModule.forRoot(
    [{ path: 'products', component: ProductListComponent },
      {path: 'categories', component:CategoriesListComponent},
      {path: 'selectBox', component:SelectBoxComponent},
      {path: 'checkBox', component:CheckboxCategoryComponent},
      {path: 'menu', component:MenuCategoryComponent},
      {path: 'crypto', component:CryptoListComponent}]),
      ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesServiceModule,
    CryptoListComponentModule,CryptoServiceModule, SelectBoxComponentModule, SelectBoxServiceModule,
    CheckboxCategoryComponentModule, CheckboxCategoryServiceModule, MenuCategoryComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
