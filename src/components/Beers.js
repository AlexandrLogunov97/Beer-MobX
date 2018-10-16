import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Table } from 'reactstrap';

@inject('beersStore')
@observer
export class Beers extends Component {
  componentDidMount() {
    this.props.beersStore.loadBeers();
  }
  render() {
    const store = this.props.beersStore;

    return (
      <React.Fragment>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          {
            store.isLoading ?
              <p> LOADING... </p> :
              store.beers.map(beer => (
                <tr key={beer.id} style={{cursor: 'pointer '}} onClick={() => store.showModal(beer)}>
                  <th scope="row">{beer.id} </th>
                  <td>{beer.name}</td>
                </tr>
              ))
          }
        </Table>
      </React.Fragment>
    );
  }
}
