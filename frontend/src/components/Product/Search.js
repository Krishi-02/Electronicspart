import React, {Fragment, useState }from 'react'; 
import MetaData from '../MetaData.js';
import './Search.css'; 
import Header from '../Header/Header'; 

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault(); 
        if(keyword.trim()){
            history.push(`/products/${keyword}`);
        }
        else{
            history.push("/products"); 
        }
    }; 

  return (
    <Fragment>
        <Header />
        <MetaData title="Search A Product"/>
        <form className='searchBox' onSubmit={searchSubmitHandler}>
            <input 
            type="text" 
             placeholder='Search a Product... '
             onChange={(e) => setKeyword(e.target.value)}
             />
            <input type="submit" value="Search"/>
        </form>
    </Fragment>
  );
};

export default Search 