
import './search.css';
import { useState } from 'react';
export function SearchBar({setSearchQuery}){
    const [inputValue, setInputValue] = useState("")  

    return(
        <header>
            <div className='bar'>
            <div className="logo">
                <img className="pics" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNvM-pnwD4yHhI-H5wYskjQgZ_K1YgPDsPA&s"/>
                <p>Reddit<span>Minimal</span></p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                 placeholder="search here"
                  type="text"
                  value={inputValue}
                  onChange={(event)=>setInputValue(event.target.value)}
                  />
                <button type="submit" className='bts' onClick={() => setSearchQuery(inputValue)} >search</button>
            </form>
            </div>
        </header>
    )
}