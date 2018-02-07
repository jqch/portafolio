import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, PortafolioComponent, ProductoComponent } from './components/index.paginas';

const app_routes: Routes = [
	{ path: '', component: PortafolioComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'producto', component: ProductoComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
]

export const APP_ROUTING = RouterModule.forRoot(app_routes, {useHash:true});