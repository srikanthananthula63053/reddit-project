


import { AskReddit } from "./AskReddit/AskReddit";
import { Baldurs } from "./baldurs/baldurs";
import { DamnThatsIntresting } from "./damnthatsinteresting/damnthatsinteresting";
import { Faceplam } from './faceplam/faceplam';
import { Home } from "./home/home";
import { Intresting } from "./insteresting/insteresting";
import {LiveStreamFail} from "./LiveStreamFail/liveStreamFail";
import { NoStupidQuestion } from "./nostupidQuestion/noStupidQuestion";
import { Pics } from "./pics/pics";
import "./styless.css";


export function Accounts() {

    return (
        <main>

            <article>
                {/* <AskReddit/> */}
                {/* <Baldurs/> */}
                {/* <Intresting /> */}
                {/* <DamnThatsIntresting/> */}
                {/* <Faceplam/> */}
                {/* <LiveStreamFail /> */}
                {/* <NoStupidQuestion/> */}
                {/* <Pics/> */}
                <Home/>
            </article>
        </main>
    )
}