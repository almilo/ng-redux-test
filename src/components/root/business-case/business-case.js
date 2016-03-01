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
            <short-info
                [item]="ctrl.selectedBusinessCase"
                (more-options)="ctrl.showMoreOptions($event.detail)"
                (archive)="ctrl.archive($event.detail)"
                class="col-md-8">
            </short-info>
            `
})
@Inject('$ngRedux', '$scope', 'BusinessCaseAsyncActions')
export default class {
    constructor($ngRedux, $scope, BusinessCaseAsyncActions) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis, BusinessCaseAsyncActions)(this);

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
            this.fetchBusinessCases();
        }
    }

    showMoreOptions(businessCase) {
        console.log(businessCase);
    }

    archive(businessCase) {
        console.log(businessCase);
    }
}
