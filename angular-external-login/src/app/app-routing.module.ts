import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuardedComponent } from './guarded/guarded.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  {
    path: 'guarded',
    component: GuardedComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
