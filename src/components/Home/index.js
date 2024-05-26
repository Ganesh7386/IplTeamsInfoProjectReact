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
  const [isLoading, changeLoadingStatus] = useState(true)

  useEffect(() => {
    const makeApiCallForTeams = async () => {
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
      changeLoadingStatus(false)
      console.log(keysNotationChangedTeamsInfo)
    }

    makeApiCallForTeams()
  }, [])

  const homeUi = () => (
    <div className="homeOverAllContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipl logo"
        className="iplLogoDesign"
      />
      <h1>IPL Dashboard</h1>
      <ul>
        {teamDetails.map(eachObj => (
          <TeamCard key={eachObj.id} teamDetails={eachObj} />
        ))}
      </ul>
      <div className={open ? 'floatingContainer' : 'closing'}>
        <button
          type="button"
          onClick={() => {
            setOpen(!open)
          }}
        >
          open
        </button>
      </div>
    </div>
  )

  const loadingUi = () => (
    <Loader type="Oval" color="blue" height={50} width={50} />
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
