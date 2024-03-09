import React from 'react'
import './card.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';

const Card = () => {
  return (
    <div className='cards'>
        <div className='cardtop'>
        <div className="card c1">
          <AssignmentTurnedInIcon className='icon icon1'/>
          <div className='card-content'>
            30k
          </div>
          <div className='card-footer'>
            <p>Reclamation Traitée</p>
          </div>
        </div>
        <div className="card c2">
          <AccessTimeIcon className='icon icon2'/>
          <div className='card-content'>
            30k
          </div>
          <div className='card-footer'>
          <p>Reclamation En Cours</p>
          </div>
        </div>
        </div>
        <div className="cardbuttom">
        <div className="card c3">
          <AssignmentIcon className='icon icon3'/>
          <div className='card-content'>
            30k
          </div>
          <div className='card-footer'>
          <p>Reclamations</p>
          </div>
        </div>
        <div className="card c4">
          <PeopleAltSharpIcon className='icon icon4'/>
          <div className='card-content'>
            30k
          </div>
          <div className='card-footer'>
          <p>Reclamation Traitée</p>
          </div>
        </div>
        </div>
     
      
    </div>
  )
}

export default Card
