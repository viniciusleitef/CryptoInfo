import './ActionButton.css'
import {Link} from 'react-router-dom'

function ActionButton(props){
    return(
        <Link to={props.link} className='actionButton'>{props.name}</Link>
    )
}

export default ActionButton