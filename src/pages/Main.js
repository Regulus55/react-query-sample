import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Alert, Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import useMovieList from "../hooks/useMovieList";
import {Link} from "react-router-dom";

const Main = () => {
    // const [movies, setMovies] = useState([])
    //
    // const getMovies = async () => {
    //     try {
    //         const config = {
    //             headers: {
    //                 accept: 'application/json',
    //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRkNTI0MTVmNzNjNmY1MjI2ZGM2ZWZjNDE1MzMyMCIsIm5iZiI6MTcyMjg1NTA4Ni4zODU4MzYsInN1YiI6IjY2NWRhNGNkZDZjYzQxYWUxMGNjNzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xUI7XL6sf0f0Jv9qL31CmlT6qVcRodrFs_aEncGCClk'
    //             }
    //         }
    //         const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
    //         const result = await axios.get(url, config)
    //         setMovies(result.data.results)
    //         console.log(result.data.results)
    //     } catch (e) {
    //         console.log(e.message)
    //     }
    // }
    //
    // useEffect(() => {
    //     getMovies()
    // }, [])

    // dfasdfasdfs

    const {isLoading, isSuccess, data, error} = useMovieList()


    return (
        <>
            {isLoading && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            {error && (
                <Alert variant={'danger'}>
                    {error}
                </Alert>
            )}
            <Container>
                <Row>
                    {data?.map((movie) => (
                        <Col className='mt-3'>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}/>
                                <Card.Body>
                                    <Card.Title>{movie.title.slice(0, 20)}</Card.Title>
                                    <Card.Text>
                                        {movie.overview.slice(0, 80)}
                                    </Card.Text>
                                    <Link to={`/${movie.id}`}>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Main;