import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

@inject('beersStore')
@observer
export class Pagination extends Component {
  render() {
    const store = this.props.beersStore;

    return (
      <div>
          <Button onClick={()=>store.prevPage()}>Prev</Button> <Button onClick={()=>store.nextPage()}>Next</Button> Page: {store.page}
      </div>
    );
  }
}
