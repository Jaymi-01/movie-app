import { useEffect, useState } from "react"
import Card from "./Card"
import Navigation from "./Navigation"

const Home = () => {
    const [cardWidth, setCardWidth] = useState(500)
    const cardsInRow = 5
    const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInRow)
    const [movies, setMovies] =useState([])
    const [page, setPage] = useState(1)
    const [group, setGroup] = useState('Popular')

    useEffect(() => {
        const getMovies = async () => {
            const url = `https://tvshow.p.rapidapi.com/Movie/${group}?Page=${page}&Language=en-US&Adult=true`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'eba2e58da8msh782801184884a31p1f01dfjsn65aa7ffae0a0',
                    'x-rapidapi-host': 'tvshow.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setMovies(result)
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }

        getMovies()
    }, [])
    
  return (
    <>
        <Navigation />
        <div className="flex justify-center items-center" style={{width: wrapperWidth}}>
            <div className="flex flex-wrap">
                {movies.map((movie, i) =>(
                    <div key={i}>
                        <Card movie={movie} cardWidth={cardWidth} />
                    </div>
                ))}
                
            </div>
        </div>
    </>
    
  )
}

export default Home