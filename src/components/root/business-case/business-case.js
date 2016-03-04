import { Component, Inject } from 'ng-forward';
import ShortInfoListComponent from './short-info-list/short-info-list';
import ShortInfoComponent from './short-info/short-info';

@Component({
    selector: 'business-case',
    directives: [ShortInfoComponent, ShortInfoListComponent],
    template: `
            <short-info-list
                [items]="ctrl.businessCases"
                (select)="ctrl.selectBusinessCase($event.detail)"
                class="col-md-4">
            </short-info-list>
            <short-info ng-if="ctrl.selectedBusinessCase"
                [item]="ctrl.selectedBusinessCase"
                (more-options)="ctrl.navigateToMoreOptions($event.detail.id)"
                (archive)="ctrl.navigateToArchive($event.detail.id)"
                class="col-md-8">
            </short-info>
            `
})
@Inject('$ngRedux', '$scope', 'BusinessCaseActions', 'NavigationActions')
export default class {
    constructor($ngRedux, $scope, BusinessCaseActions, NavigationActions) {
        const actions = {
                selectBusinessCase: BusinessCaseActions.selectBusinessCase,
                triggerFetchBusinessCases: BusinessCaseActions.triggerFetchBusinessCases,
                navigateToMoreOptions: NavigationActions.navigateToMoreOptions,
                navigateToArchive: NavigationActions.navigateToArchive
            },
            unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);

        $scope.$on('$destroy', unsubscribe);
    }

    mapStateToThis(state) {
        return {
            businessCases: state.businessCases,
            selectedBusinessCase: state.selectedBusinessCase
        };
    }

    ngOnInit() {
        if (!this.businessCases) {
            this.triggerFetchBusinessCases();
        }
    }
}
