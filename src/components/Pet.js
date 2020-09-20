import React from 'react'

class Pet extends React.Component {
  // can also do the isAdopted button logic in a function

  // renderButton = () => {
  //   if(this.props.pet.isAdopted){
  //   return  <button className="ui disabled button">Already adopted</button>
  //   } else {
  //    return <button className="ui primary button">Adopt pet</button>
  //   }
  // }


  render() {

    const {id, name, type, age, gender, weight, isAdopted} = this.props.pet
  // is also valid 
  // const {pet} = this.props

  
    return (
      <div className="card">
        <div className="content">
          <a href="#" className="header">
            {gender === 'male' ? '♂': '♀'}
            {name}
            {/*pet.name*/ }
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
       { /* this.renderButton */}
        {isAdopted ? (<button className="ui disabled button">Already adopted</button> ): (<button className="ui primary button" onClick={()=> this.props.onAdoptPet(id)}>Adopt pet</button> ) }
        </div>
      </div>
    )
  }
}

export default Pet
