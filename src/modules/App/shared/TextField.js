import React, {Component} from "react";
import PropTypes from "prop-types";

class TextField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			placeholder: props.placeholder,
			onChange: props.onChange
		};
	}

	render() {
		const {name, placeholder, onChange} = this.state;
		return (
			<input type="text" name={name} onChange={onChange} placeholder={placeholder}/>
		)
	}
}

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default TextField;
