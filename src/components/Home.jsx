import { useState } from "react"
import Card from "./Card"
const Home = () => {
    const [cardwidth, setCardWidth] = useState(500)
    const cardsInRow = 5
    const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInRow)
  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-wrap">
            <div>
                <Card />
            </div>
        </div>
    </div>
  )
}

export default Home