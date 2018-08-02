import React, { Component } from 'react';
import axios from 'axios';
import CONFIG from './../../../../../util/config';
import TextInput from './../../../../App/shared/TextField';
import ProfileImage from './ProfileImage';
import UserDetails from "./UserDetails";

class GitDashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: "",
      isLoading: true,
      errorLoading: '',
      users: null,
      filteredUsers: []
    };

    this.onChange = this.onChange.bind(this);
    this.viewUserRepositories = this.viewUserRepositories.bind(this);
  }

  onChange(event) {
    const { users } = this.state;
    const query = event.target.value;
    let filteredUsers = [];

    if (query.length > 0) {
      filteredUsers =users.filter(function(user){
       return user.login.indexOf(event.target.value) > -1;
      });
    } else {
      filteredUsers = users;
    }

    this.setState({filteredUsers: filteredUsers});
  }

  componentWillMount() {
    axios.get(
       CONFIG.GITHUB_API_BASE + "/users",
    ).then(({data}) => {
        this.setState({ isLoading:false, users: data, filteredUsers: data });
    }).catch(response => {
          console.error('Error while fetching Users..', response);
          this.setState({
            isLoading: !this.state.isLoading,
            errorLoading: response,
          });
        });
  }
  viewUserRepositories () {

  }
  render() {
    const {query, filteredUsers, isLoading} = this.state;
    return (<div>
      <TextInput name="search" placeholder={query} onChange={this.onChange}/>
				{
				  isLoading ? <span>Loading</span> :
            filteredUsers.map((user, index) =>
						<div>
							<ProfileImage avatar_url={user.avatar_url}/>
							<UserDetails login={user.login} url={user.url} type={user.type} site_admin={user.site_admin}/>
              <button onClick={this.viewUserRepositories}>View Repositories</button>
						</div>
					)
				}
      </div>
    );
  }
}

export default GitDashboard;