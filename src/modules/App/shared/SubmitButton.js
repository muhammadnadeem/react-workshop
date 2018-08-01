import React, {Component} from 'react';
import PropTypes from 'prop-types';


class SubmitButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSaving: props.isSaving,
			handleSubmit: props.handleSubmit
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({isSaving: nextProps.isSaving});
	}

	render() {
		const {isSaving, handleSubmit} = this.state;
		return (
			!isSaving ? <input type="submit" onClick={handleSubmit} value="Sign Up"/> : <span>Saving...</span>
		)
	}
}

SubmitButton.protoTypes = {
	isSaving: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired
};

export default SubmitButton;

