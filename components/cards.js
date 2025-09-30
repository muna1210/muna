

export default function Cards(props) {
    return <div className="text-xl h-20 bg-red-200">
        {/* <img className="" src={props.Image}/> */}
        <img src="{props.Image}"></img>
        <h1>{props.Name}</h1>
        <p>{props.Price}</p>
    </div>
}