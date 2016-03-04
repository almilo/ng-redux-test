import { Component, Inject } from 'ng-forward';

@Component({
    selector: 'nav-bar',
    template: `
        <div class="navbar navbar-default">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li><a (click)="ctrl.navigateToHome()" style="cursor: pointer;">Home</a></li>
                    <li><a (click)="ctrl.navigateToBusinessCase()" style="cursor: pointer;">Business Case</a></li>
                </ul>
            </div>
        </nav>
    `
})
@Inject('$ngRedux', '$scope', 'NavigationActions')
export default class {
    constructor($ngRedux, $scope, NavigationActions) {
        const actions = {
                navigateToHome: NavigationActions.navigateToHome,
                navigateToBusinessCase: NavigationActions.navigateToBusinessCase
            },
            unsubscribe = $ngRedux.connect(undefined, actions)(this);

        $scope.$on('$destroy', unsubscribe);
    }
}
