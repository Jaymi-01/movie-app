const Card = () => {
  return (
    <div className="h-[650px] relative flex justify-center 
    items-center shrink-0 p-2 bg-gray-600 group">
        <div className="w-[97%] h-[97%] m-auto text-white 
        absolute rounded-lg bg-black/50 flex flex-col justify-center 
        gap-y-2 p-10 cursor-pointer">
            <h1 className="text-4xl">The Godfather</h1>
            <div className="flex gap-x-2 items-center">
                <span className="text-lg">Genres:</span>
                <span className="font-semibold text-primary">Crime Drama</span>
            </div>
            <span>Original Language: <span>EN</span></span>
            <span>Release Date: <span>1972-03-04</span></span>
            <p><span>Summary:</span>
                <span>Summary text</span>
            </p>
        </div>
        <img className="h-[600px]" src="/godfather.jpg" alt="Movie Image" />
    </div>
  )
}

export default Card