import React,{useState} from 'react';
import { Link } from 'react-router-dom'

const Search = (props) => {
    const [query, setQuery] = useState("");
    let handleChange = (event) => {
        setQuery(event.target.value);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.searchText(query);

        console.log(query);
    }
    return <div>
        <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control rounded-pill me-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
            <Link to="search">  <button className="btn rounded-pill btn-outline-light" type="submit"><i className="fas fa-search"></i></button></Link>
        </form>
    </div>;
};

export default Search;












