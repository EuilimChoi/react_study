
function Movies ({title,img,rating,summary,genres}) {
    return (
        <div>
        <h1>{title}</h1>
        <img src={img} alt=""/>
        <h3>rating : {rating}</h3>
        <ul>
            {genres.map((g)=>{
            <li key={g}>{g}</li>
            })}
        </ul>
        <p>summary : {summary}</p>
        </div>
    )
        
    }

export default Movies;