import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDetails extends Component {
	constructor (props) {
		super(props);
		this.state = {
			login: props.login,
			url: props.url,
			type: props.type,
			site_admin: props.site_admin
		}
	}

	render() {
		const { login, url, type, site_admin } = this.state;
		return (
			<div>
				<div><label>Login: </label>{login}</div>
				<div><label>URL: </label>{url}</div>
				<div><label>Type: </label>{type} { site_admin ? "/" + {site_admin} : "" }</div>
			</div>
		)
	}
}

UserDetails.propTypes = {
	login: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	site_admin: PropTypes.bool.isRequired,
};

export default UserDetails;
