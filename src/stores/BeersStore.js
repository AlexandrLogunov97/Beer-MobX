import { observable, runInAction, action } from 'mobx';

export class BeersStore {
    @observable isLoading = false;

    @observable modalState = false;
    @observable filterState = false;

    @observable selectedBeer = {};
    @observable filter = '';
    @observable page = 1;
    @observable filterValues = [];
    @observable beers = [];

    @action changeFilterState = () => {
        this.filterState = !this.filterState;
    }
    @action prevPage = () => {
        if (this.page > 1) {
            this.page--;
            this.loadBeers();
        }
    }
    @action nextPage = () => {
        this.page++;
        this.loadBeers();
    }

    @action showModal = beer => {
        this.selectedBeer = beer;
        this.modalState = true;
    }
    @action hideModal = () => {
        this.modalState = false;
    }
    @action filterFieldValueChange = (name, value) => {
        let filterValue = this.filterValues.find(filter => { return filter.name === name ? filter : null; });
        filterValue.value = value;
    }
    @action clearFilterValues = () => {
        this.filterValues.forEach(filterValue => {
            filterValue.value = '';
        });
        if (this.filter) {
            this.filter = '';
            this.page = 1;
            this.loadBeers();
        }
    }
    @action filtering = () => {
        this.filter = '';
        this.filterValues.forEach(filterValue => {

            if (filterValue.value)
                this.filter += `&${filterValue.name}=${filterValue.value}`;
        });
        if (this.filter === '&')
            this.filter = '';
        this.page = 1;
        this.loadBeers();
    }
    @action randomBeer=()=>{
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => response.json())
        .then(data => {
            runInAction(() => {
                this.showModal(data[0]);
            })
        });
    }
    @action loadBeers = () => {
        this.isLoading = true;
        fetch(`https://api.punkapi.com/v2/beers?page=${this.page}${this.filter}`)
            .then(response => response.json())
            .then(data => {
                runInAction(() => {
                    this.beers = data;
                    this.isLoading = false;
                })
            })
            .catch(error => {
                console.log(error);
                this.isLoading = true;
            });
    }

}
