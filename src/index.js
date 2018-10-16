import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import {App} from './components/App';
import { BeersStore } from './stores/BeersStore';

const beersStore = new BeersStore();
beersStore.filterValues = [
    {
        name: 'abv_gt',
        value: ''
    },
    {
        name: 'abv_lt',
        value: ''
    },
    {
        name: 'ibu_gt',
        value: ''
    },
    {
        name: 'ibu_lt',
        value: ''
    },
    {
        name: 'ebc_gt',
        value: ''
    },
    {
        name: 'ebc_lt',
        value: ''
    },
    {
        name: 'beer_name',
        value: ''
    },
    {
        name: 'yeast',
        value: ''
    },
    {
        name: 'brewed_before',
        value: ''
    },
    {
        name: 'brewed_after',
        value: ''
    },
    {
        name: 'hops',
        value: ''
    },
    {
        name: 'malt',
        value: ''
    },
    {
        name: 'food',
        value: ''
    },
]
const Main = () => (
    <Provider beersStore={beersStore}>
        <App />
    </Provider>
);

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);
