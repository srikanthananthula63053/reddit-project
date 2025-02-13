import { useState } from 'react';
import './search.css';

export function SearchBar(){
    const[search,setSearch]=useState("")

    return(
        <header>
            <div className='bar'>
            <div className="logo">
                <img className="pics" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNvM-pnwD4yHhI-H5wYskjQgZ_K1YgPDsPA&s"/>
                <p>Reddit<span>Minimal</span></p>
            </div>
            <form>
                <input
                 placeholder="search"
                  type="text"
                  value={search}
                  onChange={(event)=>setSearch(event.target.value)}
                  />
                <button type="submit" className='bts'>search</button>
            </form>
            </div>
        </header>
    )
}