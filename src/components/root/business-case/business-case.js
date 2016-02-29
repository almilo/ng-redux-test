import { Component, Inject } from 'ng-forward';
import BusinessCasesService from 'services/business-case-service';
import ShortInfoListComponent from './short-info-list/short-info-list';
import ShortInfoComponent from './short-info/short-info';

@Component({
    selector: 'business-case',
    directives: [ShortInfoComponent, ShortInfoListComponent],
    template: `
            <short-info-list
                [items]="ctrl.businessCases"
                (select)="ctrl.select($event)"
                class="col-md-4"></short-info-list>
            <short-info
                [item]="ctrl.selectedBusinessCase"
                (more-options)="ctrl.showMoreOptions($event)"
                (archive)="ctrl.archive($event)"
                class="col-md-8">
            </short-info>
            `
})
@Inject(BusinessCasesService)
export default class {
    constructor(businessCasesService) {
        this.businessCasesService = businessCasesService;
    }

    ngOnInit() {
        this.businessCasesService.getAllBusinessCases().then(businessCases => {
            this.businessCases = businessCases;
            this.selectedBusinessCase = this.businessCases.open[0];
        });
    }

    showMoreOptions(event) {
        console.log(event.detail);
    }

    archive(event) {
        console.log(event.detail);
    }

    select(event) {
        console.log(event.detail);
    }
}
