import { useEffect, useState } from "react"
import Card from "./Card"

const Home = () => {
    const [cardWidth, setCardWidth] = useState(500)
    const cardsInRow = 5
    const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInRow)
    const [movies, setMovies] =useState([])

    useEffect(() => {
        const getMovies = async () => {
            const url = 'https://tvshow.p.rapidapi.com/Serie/Popular?Page=1&Language=en-US';
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
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }

        getMovies()
    }, [])
    
  return (
    <div className="flex justify-center items-center" style={{width: wrapperWidth}}>
        <div className="flex flex-wrap">
            <div>
                <Card cardWidth={cardWidth} />
            </div>
        </div>
    </div>
  )
}

export default Home