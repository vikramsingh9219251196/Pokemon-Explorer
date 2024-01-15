import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  width: 640px;
  left:5rem;
  top:2rem;
  
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
  @media (max-width: 1200px) {
    position:relative;
    right:3rem;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  &:focus {
    width: 400px;
  }
`;

const SearchBar = ({ onSearch, onFilter }) => {
    return (
        <div className="search-bar" >
            <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search by name..."
              onChange={(e) => onSearch(e.target.value)}/>
          
            </SearchContainer>
               
        
            <select className='selecttype' onChange={(e) => onFilter(e.target.value)} style={{position:"relative",top:"4rem",marginLeft:"5rem"}}>
                <option value="">All Types</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">grass</option>
                <option value="flying">flying</option>
                <option value="electric">electric</option>
                <option value="bug">bug</option>
                <option value="ice">ice</option>
                <option value="fighting">fighting</option>
                <option value="dragon">dragon</option>
                <option value="poison">poison</option>

            </select>
        </div>
    );
};

export default SearchBar;
