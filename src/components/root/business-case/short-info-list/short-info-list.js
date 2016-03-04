import { element } from 'angular';
import { Component, Input, Output, EventEmitter, Inject } from 'ng-forward';
import ShortInfoListEntry from './short-info-list-entry';

@Component({
    selector: 'short-info-list',
    directives: [ShortInfoListEntry],
    template: `
        <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#open" data-toggle="tab">Offen <strong>{{ctrl.items.open.length}}</strong></a></li>
            <li role="presentation"><a href="#pending" data-toggle="tab">Bearbeitbar <strong>{{ctrl.items.pending.length}}</strong></a></li>
            <li role="presentation"><a href="#closed" data-toggle="tab">Erledigt <strong>{{ctrl.items.closed.length}}</strong></a></li>
        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="open">
                <short-info-list-entry
                    ng-repeat="item in ctrl.items.open track by item.id"
                    [item]="item"
                    (select)="ctrl.onSelect($event)">
                </short-info-list-entry>
            </div>
            <div role="tabpanel" class="tab-pane" id="pending">
                <short-info-list-entry
                    ng-repeat="item in ctrl.items.pending track by item.id"
                    [item]="item"
                    (select)="ctrl.onSelect($event)">
                </short-info-list-entry>
            </div>
            <div role="tabpanel" class="tab-pane" id="closed">
                <short-info-list-entry
                    ng-repeat="item in ctrl.items.closed track by item.id"
                    [item]="item"
                    (select)="ctrl.onSelect($event)">
                </short-info-list-entry>
            </div>
        </div>
    `
})
@Inject('$element')
export default class {
    @Input() items = undefined;
    @Output() select = new EventEmitter();

    constructor($element) {
        this.$element = $element;
    }

    ngOnInit() {
        this.$element.find('.nav-tabs').click(function (event) {
            event.preventDefault();
            element(this).tab('show');
        })
    }

    onSelect(event) {
        this.select.next(event.detail);
    }
}
