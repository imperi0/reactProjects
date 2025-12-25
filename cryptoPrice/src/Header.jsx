const Header = (props) => {
    
    const setSearch = props.setSearch;
    return(
        <div className="Header">
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);
                console.log(event.target.value);
            }}/>
        </div>
    )
};

export default Header;