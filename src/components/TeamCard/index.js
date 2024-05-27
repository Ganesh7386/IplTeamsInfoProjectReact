import {Link} from 'react-router-dom'

import './index.css'

function TeamCard(props) {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails
  console.log(teamImageUrl)

  return (
    <li className="eachHomeRouteTeamCardContainerListItem">
      <Link
        to={`/team-matches/${id}`}
        style={{color: 'inherit', textDecoration: 'none'}}
      >
        <div className="eachHomeRouteTeamCardContainer">
          <div className="innerDetailsOfTeamCardContainer">
            <img src={teamImageUrl} className="eachTeamImage" alt={name} />
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
