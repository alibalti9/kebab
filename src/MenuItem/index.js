const MenuItem = ({ heading,describtion }) => {
    return (
        <div className="menu">
            <h2 className="hea">{heading}</h2>
            <p className="des">{describtion}</p>
        </div> 
    )
}
export default MenuItem