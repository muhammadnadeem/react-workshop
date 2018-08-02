import React, { Component } from 'react';

import './Flights.scss';
import Loader from './Loader';
import FlightsList from './FlightsList';
import resultsList from '../../../../util/resultsList';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      isLoading: true,
    };
  }

  componentWillMount() {
    /* Load results from API or a local file: resultsList and create a view of Search Results
       that should render the information as well as implement the Show/Hide detail
    */
    setTimeout(() => {
      this.setState({
        results: resultsList,
        isLoading: false
      });
    }, 3000);
  }

   renderRelatedView(){
    const { results, isLoading } = this.state;
    let view = null;
    if(isLoading)
      view = <Loader />
    else if(results){
      view = <FlightsList results={results}/>
    }
    return view;
  }

  render() {
    let viewToRender = this.renderRelatedView();

    return (
        <section className="info-panel">
          <h2>Search Results</h2>
          <div className="results-body">
          {viewToRender}
          </div>
        </section>
    )
  }
}

export default SearchResults;
