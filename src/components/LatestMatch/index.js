import {FaMapMarkerAlt} from 'react-icons/fa'

import {
  MdGroup,
  MdDateRange,
  MdDone,
  MdCheckCircle,
  MdPerson,
  MdSportsCricket,
} from 'react-icons/md'

import './index.css'

const LatestMatch = ({latestMatchDetailsObj}) => (
  <div className="latestMatchDetailsContainer">
    <div className="leftContainer">
      <div>
        <MdGroup size={30} />
        <p>{latestMatchDetailsObj.competingTeam}</p>
      </div>
      <div>
        <MdDateRange size={30} />
        <p>{latestMatchDetailsObj.date}</p>
      </div>
      <div>
        <FaMapMarkerAlt size={30} />
        <p>{latestMatchDetailsObj.venue}</p>
      </div>
      <div>
        <MdCheckCircle size={30} />
        <p>{latestMatchDetailsObj.result}</p>
      </div>
    </div>
    <img
      src={latestMatchDetailsObj.competingTeamLogo}
      className="latestMatchImageUrl"
      alt="opponentImage"
    />
    <div className="rightContainer">
      <div>
        <MdSportsCricket size={30} />
        <p>First Innings</p>
      </div>
      <p>{latestMatchDetailsObj.firstInnings}</p>
      <div>
        <MdSportsCricket size={30} />
        <p>Second Innings</p>
      </div>
      <p>{latestMatchDetailsObj.secondInnings}</p>
      <div>
        <MdPerson size={30} />
        <p>Man of the Match</p>
      </div>
      <p>{latestMatchDetailsObj.manOfTheMatch}</p>
      <div>
        <MdPerson size={30} />
        <p>Umpires</p>
      </div>
      <p>{latestMatchDetailsObj.umpires}</p>
    </div>
  </div>
)

export default LatestMatch
