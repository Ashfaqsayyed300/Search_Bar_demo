import React, { useState } from 'react'
import classes from "./Navbar.module.css"
const Navbar = ({filtered}) => {
    const [searchTerm, setSearchTerm] =useState('');

    const handleOnSubmit= async(e)=>{
        
        e.preventDefault();
        if(searchTerm.length > 0){
        const sortMovie=await fetch("https://api.themoviedb.org/3/search/movie?&api_key=91d8dec71c20a0a8c5af1b548657d906&query=" + searchTerm);
        const responseData=await sortMovie.json();
        filtered(responseData.results)
        }else{
            const sortMovie=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=91d8dec71c20a0a8c5af1b548657d906&language=en-US&page=1");
            const responseData=await sortMovie.json();
            filtered(responseData.results)
        }
        // console.log(responseData.results);
        setSearchTerm("")
    }
    const handleOnChange=(e)=>{
        setSearchTerm(e.target.value)
    }


  return (
    <div>
        <nav className={classes.Navbar}>
            <div className={classes.Logo}>
                <a href='/'><h2>FunMovie</h2></a>
            </div>
            <form onSubmit={handleOnSubmit} className={classes.search}>
                <input
                    type='search'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={handleOnChange}
                />
            </form>
        </nav>
    </div>
  )
}

export default Navbar