import './index.css'

const MatchCard = ({eachMatchDetails}) => (
  <li>
    <div>
      <img
        src={eachMatchDetails.competingTeamLogo}
        alt="competingTeamLogoimg"
        className="competingteamLogoImg"
      />
      <p>{eachMatchDetails.competingTeam}</p>
      <p>{eachMatchDetails.result}</p>
      <p>{eachMatchDetails.matchStatus}</p>
    </div>
  </li>
)

export default MatchCard
