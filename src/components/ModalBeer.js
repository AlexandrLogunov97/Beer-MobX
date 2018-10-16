import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

@inject('beersStore')
@observer
export class ModalBeer extends Component {
  render() {
    let beer = this.props.beersStore.selectedBeer;
    console.log(beer);
    return (
      <React.Fragment>
        <Modal isOpen={this.props.beersStore.modalState} toggle={() => this.props.beersStore.hideModal()} className={this.props.className}>
          <ModalHeader toggle={() => this.props.beersStore.hideModal()}>{beer.name}</ModalHeader>
          <ModalBody>
            <label><b>Name:</b> {beer.name}</label><br />
            <label><b>First brewed:</b> {beer.first_brewed}</label><br />
            <label><b>Picture</b></label><br />
            <img style={{ width: 100, height: 200 }} alt='error blat' src={beer.image_url} /><br />
            <label><b>Tag line:</b> {beer.tagline}</label><br />
            <label><b>Abv:</b> {beer.abv}</label><br />
            <label><b>Ibu:</b> {beer.ibu}</label><br />
            <label><b>Target fg:</b> {beer.target_fg}</label><br />
            <label><b>Target og:</b> {beer.target_og}</label><br />
            <label><b>Ebc:</b> {beer.ebc}</label><br />
            <label><b>Srm:</b> {beer.srm}</label><br />
            <label><b>Ph:</b> {beer.ph}</label><br />
            <label><b>Attenuation level:</b> {beer.attenuation_level}</label><br />
            {
              <label><b>Volume:</b> {beer.volume ? `(value: ${beer.volume.value}, unit:  ${beer.volume.unit})` : 'Empty'}</label>
            }<br />
            {
              <label><b>Boil volume:</b> {beer.boil_volume ? `(value: ${beer.boil_volume.value}, unit:  ${beer.boil_volume.unit})` : 'Empty'}</label>
            }<br />
            <b>Ingredients</b><br />
            <span style = {{marginLeft: '15px'}}>Malt:</span><br />
            {
              beer.ingredients ? beer.ingredients.malt ? beer.ingredients.malt.map((x, index) => (
                <React.Fragment>
                  <label style = {{marginLeft: '25px'}} key={index}>  {index + 1}. Name: {x.name}, amount: (value: {x.amount.value}, unit: {x.amount.unit}) </label><br />
                </React.Fragment>
              )) : 'Empty' : 'Empty'
            }
            <span style = {{marginLeft: '15px'}}>Hops:</span><br />
            {
              beer.ingredients ? beer.ingredients.hops ? beer.ingredients.hops.map((x, index) => (
                <React.Fragment>
                  <label key={index} style = {{marginLeft: '25px'}}>  {index + 1}. Name: {x.name}, amount: (value: {x.amount.value}, unit: {x.amount.unit}), {x.add}, {x.attribute}</label><br />
                </React.Fragment>
              )) : 'Empty' : 'Empty'
            }
            {
              <label style = {{marginLeft: '15px'}}>Yeast: {beer.ingredients ? beer.ingredients.yeast : 'empty'}</label>
            }<br />
            <b>Food pairing:</b><br />
            {
              beer.food_pairing ? beer.food_pairing.map((x, index) => (
                <React.Fragment>
                  <label key={index} style={{marginLeft: '15px'}}>  {index + 1}. {x}</label><br />
                </React.Fragment>
              )) : 'Empty'
            }
            <b>Method:</b><br />
            <span style = {{marginLeft: '15px'}}>Mash temp:</span><br />
            {
              beer.method ? beer.method.mash_temp ? beer.method.mash_temp.map((x, index) => (
                <React.Fragment>
                  <label key={index} style = {{marginLeft: '25px'}}>{index + 1}. temp (value: {x.temp.value}, unit: {x.temp.unit}), duration: {x.duration}</label><br />
                </React.Fragment>
              )) : 'Empty' : 'Empty'
            }
            <span style = {{marginLeft: '15px'}}>Fermentation:</span><br />
            {
              beer.method ? beer.method.fermentation ?
                <label style = {{marginLeft: '25px'}}>temp (value: {beer.method.fermentation.temp.value}, unit: {beer.method.fermentation.temp.unit})</label> : 'Empty' : 'Empty'
            }<br />
            {
              <label><b>Brewers tips:</b> {beer.brewers_tips}</label>
            }<br />
            {
              <label><b>Contributed by:</b> {beer.contributed_by}</label>
            }<br />
            <p><b>Discription:</b><br/> <span style = {{marginLeft: '15px'}}>{beer.description}</span></p><br />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.props.beersStore.hideModal()}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
