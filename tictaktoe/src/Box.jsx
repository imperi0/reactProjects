export const Box = ({value, onClick}) => {
    return (
        <div className="box" onClick={onClick}>
            {value}
        </div>
    )
}