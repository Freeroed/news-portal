import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'news',
        data: { pageTitle: 'newsPortalApp.news.home.title' },
        loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
      },
      {
        path: 'event',
        data: { pageTitle: 'newsPortalApp.event.home.title' },
        loadChildren: () => import('./event/event.module').then(m => m.EventModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
