import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { CheckboxCategoryComponent } from './components/checkbox-category/checkbox-category.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { NewTableComponent } from './components/new-table/new-table.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginComponent } from './components/login/login.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgeComponent } from './components/age/age.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartsComponent } from './components/carts/carts.component';
import { UsersComponent } from './components/users/users.component';
import { UsazipComponent } from './components/usazip/usazip.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { SelectBoxComponentModule } from './components/select-box/select-box.component-module';
import { SelectBoxServiceModule } from './services/select-box.service-module';
import { CheckboxCategoryComponentModule } from './components/checkbox-category/checkbox-category.component-module';
import { CheckboxCategoryServiceModule } from './services/checkbox-category.service-module';
import { MenuCategoryComponentModule } from './components/menu-category/menu-category.component-module';
import { NewTableComponentModule } from './components/new-table/new-table.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RegisterServiceModule } from './services/register.service-module';
import { CatsFactsServiceModule } from './services/cats-facts.service-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { AgeServiceModule } from './services/age.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { CartsComponentModule } from './components/carts/carts.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UsersComponentModule } from './components/users/users.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { UsazipComponentModule } from './components/usazip/usazip.component-module';
import { USaServiceModule } from './services/usa.service-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{path: 'products', component: ProductListComponent}, {
      path: 'categories',
      component: CategoriesListComponent
    }, {path: 'selectBox', component: SelectBoxComponent}, {
      path: 'checkBox',
      component: CheckboxCategoryComponent
    }, {path: 'menu', component: MenuCategoryComponent}, {
      path: 'newTable',
      component: NewTableComponent
    }, {path: 'crypto', component: CryptoListComponent}, {
      path: 'create-product',
      component: ProductFormComponent
    }, {path: 'employee', component: EmployeeFormComponent}, {
      path: 'loginForm',
      component: LoginComponent
    }, {path: 'fact-cat', component: CatFactComponent}, {
      path: 'age/:names',
      component: AgeComponent
    }, {path: 'products/:x', component: ProductDetailsComponent}, {
      path: 'carts/:id',
      component: CartsComponent
    }, {path: 'users/:id', component: UsersComponent}, {
      path: 'genderof/:id',
      component: UsazipComponent
    }]), ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesServiceModule, CryptoListComponentModule, CryptoServiceModule, SelectBoxComponentModule, SelectBoxServiceModule, CheckboxCategoryComponentModule, CheckboxCategoryServiceModule, MenuCategoryComponentModule, NewTableComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginComponentModule, LoginServiceModule, RegisterFormComponentModule, RegisterServiceModule, CatsFactsServiceModule, CatFactComponentModule, AgeComponentModule, AgeServiceModule, ProductDetailsComponentModule, CartsComponentModule, CartServiceModule, UsersComponentModule, UsersServiceModule, UsazipComponentModule, USaServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
