import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      isAdopted: false,
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () =>{
    const {type} = this.state.filters
    const url = `/api/pets${type !== 'all' ? '?type=' + type : ''}`;
    fetch(url)
    .then(res => res.json())
    .then(pets => {this.setState({ pets: pets })})
    // other option, this gives same results
    // .then(pets => {this.setState({ pets })})
  }

  // dont forget that we passed in the pet.id from <Pet /> so we need to make sure that it gets passed as an argument in ur function we create for it.
  onAdoptPet = (petId) =>{
    console.log('hi', petId)

    this.setState({
      pets: this.state.pets.map(p => (p.id === petId ? {...p, isAdopted: true} : p))
    })
  // other option
  // this.setState((prevState) => ({
  //   pets: this.prevState.pets.map(p => (p.id === petId ? {...p, isAdopted: true} : p))
  // }))

  }//end

    // change isAdopted state from false to true and back
    // logic: find the pet.id and match it to the clicked petID,
    // if these two are a match then change the state of isAdopted to true
    // use the spread operator in setState function to change the state of that petID
  // otherwise leave the state alone

  onChangeType = (e) =>{
    console.log('hi', e.target)
        // let newType = e.target.value
        this.setState({
          filters:{
            type: e.target.value
          }
        })
      } 

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              onChangType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
