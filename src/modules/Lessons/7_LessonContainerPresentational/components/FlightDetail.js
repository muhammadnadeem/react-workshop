import React from 'react';
import PropTypes from 'prop-types';
 const FlightDetail = ({details}) => {
  return (
	<tr>
	  <td> {details.departureDate} > {details.arrivalDate}</td>
	  <td>{details.departure} > {details.arrival}</td>
	  <td>{details.intervals[0].flightId}</td>
	  <td>{details.intervals[0].class}</td>
	  <td colSpan={2}>{details.bg_info.pieces} pc(s) - {details.bg_info.weight}{details.bg_info.unit}</td>
	</tr>
  );
};
 FlightDetail.propTypes = {
  details: PropTypes.object,
};
 export default FlightDetail;