const movies = [
    {
        "id": 1,
        "title": "Lady Bird",
        "posterURL": "https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "imdbId": "tt4925292"
      },
      {
        "id": 5,
        "title": "Coco",
        "posterURL": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
        "imdbId": "tt2380307"
      },
      {
        "id": 4,
        "title": "Eighth Grade",
        "posterURL": "https://m.media-amazon.com/images/M/MV5BMzVlYzgxYjAtYzhhZi00MDc1LTlkZDMtMTRhZWI0MTg5YTRjXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg",
        "imdbId": "tt7014006"
      }
]

export default function MovieScroll({genre, number}) {
    
    return(
        <section className="text-zinc-400">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="capitalize font-medium title-font mb-4 text-zinc-50 text-lg">
                    {genre}
                </h2>
                <div className="flex flex-wrap -m-4">
                    {movies.map(movie => (
                        <div key={movie.id} className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={movie.posterURL} />
                                <div className="px-8 py-10 relative z-10 w-full border-zinc-400 bg-zinc-900 opacity-0 hover:opacity-100">
                                    <h4 className="tracking-widest text-sm title-font font-medium text-orange-400 mb-1">{genre}</h4>
                                    <h3 className="tracking-widest text-sm title-font font-medium text-zinc-50 mb-1">{movie.title}</h3>
                                    <a href={"https://www.imdb.com/title/" + movie.imdbId}>Learn More </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}