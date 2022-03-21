import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import DisplayInfo from './DisplayInfo';

function IdSearchBar(props) {

    const [Input, setInput] = useState("");
    const [SearchResults, setSearchResults] = useState({});
    function handleClick(event) {

        axios.post('http://localhost:3001/checkValidity', { Input }).then((response) => {


            setSearchResults(response.data)
            console.log(response.data)
            console.log(SearchResults)
        }).catch(err => {
            console.log(err)
            console.log('an error had occured')
        })
    }




    return (
        <div>
            <div className="App-header">
                <h2>
                    Enter your National ID Number
                </h2>
                <div>
                    <input
                        type="text"
                        placeholder="Enter Your National ID"
                        className="searchBar"
                        onChange={(e) => {
                            setInput(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                </div>
                {console.log(SearchResults)}
                <button className="checkButton" type="submit" onClick={handleClick}>Search</button>

                {Object.entries(SearchResults).length === 0 ? <h1></h1> : <DisplayInfo BirthCentury={SearchResults.birthCentury} Gov={SearchResults.gov} Gender={SearchResults.gender} Valid={SearchResults.valid + ""} BirthDate={SearchResults.birthDate} ></DisplayInfo>}
            </div>



            <div>

            </div>

        </div >

    );
}

export default IdSearchBar;