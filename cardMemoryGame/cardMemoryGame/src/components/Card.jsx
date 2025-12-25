const Card = (props) => {

    const card = props.card;
    const handleClick = props.handleClick;

    return (
        <div className={`card ${card.isFlipped ? "flipped" : ""}`} key={card.id} onClick={() => {
            handleClick(card.id);
        }}>
            <div className="card-front"> ? </div>
            <div className="card-back">{card.value}</div>
        </div>
    );
};

export default Card;