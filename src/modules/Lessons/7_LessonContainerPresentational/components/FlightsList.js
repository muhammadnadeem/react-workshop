import React, { Component } from "react";
import PropTypes from 'prop-types';

import FlightRecord from './FlightRecord';

class FlightsList extends Component{
	constructor(props){
		super(props);
		this.state = {
			results: props.results,
		};
  }

  render(){
	const { results } = this.state;

    return (
	  <div>
	  	{
		  results.map((flight, index) =>
			<table key={index} className="record">
	  		  <FlightRecord flight={flight} />
			</table>
		  )
	  	}
	  </div>
	  );
	}
}

FlightsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};

export default FlightsList;