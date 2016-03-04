import { copy } from 'angular';

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
    ],
    pending: [
        {
            id: 10,
            name: 'Foo',
            value: 1700.50
        },
        {
            id: 11,
            name: 'Bar',
            value: 105.10
        },
        {
            id: 12,
            name: 'Baz AG',
            value: 2545
        }
    ],
    closed: []
};

export default class {
    constructor($q) {
        this.$q = $q;
    }

    getAllBusinessCases() {
        return this.$q.resolve(copy(mockBusinessCases));
    }

    getBusinessCase(id) {
        return this.$q.resolve(copy(findById(mockBusinessCases, id)));
    }

    archiveBusinessCase(id) {
        removeById(mockBusinessCases, id);

        return this.$q.resolve();
    }
}

function findById(businessCases, id) {
    const byId = byIdMatcher(id);

    return businessCases.open.find(byId) ||
        businessCases.pending.find(byId) ||
        businessCases.closed.find(byId);
}

function removeById(businessCases, id) {
    const byId = byIdMatcher(id);

    [businessCases.open, businessCases.closed, businessCases.pending].forEach(collection => {
        const index = collection.findIndex(byId);

        if (index !== -1) {
            collection.splice(index, 1);
        }
    });
}

function byIdMatcher(id) {
    return businessCase => businessCase.id == id;
}
