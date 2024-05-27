import './index.css'

const LatestMatch = ({latestMatchDetailsObj}) => (
  <div className="latestMatchDetailsContainer">
    <div className="leftContainer">
      <p>{latestMatchDetailsObj.competingTeam}</p>
      <p>{latestMatchDetailsObj.date}</p>
      <p>{latestMatchDetailsObj.venue}</p>
      <p>{latestMatchDetailsObj.result}</p>
    </div>
    <img
      src={latestMatchDetailsObj.competingTeamLogo}
      className="latestMatchImageUrl"
      alt="opponentImage"
    />
    <div className="rightContainer">
      <p>First Innings</p>
      <p>{latestMatchDetailsObj.firstInnings}</p>
      <p>Second Innings</p>
      <p>{latestMatchDetailsObj.secondInnings}</p>
      <p>Man of the Match</p>
      <p>{latestMatchDetailsObj.manOfTheMatch}</p>
      <p>Umpires</p>
      <p>{latestMatchDetailsObj.umpires}</p>
    </div>
  </div>
)

export default LatestMatch
