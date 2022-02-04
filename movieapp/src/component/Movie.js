import {Link} from "react-router-dom"


function Movies ({title,img,rating,summary,genres,id}) {
    return (
        <div>
        <h1>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h1>
        <img src={img} alt=""/>
        <h3>rating : {rating}</h3>
        <ul>
            {genres.map((g)=>(
            <li key={g}>{g}</li>
            ))}
        </ul>
        <p>summary : {summary}</p>
        </div>
    )
        
    }

export default Movies;