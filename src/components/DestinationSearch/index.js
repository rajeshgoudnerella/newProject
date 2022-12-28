import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchEngine = event => {
    const searchText = event.target.value
    this.setState({searchInput: searchText})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const resultList = destinationsList.filter(eachElement =>
      eachElement.name.toUpperCase().includes(searchInput.toUpperCase()),
    )
    return (
      <div>
        <div className="container">
          <h1>Destination Search</h1>
          <input
            type="search"
            onChange={this.searchEngine}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="imageContainer">
          {resultList.map(eachItem => (
            <DestinationItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
