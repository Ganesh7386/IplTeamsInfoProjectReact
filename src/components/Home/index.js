import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

function changeNotation(eachTeam) {
  const obj = {
    name: eachTeam.name,
    id: eachTeam.id,
    teamImageUrl: eachTeam.team_image_url,
  }
  return obj
}

function Home() {
  const [teamDetails, updateTeamDetails] = useState([])
  console.log(teamDetails)
  const [isLoading, changeLoadingStatus] = useState(true)

  useEffect(() => {
    const makeApiCallForTeams = async () => {
      console.log('making call')
      const url = 'https://apis.ccbp.in/ipl'
      const methods = {
        method: 'GET',
      }
      const promise = await fetch(url, methods)
      // console.log(promise)
      // console.log(1)
      const jsonOfPromise = await promise.json()
      const gotTeamsInResponse = jsonOfPromise.teams
      console.log(gotTeamsInResponse)
      const keysNotationChangedTeamsInfo = gotTeamsInResponse.map(eachTeam =>
        changeNotation(eachTeam),
      )
      updateTeamDetails(keysNotationChangedTeamsInfo)
      localStorage.setItem(
        'teamDetails',
        JSON.stringify(keysNotationChangedTeamsInfo),
      )
      changeLoadingStatus(false)
      console.log(keysNotationChangedTeamsInfo)
    }
    const storedTeamsList = localStorage.getItem('teamDetails')
    // console.log('*****&&&&&&&&&&&&&&&')
    // console.log(storedTeamsList)
    // console.log('!!!@#$%^&*((((((((*&^%$#$%^&*')
    const parsedTeamslist = JSON.parse(storedTeamsList)
    // console.log(parsedTeamslist)
    if (parsedTeamslist) {
      console.log('data already present')
      changeLoadingStatus(true)
      updateTeamDetails(parsedTeamslist)
      changeLoadingStatus(false)
    } else {
      makeApiCallForTeams()
    }
  }, [])

  const homeUi = () => {
    console.log(teamDetails)
    console.log('went to render ui')
    return (
      <div className="homeOverAllContainer">
        <div className="topContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogoDesign"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul className="homeRouteTeamCardsLists">
          {teamDetails.map(eachObj => (
            <TeamCard key={eachObj.id} teamDetails={eachObj} />
          ))}
        </ul>
      </div>
    )
  }

  const loadingUi = () => (
    <div className="loadingContainer">
      <Loader type="Oval" color="blue" height={50} width={50} />
    </div>
  )

  const loadUiAccordingToLoadingStatus = () => {
    if (isLoading) {
      return loadingUi()
    }
    return homeUi()
  }

  return loadUiAccordingToLoadingStatus()
}

export default Home
