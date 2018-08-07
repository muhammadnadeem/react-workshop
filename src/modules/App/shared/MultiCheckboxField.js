import React, {Component} from "react";
import PropTypes from "prop-types";

class MultiCheckboxField extends Component {
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
				<label><input type="checkbox" name={name} value={option} onClick={onChange}/>{option}</label>
			)
		)
	}
}

MultiCheckboxField.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
};

export default MultiCheckboxField;