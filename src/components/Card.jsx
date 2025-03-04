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
            <span className="flex gap-x-2">Original Language: 
                <span className="mr-2 uppercase">EN</span>
            </span>
            <span className="flex gap-x-2">Release Date: 
                <span className="mr-2 text-secondary">1972-03-04</span>
            </span>
            <p className="flex flex-col gap-y-1">
                <span className="text-primary">Summary:</span>
                <span className="first-letter:pl-2">Summary text</span>
            </p>
        </div>
        <img className="object-cover rounded-xl opacity-50 group-hover:opacity-100 
        transition-opacity duration-500" src="/godfather.jpg" alt="Movie Image" />
    </div>
  )
}

export default Card