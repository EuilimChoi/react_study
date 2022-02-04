import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

function Detail () {
    const [moviedetal, setdetail] = useState({})
    const {id} = useParams();
    const getdetail = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setdetail(json.data.movie);
        console.log(moviedetal)}
    useEffect (()=> {
        getdetail();
    },[])



    return (
    <div>
        <h1>Title : {moviedetal.title_long} </h1>
        <img src={moviedetal.large_cover_image} />
        <p>{moviedetal.description_full}</p>

    </div>
    )
}

export default Detail;