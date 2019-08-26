'use strict';
import React, { Component } from 'react'
import API from './API.js'
import Select from 'react-select'
import Recipe from './recipe.js'

class BeerMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBeerId: null
    };

    // this.getRecipe = this.getRecipe.bind(this)
  }

  getOptions(){

    const beers = API.getAllBeers()
    const options = []

    for (var i = 0; i < beers.length; i++) {
      options.push(
        { value: beers[i].id, label: beers[i].name }
      )
    }

    return options;
  }

  onBeerSelected (selectedBeer){
    console.log(selectedBeer);
    this.setState({
      selectedBeerId: selectedBeer.value
    })
  }

  render() {

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        borderRadius: '100px',
        boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
        border: 'none',
        height: '42px'
      }),
      option: (provided, state) => ({
        ...provided
      })
    }

    return (
      <div className='container-fluid flex-fill d-flex flex-column beer-me'>
        <div className='row flex-fill' />
        <div className='row '>
          <div className='col-3'/>
          <div className='col-6'>
            <div className='row flex-fill align-items-center justify-content-center fade-down-in-delay mb-3'>
              <img className='mr-2 beer-icon' src='./images/beer.png' />
              <h1 className='mb-0 mr-5'>beer me</h1>
            </div>
            <div className='row flex-fill fade-down-in justify-content-center'>
              <div className='col react-select-container'>
                <Select
                styles={customStyles}
                options={this.getOptions()}
                onChange={(option) => this.onBeerSelected(option)}
                 />
              </div>
            </div>
          </div>
          <div className='col-3'/>
        </div>
        <div className='row flex-fill'>
        { this.state.selectedBeerId ? <Recipe beerId={this.state.selectedBeerId} /> : null }
        </div>
        <div className='row flex-fill' />
      </div>
    );
  }
}

export default BeerMe;
