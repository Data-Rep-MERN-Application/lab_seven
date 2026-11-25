import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const MovieItem = (props) => {
    const DeleteMovie = (e)=>{
        e.preventDefault();
        console.log("Delete movie")

        axios.delete('http://localhost:4000/api/movie/'+props.mymovie._id)
        .then(()=>{
            console.log("Movie Deleted")
            props.Reload();
        })
        .catch(()=>{console.log("Movie not deleted")})

    }
    return (
        <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>{props.mymovie.title}</Card.Title>
                    <img src={props.mymovie.poster} />
                </Card.Body>
                <Card.Footer className="text-muted">{props.mymovie.year}</Card.Footer>
            <Button variant="danger" onClick={DeleteMovie}>Delete</Button>
            </Card>
        </div>
    );
}
export default MovieItem;