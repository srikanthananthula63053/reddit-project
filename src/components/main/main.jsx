
import { useState } from "react";
import Aside from "../aside/aside";
import { SearchBar } from "../search-bar/search-bar";

import styles from './styles.css';

export function Main() {

    const[searchQuery,setSearchQuery]=useState("");

    return (
        <div className="main-layout">
           <SearchBar setSearchQuery={setSearchQuery}/>
            
            <div className="content-area">
            
                <Aside searchQuery={searchQuery}/>
                
            </div>
           
        </div>
    )
}