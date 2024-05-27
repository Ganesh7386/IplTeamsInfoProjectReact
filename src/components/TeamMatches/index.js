import {useState} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

function formatLatestMatchDetails(matchDetails) {
  const formatted = {
    umpires: matchDetails.umpires,
    result: matchDetails.result,
    manOfTheMatch: matchDetails.man_of_the_match,
    id: matchDetails.id,
    date: matchDetails.date,
    venue: matchDetails.venue,
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    firstInnings: matchDetails.first_innings,
    secondInnings: matchDetails.second_innings,
    matchStatus: matchDetails.match_status,
  }

  return formatted
}

const formatRecentMatches = matchList => {
  const newFormattedMatchList = matchList.map(eachTeam => ({
    umpires: eachTeam.umpires,
    result: eachTeam.result,
    manOfTheMatch: eachTeam.man_of_the_match,
    id: eachTeam.id,
    date: eachTeam.date,
    venue: eachTeam.venue,
    competingTeam: eachTeam.competing_team,
    competingTeamLogo: eachTeam.competing_team_logo,
    firstInnings: eachTeam.first_innings,
    secondInnings: eachTeam.second_innings,
    matchStatus: eachTeam.match_status,
  }))
  return newFormattedMatchList
}

function TeamMatches(props) {
  const [latestMatchDetailsObj, setLatestMatchDetailsObj] = useState({})
  const [teamPhotoUrl, setTeamPhotoUrl] = useState('')
  const [recentMatchDetailsList, setRecentMatchDetailsList] = useState([])
  const [isLoading, setLoading] = useState('true')

  useState(() => {
    const makeApiCall = async () => {
      setLoading('true')
      const {match} = props
      const {params} = match
      const {id} = params
      const url = `https://apis.ccbp.in/ipl/${id}`
      const details = {
        method: 'GET',
      }
      try {
        const response = await fetch(url, details)
        const responseJson = await response.json()
        console.log(responseJson)
        console.log('***********')
        const teamBannerUrl = responseJson.team_banner_url
        setTeamPhotoUrl(teamBannerUrl)
        const latestMatchDetails = formatLatestMatchDetails(
          responseJson.latest_match_details,
        )
        setLatestMatchDetailsObj(latestMatchDetails)
        console.log(teamBannerUrl)
        console.log(latestMatchDetails)
        const recentMatches = formatRecentMatches(responseJson.recent_matches)
        setRecentMatchDetailsList(recentMatches)
        console.log(recentMatches)
        setLoading('false')
      } catch (e) {
        console.log(e.message)
      }
    }

    makeApiCall()
  }, [])

  const renderSuccessfullUi = () => (
    <div className="TeamMatchesContainer">
      <img
        src={teamPhotoUrl}
        alt="eachTeamLogo"
        style={{height: '300px', width: '100%'}}
      />
      <LatestMatch latestMatchDetailsObj={latestMatchDetailsObj} />
      <div>
        <ul className="recentMatchesList">
          {recentMatchDetailsList.map(eachObj => (
            <MatchCard key={eachObj.id} eachMatchDetails={eachObj} />
          ))}
        </ul>
      </div>
    </div>
  )

  const renderLoadingUi = () => (
    <div className="overAllLoadingUi">
      <div className="loadingContainerTop">{}</div>
      <div className="loadingContainerTopMiddle">{}</div>
      <div className="loadingContainerBottomCardsEffect">
        <ul className="recentMatchesList">
          <li className="eachMatchCardLoadingContainer">
            <div>{}</div>
          </li>
          <li className="eachMatchCardLoadingContainer">
            <div>{}</div>
          </li>
          <li className="eachMatchCardLoadingContainer">
            <div>{}</div>
          </li>
          <li className="eachMatchCardLoadingContainer">
            <div>{}</div>
          </li>
          <li className="eachMatchCardLoadingContainer">
            <div>{}</div>
          </li>
          <li className="eachMatchCardLoadingContainer">
            <div>{}</div>
          </li>
        </ul>
      </div>
    </div>
  )

  const renderUiAccordToLoadingStatus = () => {
    switch (isLoading) {
      case 'true':
        return renderLoadingUi()
      case 'false':
        return renderSuccessfullUi()
      default:
        return null
    }
  }

  return renderUiAccordToLoadingStatus()
}
export default TeamMatches
