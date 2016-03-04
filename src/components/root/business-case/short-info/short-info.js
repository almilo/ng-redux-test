import { Component, Input, Output, EventEmitter } from 'ng-forward';

@Component({
    selector: 'short-info',
    template: `
        <div style="padding: 1em 0 1em 0">
            <div class="row" style="padding: 1em 0 1em 0">
                <h3 class="col-md-8">{{ctrl.item.name}}</h3>
                <h3><currency-widget class="col-md-4" [value]="ctrl.item.value" [symbol]="'CHF'"></currency-widget></h3>
            </div>
            <div class="row">
                <button class="btn btn-danger col-md-5" (click)="ctrl.onArchive()">Ablegen</button>
                <div class="col-md-2"></div>
                <button class="btn btn-primary col-md-5" (click)="ctrl.onMoreOptions()">Weitere Optionen</button>
            </div>
        </div>
    `
})
export default class {
    @Input() item = undefined;
    @Output() moreOptions = new EventEmitter();
    @Output() archive = new EventEmitter();

    onMoreOptions() {
        this.moreOptions.next(this.item);
    }

    onArchive() {
        this.archive.next(this.item);
    }
}
