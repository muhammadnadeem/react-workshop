import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlightDetail from './FlightDetail';

class FlightRecord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flight: props.flight,
			isHidden: true
		};
		this.toggleDetail = this.toggleDetail.bind(this);
	}

	toggleDetail() {
		this.setState({
			isHidden: !this.state.isHidden
		});
	}

	render() {
		const {flight, isHidden} = this.state;
		return (
			<span className="flight-record">
				<tr>
					<td>{flight.airline}</td>
					<td>{flight.details.departure}</td>
					<td>{flight.details.arrival}</td>
					<td>{flight.duration}</td>
					<td>{flight.stops}</td>
					<td>Rs. <strong>{flight.priceDetails.totalFare}</strong></td>
					<td><button onClick={this.toggleDetail}>{isHidden ? "Show Details" : "Hide Details"}</button></td>
				</tr>
				{!isHidden && <FlightDetail details={flight.details}/>}
			</span>
		);
	}
};
FlightRecord.propTypes = {
	props: PropTypes.object,
};
export default FlightRecord;