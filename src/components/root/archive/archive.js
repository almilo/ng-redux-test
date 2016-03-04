import { Component, Inject } from 'ng-forward';

@Component({
    selector: 'archive',
    template: `
            <h2>Archive</h2>
            <h3 class="col-md-8">{{ctrl.businessCase.name}}</h3>
            <h3><currency-widget class="col-md-4" [value]="ctrl.businessCase.value" [symbol]="'CHF'"></currency-widget></h3>
            <button class="btn btn-danger col-md-5" (click)="ctrl.navigateToBusinessCase()">Cancel</button>
            <div class="col-md-2"></div>
            <button class="btn btn-primary col-md-5" (click)="ctrl.confirm()">Confirm</button>
            `
})
@Inject('$ngRedux', '$scope', 'BusinessCaseActions', 'NavigationActions')
export default class {
    constructor($ngRedux, $scope, BusinessCaseActions, NavigationActions) {
        const actions = {
                triggerFetchBusinessCase: BusinessCaseActions.triggerFetchBusinessCase,
                triggerArchiveBusinessCase: BusinessCaseActions.triggerArchiveBusinessCase,
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

    confirm() {
        this.triggerArchiveBusinessCase(this.businessCaseId);
        this.navigateToBusinessCase();
    }
}
