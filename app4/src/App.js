import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars = () => {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    const mappedCars = this.state.cars.map(car => {
      return (
        <div key={car.id}>
          <h4>{car.year} {car.make} {car.model}</h4>
          <p>{car.price}</p>
        </div>
      )
    })
    console.log(this.state.cars)
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {mappedCars}
      </div>
    );
  }
}

export default App;
