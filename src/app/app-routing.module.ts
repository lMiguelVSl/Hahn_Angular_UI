import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUiMaterialComponent } from './components/crud-ui-material/crud-ui-material.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { GridUiMaterialComponent } from './components/grid-ui-material/grid-ui-material.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    {
        path: 'actions',
        component: CrudUiMaterialComponent
    },
    {
        path: 'item-list',
        component: GridUiMaterialComponent
    },
    {
        path: 'Home',
        component: HomePageComponent
    },
    {
        path: '*',
        component: ErrorpageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }