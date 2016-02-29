import { Component, Input } from 'ng-forward';

@Component({
    selector: 'currency-widget',
    template: '<span>{{ctrl.symbol}} {{ctrl.getValue()}}</span>'
})
export default class {
    @Input() value = undefined;
    @Input() symbol = undefined;

    getValue() {
        return this.value && this.value.toFixed(2);
    }
}
