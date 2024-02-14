import {useState} from 'react'

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
    man_of_the_match: eachTeam.man_of_the_match,
    id: eachTeam.id,
    date: eachTeam.date,
    venue: eachTeam.venue,
    competingTeam: eachTeam.competing_team,
    competing_team_logo: eachTeam.competing_team_logo,
    firstInnings: eachTeam.first_innings,
    secondInnings: eachTeam.second_innings,
    matchStatus: eachTeam.match_status,
  }))
  return newFormattedMatchList
}

function TeamMatches(props) {
  const [eachTeamMatchDetails, updateEachTeamMatchDetails] = useState([])

  useState(() => {
    const makeApiCall = async () => {
      const {match} = props
      const {params} = match
      const {id} = params
      const url = `https://apis.ccbp.in/ipl/${id}`
      const details = {
        method: 'GET',
      }
      const response = await fetch(url, details)
      const responseJson = await response.json()
      console.log('***********')
      const teamBannerUrl = responseJson.team_banner_url
      const latestMatchDetails = formatLatestMatchDetails(
        responseJson.latest_match_details,
      )
      console.log(teamBannerUrl)
      console.log(latestMatchDetails)
      const recentMatches = formatRecentMatches(responseJson.recent_matches)
      console.log(recentMatches)
    }

    makeApiCall()
  }, [])

  return <h1>This is Team matches</h1>
}
export default TeamMatches
