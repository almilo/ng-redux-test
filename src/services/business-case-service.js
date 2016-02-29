import { Injectable, Inject } from 'ng-forward';

const mockBusinessCases = {
    open: [
        {
            id: 1,
            name: 'Finanzabteilung',
            value: 200.50
        },
        {
            id: 2,
            name: 'Aescher Berggasthaus',
            value: 50.20
        },
        {
            id: 3,
            name: 'KTPA AG',
            value: 354.55
        },
        {
            id: 4,
            name: 'Säntis Berggasthaus',
            value: 1573.90
        }
    ]
};

@Injectable
@Inject('$q')
export default class {
    constructor($q) {
        this.$q = $q;
    }

    getAllBusinessCases() {
        return this.$q.resolve(mockBusinessCases);
    }
}
