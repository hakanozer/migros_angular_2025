import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { UsersComponent } from './pages/users/users.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'productDetail/:id',
        component: ProductDetailComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];
