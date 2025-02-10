import { Accounts } from "../accounts/account";
import { SearchBar } from "../search-bar/search-bar";

export function Main(){
    return(
        <div>
            <SearchBar/>
            <Accounts/>
        </div>
    )
}