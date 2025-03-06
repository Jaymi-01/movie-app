import { useEffect, useState, useRef } from "react"
import Card from "./Card"
import Navigation from "./Navigation"
import {useMotionValue, useTransform, motion, useSpring} from 'framer-motion'

const Home = () => {
    const [cardWidth, setCardWidth] = useState(500)
    const cardsInRow = 5
    const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInRow)
    const [movies, setMovies] =useState([])
    const [page, setPage] = useState(1)
    const [group, setGroup] = useState('Popular')
    const [mousePos, setMousePos] = useState({left: 0, top: 0, width: 0, height: 0,})
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const cardsRef = useRef(null)

    const getMousePositions = (e, referenceElement) => {
        const positions = {
            x: e.clientX,
            y: e.clientY,
        }
        const offset = {
            left: positions.x,
            top: positions.y,
            width: referenceElement.clientWidth,
            height: referenceElement.clientHeight,
        }

        setMousePos(offset)
    }

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    x.set(mousePos.left)
    y.set(mousePos.top)

    const xSpring = useSpring(x, {stiffness: 10, damping: 10})
    const ySpring = useSpring(y, {stiffness: 10, damping: 10})

    const translateX = useTransform(xSpring, [0, windowWidth], [0, -mousePos.width + windowWidth])
    const translateY = useTransform(ySpring, [0, windowHeight], [0, -mousePos.height + windowHeight])

    const apiKey = import.meta.env.VITE_API_KEY
    const baseUrl = import.meta.env.VITE_BASE_URL

    useEffect(() => {
        const getMovies = async () => {
            const url = `${baseUrl}/${group}?Page=${page}&Language=en-US&Adult=true`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apiKey,
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
    }, [page, group])

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    })
    
  return (
    <>
        <Navigation page={page} setPage={setPage} setGroup={setGroup} />
        <motion.div className="flex justify-center items-center fixed top-0 left-0 overflow-hidden" style={{width: wrapperWidth, translateX, translateY}} 
        ref={cardsRef} 
        onMouseMove={(e) => getMousePositions(e, cardsRef.current)}>
            <div className="flex flex-wrap">
                {movies.map((movie, i) =>(
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: i * 0.05}}
                    key={i}>
                        <Card movie={movie} cardWidth={cardWidth} />
                    </motion.div>
                ))}
                
            </div>
        </motion.div>
    </>
    
  )
}

export default Home