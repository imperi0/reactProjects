const Header = (props) => {
    return <div className="Header">
        <h1>Welcome to the game</h1>
        <div className="gameStats">
            <div className="reset">
                Reset :  
                <button>Reset</button>
            </div>
            <div className="currentScore">
                Current Score : {}
                <p>0</p>
            </div>
        </div>
    </div>
}

export default Header;