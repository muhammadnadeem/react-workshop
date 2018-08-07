import React, { Component } from 'react';
import axios from 'axios';
import CONFIG from './../../../../../util/config';
import ProfileImage from './ProfileImage';
import UserDetails from "./UserDetails";
import RepoDetails from "./RepoDetails";
import TextField from "../../../../App/shared/TextField";

class GitDashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      view: "users",
      query: "",
      isLoading: true,
      errorLoading: '',
      users: null,
      filteredData: [],
      reposList: null
    };

    this.onChange = this.onChange.bind(this);
    this.viewUserRepositories = this.viewUserRepositories.bind(this);
    this.callServer = this.callServer.bind(this);
  }

  filterUserData(filterOn, data, query) {
      return data.filter(function(r){
          return r[filterOn].indexOf(query) > -1;
      });
  }

  onChange(event) {
    const { users, reposList } = this.state;
    const query = event.target.value;
    let filteredRecords = [];

    if (query.length > 0) {
        if (this.state.view === 'users') {
            filteredRecords = this.filterUserData('login', this.state.users, event.target.value);
        } else {
            filteredRecords = this.filterUserData('full_name', this.state.reposList, event.target.value);
        }

    } else {
        if (this.state.view === 'users') {
            filteredRecords = users;
        } else {
            filteredRecords = reposList;
        }
    }

    this.setState({filteredData: filteredRecords, query: query});
  }

  callServer(url) {
      axios.get(
          url,
      ).then(({data}) => {
          if(this.state.view === 'users') {
              this.setState({query: "", isLoading:false, users: data, filteredData: data });
          } else {
              this.setState({query: "", isLoading:false, reposList: data, filteredData: data});
          }
      }).catch(response => {
          console.error('Error while fetching Users..', response);
          this.setState({
              isLoading: !this.state.isLoading,
              errorLoading: response,
          });
      });
  }

  componentWillMount() {
      const url = CONFIG.GITHUB_API_BASE + "/users";
      this.callServer(url);
  }

  viewUserRepositories (username) {
      this.setState({ view: "repos" });
      const url = CONFIG.GITHUB_API_BASE + `/users/${username}/repos`;
      this.callServer(url);
  }

  renderUsers(query, filteredData, isLoading) {
      return (<div>
              <TextField name="search" placeholder="Type for search" value={query} onChange={this.onChange}/>
              { !this.state.query ? "Showing all Results" : "" }
              <br />
              {
                  isLoading ? <span>Loading</span> :
                      filteredData.map((user, index) =>
                          <div key={user.id}>
                              <ProfileImage avatar_url={user.avatar_url}/>
                              <UserDetails login={user.login} url={user.url} type={user.type} site_admin={user.site_admin}/>
                              <button onClick={() => this.viewUserRepositories(user.login)}>View Repositories</button>
                          </div>
                      )
              }
          </div>
      );
  }

  renderRepos(query, filteredData, isLoading) {
      return (<div>
          <TextField name="search" placeholder="Type for search" value={query} onChange={this.onChange}/>
          { !this.state.query ? "Showing all Results" : "" }
          <br />
          <br />
          {
              isLoading ? <span>Loading</span> :
                  filteredData.map((repo, index) =>
                      <div key={repo.id}>
                          <RepoDetails repo={repo}/>
                      </div>
                  )
          }
      </div>);
  }

  render() {
    const {query, filteredData, isLoading, view} = this.state;
    if (view === 'users') {
      return this.renderUsers(query, filteredData, isLoading);
    } else {
        return this.renderRepos(query, filteredData, isLoading);
    }

  }
}

export default GitDashboard;