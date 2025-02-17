import { Accounts } from "../accounts/account";
import Aside from "../aside/aside";
import { SearchBar } from "../search-bar/search-bar";

import styles from './styles.css';

export function Main() {
    return (
        <div className="main-layout">
            <SearchBar />
            
            <div className="content-area">
                <Aside />
                {/* <Accounts /> */}
            </div>
           
        </div>
    )
}