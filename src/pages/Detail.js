import React from 'react';
import {Alert, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import useMovieDetail from "../hooks/useMovieDetail";
import {useParams} from "react-router-dom";

const Detail = () => {
    const {movieId} = useParams();

    const {isLoading, isSuccess, data, error} = useMovieDetail(movieId)

    console.log('+_+_+_+_+_+_+', data)
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

            {isSuccess && data && (
                <Container>
                    <Row>
                        <Col/>
                        <Col className='mt-5'>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + data.poster_path}/>
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        {data.overview}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
            )}


        </>
    );
};

export default Detail;