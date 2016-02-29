import { Component } from 'ng-forward';
import HeaderComponent from './layout/header-component';
import BusinessCaseComponent from './root/business-case/business-case';

@Component({
    selector: 'app',
    directives: [HeaderComponent, BusinessCaseComponent],
    template: `
        <div id="main" class="container">
            <app-header></app-header>
            <business-case></business-case>
        </div>
    `
})
export default class {
}
