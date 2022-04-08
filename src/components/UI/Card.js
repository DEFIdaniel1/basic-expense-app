import './Card.css';

const Card = (props) => {
    //adds card as a css class + inherited "className" elements
    const classes = 'card ' + props.className;
    
    return <div className={classes}>{props.children}</div>;
}

export default Card;