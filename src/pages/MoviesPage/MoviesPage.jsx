import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, BtnForm } from "./MoviesPage.styled";
import { getMoviesByQuery } from "../../services/ApiService";
import  SearchList  from "../../components/SearchList/SearchList";


function MoviesPage() {
    const [movies, setMovies] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    

    useEffect(() => {
    if (query) {
        getMoviesByQuery(query).then((data) => {
            return setMovies(data.results)
        })
    }
  }, [query]);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setSearchParams({ query: ev.currentTarget.elements.query.value });
        ev.currentTarget.reset();
}


    return (
        <>
        <Form onSubmit={handleSubmit} autoComplete="off">
            <label>
                <Input type="text" name="query" placeholder='Search film'/>
            </label>
            <BtnForm type="submit">Search</BtnForm>
            </Form>
            {movies && <SearchList movies={movies}/>}
        </>
    )
};

export default MoviesPage;