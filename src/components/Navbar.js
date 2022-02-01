import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = (props) => {
    const [input, setInput] = useState("");
    
      let {setQuery} = props;
    //  console.log(searchQuery);
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     props.setQuery(query);

    //     console.log(query);
    // }   
    let handleChange = (event) => {
        setInput(event.target.value);
    } 
    const handleSubmit = (event) => {
        setQuery(input);
        event.preventDefault();
    }


    return <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark py-2">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">Daily-Bugle <i className="fas fa-newspaper mx-1"></i></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="entertainment">Entertainment</Link>
                        </li><li className="nav-item">
                            <Link className="nav-link" to="general">General</Link>
                        </li><li className="nav-item">
                            <Link className="nav-link" to="health">Health</Link>
                        </li><li className="nav-item">
                            <Link className="nav-link" to="science">Science</Link>
                        </li><li className="nav-item">
                            <Link className="nav-link" to="sports">Sports</Link>
                        </li><li className="nav-item">
                            <Link className="nav-link" to="technology">Technology</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
            <input disabled className="form-control rounded-pill me-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
            <Link to="search"><button className="btn rounded-pill btn-outline-light" type='submit' onSubmit={handleSubmit}><i className="fas fa-search"></i></button></Link>
        </form>
                  
                </div>
            </div>
        </nav>
    </div>;
};

export default Navbar;



