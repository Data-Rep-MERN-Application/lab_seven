import MovieItem from './movieItem';
const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie={movie} Reload={props.Reload} key={movie._id}></MovieItem>
        }
    );
}
export default Movies;