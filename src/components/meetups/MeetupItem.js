import classes from './MeetupItem.module.css';
import Card from '../UI/Card';
function MeetupItem(props){
    return <li>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}> 
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>Favourite</button>
            </div>


        </Card>
        
    </li>
}

export default MeetupItem;