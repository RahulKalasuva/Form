import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      fname : "",
      lname : "",
      ph_no : "",
      age :  ""
    } 
  }

  handleChange = (e) => {
    console.log(e.target.name,e.target.value)
    this.setState(state=> {
      return{
        ...state
      }
    }

  render() {
    return (
     <div>
            <h1>FORM SUBMISSION</h1>
              
      </div>
    )
  }
}
