import React, {Component} from "react";
import PropTypes from 'prop-types';


class Label extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labelText: props.labelText
		}
	}

	render() {
		const {labelText} = this.state;
		return (
			<label><strong>{labelText}:</strong></label>
		);
	}
}


Label.propTypes = {
	labelText: PropTypes.string.isRequired
};

export default Label;