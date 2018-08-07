import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepoDetails extends Component {
	constructor (props) {
		super(props);
		this.state = {
			repo: props.repo
		}
	}

	render() {
		return (
			<div>{this.state.repo.full_name}
				<div><label>Description: </label>{this.state.repo.description}</div>
				<div><label>Default Branch: </label>{this.state.repo.default_branch}</div>
				<div><label>Language: </label>{this.state.repo.language}</div>
				<div><label>Last updated at: </label>{this.state.repo.updated_at}</div>
				<div><label>license: </label>{this.state.repo.license ? this.state.repo.license.name : "..."}</div>
				<div><label>Stars: </label>{this.state.repo.stargazers_count}</div>
				<div><label>Open Issues: </label>{this.state.repo.open_issues_count}</div>
				<div><label>Public: </label>{ this.state.repo._private ? "Yes" : "No" }</div>
				<div><label>URL: </label>{this.state.repo.html_url}</div>
                <br />
			</div>
		)
	}
}

RepoDetails.propTypes = {
	repo: PropTypes.object.isRequired
};

export default RepoDetails;
