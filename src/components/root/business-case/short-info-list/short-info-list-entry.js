import { Component, Input, Output, EventEmitter } from 'ng-forward';
import CurrencyWidget from 'widgets/currency-widget';

@Component({
    selector: 'short-info-list-entry',
    directives: [CurrencyWidget],
    template: `
        <div (click)="ctrl.onSelect()" style="padding: 1em 0 1em 0; cursor: pointer;">
            <strong class="col-md-8">{{ctrl.item.name}}</strong>
            <strong><currency-widget class="col-md-4" [value]="ctrl.item.quantity" [symbol]="'CHF'"></currency-widget></strong>
        </div>
    `
})
export default class {
    @Input() item = undefined;
    @Output() select = new EventEmitter();

    onSelect() {
        this.select.next(this.item);
    }
}
