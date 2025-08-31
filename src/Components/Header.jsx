export default function Header({title,prep,cook})
{
    return(
        <div className="card-header">
        <h1>{title}</h1>
        <p>Prep Time: {prep} | Cook Time: {cook}</p>
      </div>
    )
}