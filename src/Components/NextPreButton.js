// import React, { Component } from 'react'

// export default class NextPreButton extends Component {

//     handlePrevClick=()=>{
//         console.log("pre");
//     }
//     // handleNextClick=()=>{
//     //     console.log("next");
//     //     this.setState({
//     //         page: page+1
//     //     })
//     // }

//     handleNextClick = () => {
//         console.log("next");
//         this.setState((prevState) => ({
//           page: prevState.page + 1
//         }));
//       }

//   render() {
//     return (
//       <div>
//         <div className="container d-flex justify-content-between">
//             <button disabled={this.props.page<=1} type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick}>&larr; Previous</button>
//             <button type="button" className="btn btn-outline-success" onClick={this.handleNextClick}>Next &rarr;</button>
//         </div>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react';

export default class NextPreButton extends Component {

    constructor(){
        super();
        console.log("I am Akshay Jain");
        this.state={
          page:1
        }
      }

  handlePrevClick = () => {
    console.log("pre");
  }

  handleNextClick = () => {
    console.log("next");
    this.setState(() => ({
      page: this.state.page + 1
    }));
  }
  

  render() {
    return (
      <div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-outline-success" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
