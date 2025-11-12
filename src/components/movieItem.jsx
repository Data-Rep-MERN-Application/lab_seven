import Card from 'react-bootstrap/Card';
const MovieItem = (props) => {
    return (
        <div>
            <Card className="text-center">

            
            
                <Card.Body>
                    <Card.Title>{props.mymovie.title}</Card.Title>
                    <img src={props.mymovie.poster} />
                </Card.Body>
                <Card.Footer className="text-muted">{props.mymovie.year}</Card.Footer>
            </Card>
        </div>
    );
}
export default MovieItem;