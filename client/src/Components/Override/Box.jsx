import './Box.css';
import SearchBar from './SearchField';



function Box() {
    function handleSearch(query){
    
    }
    return (
        <div className='LiveBox'>
            <searchBar onSearch={handleSearch} />
            <div className='rectangle'>
                <p style={{padding: 5}}>Override Access</p>
                <div className='rectangle2'>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
      </div>
    )
}

export default Box