import './index.css'

const MatchCard = ({eachMatchDetails}) => (
  <li className="eachMatchCardContainer">
    <div>
      <img
        src={eachMatchDetails.competingTeamLogo}
        alt="competingTeamLogoimg"
        className="competingteamLogoImg"
      />
      <p>{eachMatchDetails.competingTeam}</p>
      <p>{eachMatchDetails.result}</p>
      <p
        className={
          eachMatchDetails.matchStatus === 'Lost' ? 'lostStyling' : 'wonStyling'
        }
      >
        {eachMatchDetails.matchStatus}
      </p>
    </div>
  </li>
)

export default MatchCard
