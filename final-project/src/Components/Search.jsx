import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/product?search=${searchTerm}`);
      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
