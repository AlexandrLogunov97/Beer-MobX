import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Input, InputGroup, Button, Collapse, CardBody, Card } from 'reactstrap';

@inject('beersStore')
@observer
export class Filter extends React.Component {
    filterValueChange = (e) => {
        this.props.beersStore.filterFieldValueChange(e.target.name, e.target.value);
    }
    render() {
        let store = this.props.beersStore;
        let title=store.filterState?'Hide filter':'Show filter';
        return (
            <React.Fragment>
                <Button color="primary" onClick={()=>store.changeFilterState()} style={{ marginBottom: '1rem', width: '100%', borderRadius: '0px' }}>{title}</Button>
                <Collapse isOpen={store.filterState}>
                    <Card>
                        <CardBody>
                            <InputGroup style={{ marginTop: '10px' }}>                              
                                <Input placeholder='Abv gt' name='abv_gt' value={store.filterValues[0].value} onChange={this.filterValueChange} />
                                <Input placeholder='Abv lt' name='abv_lt' value={store.filterValues[1].value} onChange={this.filterValueChange} />
                                <Input placeholder='Ibu gt' name='ibu_gt' value={store.filterValues[2].value} onChange={this.filterValueChange} />
                                <Input placeholder='Ibu lt' name='ibu_lt' value={store.filterValues[3].value} onChange={this.filterValueChange} />
                                <Input placeholder='Ebc gt' name='ebc_gt' value={store.filterValues[4].value} onChange={this.filterValueChange} />
                                <Input placeholder='Ebc lt' name='ebc_lt' value={store.filterValues[5].value} onChange={this.filterValueChange} />
                                <Input placeholder='Beer name' name='beer_name' value={store.filterValues[6].value} onChange={this.filterValueChange} />
                                <Input placeholder='Yeast' name='yeast' value={store.filterValues[7].value} onChange={this.filterValueChange} />
                                <Input placeholder='Brewed before' name='brewed_before' value={store.filterValues[8].value} onChange={this.filterValueChange} />
                                <Input placeholder='Brewed after' name='brewed_after' value={store.filterValues[9].value} onChange={this.filterValueChange} />
                                <Input placeholder='Hops' name='hops'  value={store.filterValues[10].value} onChange={this.filterValueChange} />
                                <Input placeholder='Malt' name='malt' value={store.filterValues[11].value} onChange={this.filterValueChange} />
                                <Input placeholder='Food' name='food'  value={store.filterValues[12].value} onChange={this.filterValueChange} />
                                <Button onClick={()=>store.clearFilterValues()} style={{marginRight: '10px'}}>Clear filter</Button>
                                <Button onClick={()=>this.props.beersStore.filtering()}>Filter</Button>
                            </InputGroup>
                        </CardBody>
                    </Card>
                </Collapse>
            </React.Fragment>
        );
    }
}