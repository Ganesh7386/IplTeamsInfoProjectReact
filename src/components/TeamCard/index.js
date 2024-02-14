import {Link} from 'react-router-dom'

import './index.css'

function TeamCard(props) {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails
  console.log(teamImageUrl)

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <div>
          <p>{name}</p>
          <p>{id}</p>
          <img src={teamImageUrl} className="eachTeamImage" alt={name} />
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
