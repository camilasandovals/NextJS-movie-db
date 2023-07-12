import MovieScroll from "../shared/MovieScroll"

export function generateStaticParams() {

    return [ 
        { genre: 'comedy'},
        { genre: 'drama'},
        { genre: 'horror'},
    ]

}

export function generateMetadata({params: {genre}}) {
    return {
        title: `${genre} Movies | My Movie Database`,
        description: `Here are some of my favorite ${genre} movies.`,
        }
}

export default function Page({params: {genre}}){

    return (
        <main className="p-8">
        <h1 className='capitalize text-2xl font-semibold text-orange-400'>
            {genre} Movies
        </h1>
        <MovieScroll genre={genre} number={12} />
        </main>
    )

}