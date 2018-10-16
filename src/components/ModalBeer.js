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
            <label>Name: {beer.name}</label><br />
            <label>First brewed: {beer.first_brewed}</label><br />
            <label>Picture</label><br />
            <img style={{ width: 100, height: 200 }} alt='error blat' src={beer.image_url} /><br />
            <label>Tag line: {beer.tagline}</label><br />
            <label>Abv: {beer.abv}</label><br />
            <label>Ibu: {beer.ibu}</label><br />
            <label>Target fg: {beer.target_fg}</label><br />
            <label>Target og: {beer.target_og}</label><br />
            <label>Ebc: {beer.ebc}</label><br />
            <label>Srm: {beer.srm}</label><br />
            <label>Ph: {beer.ph}</label><br />
            <label>Attenuation level: {beer.attenuation_level}</label><br />
            {
              <label>Volume: {beer.volume ? `(value: ${beer.volume.value}, unit:  ${beer.volume.unit})` : 'Empty'}</label>
            }<br />
            {
              <label>Boil volume: {beer.boil_volume ? `(value: ${beer.boil_volume.value}, unit:  ${beer.boil_volume.unit})` : 'Empty'}</label>
            }<br />
            Ingredients:<br />
            - Malt:<br />
            {
              beer.ingredients ? beer.ingredients.malt ? beer.ingredients.malt.map((x, index) => (
                <React.Fragment>
                  <label key={index}>  {index + 1}. Name: {x.name}, amount: (value: {x.amount.value}, unit: {x.amount.unit}) </label><br />
                </React.Fragment>
              )) : 'Empty' : 'Empty'
            }
            -Hops:<br />
            {
              beer.ingredients ? beer.ingredients.hops ? beer.ingredients.hops.map((x, index) => (
                <React.Fragment>
                  <label key={index}>  {index + 1}. Name: {x.name}, amount: (value: {x.amount.value}, unit: {x.amount.unit}), {x.add}, {x.attribute}</label><br />
                </React.Fragment>
              )) : 'Empty' : 'Empty'
            }
            {
              <label>-Yeast: {beer.ingredients ? beer.ingredients.yeast : 'empty'}</label>
            }<br />
            Food pairing:<br />
            {
              beer.food_pairing ? beer.food_pairing.map((x, index) => (
                <React.Fragment>
                  <label key={index}>  {index + 1}. {x}</label><br />
                </React.Fragment>
              )) : 'Empty'
            }
            Method:<br />
            -Mash temp:<br />
            {
              beer.method ? beer.method.mash_temp ? beer.method.mash_temp.map((x, index) => (
                <React.Fragment>
                  <label key={index}>{index + 1}. temp (value: {x.temp.value}, unit: {x.temp.unit}), duration: {x.duration}</label><br />
                </React.Fragment>
              )) : 'Empty' : 'Empty'
            }
            -Fermentation:<br />
            {
              beer.method ? beer.method.fermentation ?
                <label>temp (value: {beer.method.fermentation.temp.value}, unit: {beer.method.fermentation.temp.unit})</label> : 'Empty' : 'Empty'
            }<br />
            {
              <label>Brewers tips: {beer.brewers_tips}</label>
            }<br />
            {
              <label>Contributed by: {beer.contributed_by}</label>
            }<br />
            <p>Discription: {beer.description}</p><br />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.props.beersStore.hideModal()}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
