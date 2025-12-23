const Coin = (props) => {

    const {name, price_usd, symbol} = props.obj;

    
    return(
        <div className="Coin">
            <h2>{symbol}</h2>
            <h1>Name : {name}</h1>
            <h2>Price : ${price_usd}</h2>
        </div>
    );
}

export default Coin;