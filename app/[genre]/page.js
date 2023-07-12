export default function Page({params: {genre}}){
    return (
        <main className="p-8">
        <h1 className='capitalize text-2xl font-semibold text-orange-400'>
            {genre} Movies
        </h1>
        </main>
    )

}