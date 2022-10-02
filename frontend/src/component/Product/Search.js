import React, { Fragment, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import './Search.css'

const Search = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);
        } else {
            navigate('/products');
        }
    }
    return (
        <Fragment>
            <form className="search_box" onSubmit={searchSubmitHandler}>
                <input type="text"
                    placeholder="Search a Product..."
                    onChange={(e) => setKeyword(e.target.value)} className="search_txt" />
                <button type="submit" className="search_btn"><FaSearch /></button>
            </form>
        </Fragment>
    )
}

export default Search