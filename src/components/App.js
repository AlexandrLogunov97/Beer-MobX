import React from 'react';
import { Beers } from './Beers';
import { Pagination } from './Pagination';
import { ModalBeer } from './ModalBeer';
import { Filter } from './Filter';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { inject, observer } from 'mobx-react';

@inject('beersStore')
@observer
export class App extends React.Component{
    render(){
        return (
            <React.Fragment>
            <Filter/>
            <div style={{marginTop: '10px', marginBottom: '10px', display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                <Button style={{marginLeft: '10px'}} onClick={()=> this.props.beersStore.randomBeer()}>Random beer</Button>
            </div>
            <Beers/>
            <div style={{marginTop: '10px', marginBottom: '10px', display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                <Pagination/>
            </div>
            <ModalBeer/>
        </React.Fragment>
        );
    }
}
