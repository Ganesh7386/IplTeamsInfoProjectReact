import {Component} from 'react'
// eslint-disable-next-line import/no-unresolved
import {each} from 'mimer/dist/internal'

import './index.css'
// eslint-disable-next-line no-unused-vars

// make fetch("https://apis.ccbp.in/ipl") to display TeamCard COmponent

class Home extends Component {
  state = {
    allTeamsList: [],
  }

  componentDidMount() {
    this.getAllTeamsList()
  }

  getAllTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const iplTeamsList = await response.json()
    console.log(iplTeamsList)

    // console.log(modifiedIplTeamsListKeys)

    // this.setState({allTeamsList: modifiedIplTeamsListKeys})
  }

  render() {
    const {allTeamsList} = this.state
    return (
      <li className="home-bg-container">
        <h1>IPL Dashboard</h1>
        <li className="team-cards-container">
          <ul className="team-cards-container">
            {allTeamsList.map(eachObj => (
              <li className="box">
                <div>
                  <p>{eachObj.id}</p>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </li>
    )
  }
}

export default Home
