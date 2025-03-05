const Card = ({cardWidth, movie}) => {
    const {title, genres, originalLanguage, releaseDate, overview, image} = movie
  return (
    <div style={{width: cardWidth}} className="h-[650px] relative flex justify-center 
    items-center shrink-0 p-2 bg-gray-600 group">
        <div className="w-[97%] h-[97%] m-auto text-white 
        absolute rounded-lg bg-black/50 flex flex-col justify-center 
        gap-y-2 p-10 cursor-pointer">
            <h1 className="text-4xl">{title}</h1>
            <div className="flex gap-x-2 items-center">
                <span className="text-lg">Genres:</span>
                {genres.map((genre, i) =>{
                    <span key={i} className="font-semibold text-primary">
                        {genre}
                    </span>
                })}
                
            </div>
            <span className="flex gap-x-2">Original Language: 
                <span className="mr-2 uppercase">{originalLanguage}</span>
            </span>
            <span className="flex gap-x-2">Release Date: 
                <span className="mr-2 text-secondary">{releaseDate}</span>
            </span>
            <p className="flex flex-col gap-y-1">
                <span className="text-primary">Summary:</span>
                <span className="first-letter:pl-2">{overview}</span>
            </p>
        </div>
        <img className="absolute w-[97%] h-[97%] object-cover rounded-xl opacity-50 group-hover:opacity-100 
        transition-opacity duration-500" src={image} alt="Movie Image" />
    </div>
  )
}

export default Card