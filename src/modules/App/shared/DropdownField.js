import React, {Component} from "react";
import PropTypes from 'prop-types';
import COUNTRIES from "../../../util/countries";

class DropdownField extends (Component) {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			onChange: props.onChange
		}
	}

	render() {
		const {name, onChange} = this.state;
		return (
			<select name={name} onChange={onChange}>
				{
					COUNTRIES.map((country, index) =>
						<option value={country.value}>{country.label}</option>
					)
				};
			</select>
		)
	}
}

DropdownField.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default DropdownField;