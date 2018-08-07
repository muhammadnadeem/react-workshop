import React, {Component} from "react";
import PropTypes from "prop-types";

class RadioField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			options: props.options,
			onChange: props.onChange
		};
	}

	render() {
		const {name, options, onChange} = this.state;
		return (
			options.map((option, index) =>
				<label><input type="radio" name={name} value={option.value} onClick={onChange}/>{option.label}</label>
			)
		)
	}
}

RadioField.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
};

export default RadioField;