import { Component, Inject } from 'ng-forward';

@Component({
    selector: 'more-options',
    template: `
            <h2>More options</h2>
            <h3 class="col-md-8">{{ctrl.businessCase.name}}</h3>
            <h3><currency-widget class="col-md-4" [value]="ctrl.businessCase.value" [symbol]="'CHF'"></currency-widget></h3>
            <button class="btn btn-primary col-md-5 col-md-offset-7" (click)="ctrl.navigateToBusinessCase()">Back</button>
            `
})
@Inject('$ngRedux', '$scope', 'BusinessCaseActions', 'NavigationActions')
export default class {
    constructor($ngRedux, $scope, BusinessCaseActions, NavigationActions) {
        const actions = {
                triggerFetchBusinessCase: BusinessCaseActions.triggerFetchBusinessCase,
                navigateToBusinessCase: NavigationActions.navigateToBusinessCase
            },
            unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);

        $scope.$on('$destroy', unsubscribe);
    }

    mapStateToThis(state) {
        return {
            businessCaseId: state.router.currentParams.id,
            businessCase: state.businessCase
        };
    }

    ngOnInit() {
        this.triggerFetchBusinessCase(this.businessCaseId);
    }
}
