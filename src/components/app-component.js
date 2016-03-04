import { Component, StateConfig } from 'ng-forward';
import NavBarComponent from './layout/nav-bar-component';
import HeaderComponent from './layout/header-component';
import HomeComponent from './root/home/home';
import BusinessCaseComponent from './root/business-case/business-case';
import MoreOptionsComponent from './root/more-options/more-options';
import ArchiveComponent from './root/archive/archive';

@Component({
    selector: 'app',
    directives: [NavBarComponent, HeaderComponent],
    template: `
        <nav-bar></nav-bar>
        <div id="main" class="container">
            <app-header></app-header>
            <div ui-view></div>
        </div>
    `
})
@StateConfig([
    { url: '/', name: 'home', component: HomeComponent },
    { url: '/business-case', name: 'business-case', component: BusinessCaseComponent },
    { url: '/more-options/:id', name: 'more-options', component: MoreOptionsComponent },
    { url: '/archive/:id', name: 'archive', component: ArchiveComponent }
])
export default class {
}
