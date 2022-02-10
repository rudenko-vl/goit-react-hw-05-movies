
import { Form } from "./MoviesPage.styled";
function MoviesPage() {
    return (
        <>
        <Form autoComplete="off">
            <label>
                <input type="text"/>
            </label>
            <button type="submit">Search</button>
        </Form>
        </>
    )
};

export default MoviesPage;