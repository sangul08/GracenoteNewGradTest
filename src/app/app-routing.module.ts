import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CroppingComponent } from './cropping/cropping.component';
import { ImagesListComponent } from './images-list/images-list.component';
const routes: Routes = [
  {
    path: '',
    component: ImagesListComponent
  },
  {
    path: 'image/:id',
    component: CroppingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
