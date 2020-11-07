import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'options',
    pathMatch: 'full'
  },
  {
    path: 'options',
    loadChildren: () => import('./pages/options/options.module').then( m => m.OptionsModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./pages/calculator/calculator.module').then( m => m.CalculatorModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/servicios/servicios.module').then( m => m.ServiciosModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
