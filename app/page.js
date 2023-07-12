import Hero from "./shared/Hero";
import MovieScroll from "./shared/MovieScroll";


export default function Home() {
  return (
    <main>
      <Hero />
      <MovieScroll genre="Comedy" number={3} />
      <MovieScroll genre="Drama" number={3} />
      <MovieScroll genre="Horror" number={3} />
    </main>
  )
}
