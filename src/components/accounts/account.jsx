


import { AskReddit } from "./AskReddit/AskReddit";
import { Baldurs } from "./baldurs/baldurs";
import { DamnThatsInteresting } from "./damnthatsinteresting/damnthatsinteresting";
import { FacePlam } from "./faceplam/faceplam";
import { Home } from "./home/home";
import { Insteresting } from "./insteresting/insteresting";
import { LiveStreamFail } from "./LiveStreamFail/liveStreamFail";
import { NoStupidQuestion } from "./nostupidQuestion/noStupidQuestion";
import { Pics } from "./pics/pics";
import "./styless.css";


export function Accounts() {

    return (
        <main>
           
           <article>
           {/* <Insteresting/> */}
           {/* <DamnThatsInteresting/> */}
           {/* <LiveStreamFail/> */}
           {/* <Pics/> */}
           <Home/>
           </article>
        </main>
    )
}