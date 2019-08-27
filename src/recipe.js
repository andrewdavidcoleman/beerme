'use strict';
import React, { Component } from 'react'
import API from './API.js'

class Recipe extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      beerId: this.props.beerId,
      recipe: this.props.beerId ? API.getRecipeByBeerId(this.props.beerId) : null
    }

  }

  render() {
    return (
      <div className='col'>
        <div className='row mt-4'>
          <div className='col-3 d-flex flex-column align-items-center fact-list'>
            <div className='row'>
              <h5>Facts:</h5>
            </div>
            <div className='row'>
              <ul className='col'>
                  {this.state.recipe.facts.map((fact) => {
                    return <li>{fact}</li>
                  })}
              </ul>
            </div>
          </div>
          <div className='col-3 d-flex flex-column align-items-beginning ingredient-list'>
            <div className='row'>
              <h5>What you'll need:</h5>
            </div>
            <div className='row'>
              <ul className='col'>
                  {this.state.recipe.ingredients.map((fact) => {
                    return <li>{fact}</li>
                  })}
              </ul>
            </div>
          </div>
          <div className='col-6 d-flex flex-column align-items-beginning ingredient-list'>
            <div className='row'>
              <h5>Directions:</h5>
            </div>
            <div className='row'>
              <ul className='col'>
                  {this.state.recipe.directions.map((fact) => {
                    return <li>{fact}</li>
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
