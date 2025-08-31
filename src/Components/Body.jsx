export default function Body({serves,difficulty,type,img})
{
    return(
        <div className="card-body">
        <div>
            <p><strong>Serves:</strong> {serves}</p>
            <p><strong>Difficulty:</strong> {difficulty}</p>
            <p><strong>Type:</strong> {type}</p>
        </div>
        <img className="image" src={img} alt="Dosa image" />
      </div>
    )
}