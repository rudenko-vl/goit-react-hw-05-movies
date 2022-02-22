import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Form, Input, BtnForm } from "./MoviesPage.styled";
import { getMoviesByQuery } from "../../services/ApiService";
import SearchList from "../../components/SearchList/SearchList";
import Loading from "../../components/Loading/Loading";

function MoviesPage() {
    const [movies, setMovies] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [loading, setLoading] = useState(false);
    const notifyError = () => toast.error('😕 Nothing found. Change request!', {
        duration: 3000,
        style: {
            fontWeight: 700,
            backgroundColor: "yellow",
            color: "black",
            width: "330px",
            height: "60px",}
    });
    
    useEffect(() => {
        if (query) {
            setLoading(true);
            getMoviesByQuery(query.trim()).then((data) => {
                setLoading(false);
                if (data.results.length === 0) {
                    notifyError()
                } else {
                toast.loading(`Search in progress ${query}`, {
                    duration: 2000,
                    style: {
                         backgroundColor: "green",
                         fontWeight: 700,
                         color: "white",
                         width: "250px",
                         height: "60px",}})
                };
            
            return setMovies(data.results)
        })
    }
  }, [query]);

    const handleSubmit = (ev) => {
        const inputValue = ev.currentTarget.elements.query.value;
        ev.preventDefault();
        if (inputValue.trim() === '') {
            toast.error('⬇ Enter text!', {
                    duration: 2000,
                        style: {
                            fontWeight: 700,
                            backgroundColor: "yellow",
                            color: "green",
                            width: "170px",
                            height: "60px",}})
            return
        }
        setSearchParams({ query: inputValue });
        ev.currentTarget.reset();
}


    return (
        <>
            <Toaster />
        <Form onSubmit={handleSubmit} autoComplete="off">
            <label>
                <Input type="text" name="query" placeholder='Search film'/>
            </label>
            <BtnForm type="submit">Search</BtnForm>
            </Form>
            {movies && <SearchList movies={movies} />}
            {loading && <Loading/>}
        </>
    )
};

export default MoviesPage;