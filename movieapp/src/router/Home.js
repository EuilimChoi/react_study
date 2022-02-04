import { useEffect, useState } from "react";
import Movie from '../component/Movie';



function Home () {
    const [loading,setloding] = useState(true)
const [movies,setmovies] = useState([])


const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    const moviedata = await response.json();
    setmovies(moviedata.data.movies)
    setloding(false)
}

useEffect(() => {getMovies();},[])

console.log(movies)

return (
    <div>
    {loading ? <h1>Loding....</h1> : movies.map((el) => (

    <Movie
    key = {el.title}
    img={el.medium_cover_image} 
    title={el.title} 
    rating={el.rating} 
    genres={el.genres} 
    summary={el.summary}/>

    ))}
    </div>
    )
}

export default Home;