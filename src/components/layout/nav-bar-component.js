import { Component } from 'ng-forward';

@Component({
    selector: 'nav-bar',
    template: `
        <div class="navbar navbar-default">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li><a ui-sref="home">Home</a></li>
                    <li><a ui-sref="business-case">Business Case</a></li>
                </ul>
            </div>
        </nav>
    `
})
export default class {
}
