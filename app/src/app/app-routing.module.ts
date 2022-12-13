import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizarGuard } from './guards/autorizar.guard';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[AutorizarGuard]
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./pages/recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },
  {
    path: 'pagasig',
    loadChildren: () => import('./pages/pagasig/pagasig.module').then( m => m.PagasigPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'codigo',
    loadChildren: () => import('./pages/codigo/codigo.module').then( m => m.CodigoPageModule)
  },
  {
    path: 'ingles',
    loadChildren: () => import('./pages/ingles/ingles.module').then( m => m.InglesPageModule)
  },
  {
    path: 'base',
    loadChildren: () => import('./pages/base/base.module').then( m => m.BasePageModule)
  },
  {
    path: 'program',
    loadChildren: () => import('./pages/program/program.module').then( m => m.ProgramPageModule)
  },
  {
    path: 'codigo1',
    loadChildren: () => import('./pages/codigo1/codigo1.module').then( m => m.Codigo1PageModule)
  },
  {
    path: 'codigo2',
    loadChildren: () => import('./pages/codigo2/codigo2.module').then( m => m.Codigo2PageModule)
  },
  {
    path: 'codigo',
    loadChildren: () => import('./pages/codigo/codigo.module').then( m => m.CodigoPageModule)
  },
  {
    path: 'codigo1',
    loadChildren: () => import('./pages/codigo1/codigo1.module').then( m => m.Codigo1PageModule)
  },
  {
    path: 'codigo2',
    loadChildren: () => import('./pages/codigo2/codigo2.module').then( m => m.Codigo2PageModule)
  },
  {
    path: 'program',
    loadChildren: () => import('./pages/program/program.module').then( m => m.ProgramPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
