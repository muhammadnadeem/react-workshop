import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileImage extends Component {
	constructor (props) {
		super(props);
		this.state = {
			avatar_url: props.avatar_url
		}
	}

	render() {
		return (
			<img alt={this.state.avatar_url} src={this.state.avatar_url} width="100" />
		)
	}
}

ProfileImage.propTypes = {
	avatar_url: PropTypes.string.isRequired
};

export default ProfileImage;
