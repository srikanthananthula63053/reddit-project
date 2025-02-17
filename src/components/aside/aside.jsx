import { useState } from "react";
import { AskReddit } from "../accounts/AskReddit/AskReddit";
import { NoStupidQuestion } from "../accounts/nostupidQuestion/noStupidQuestion";
import { Baldurs } from "../accounts/baldurs/baldurs";
import { Faceplam } from "../accounts/faceplam/faceplam";
import { Intresting } from "../accounts/insteresting/insteresting";
import { DamnThatsIntresting } from "../accounts/damnthatsinteresting/damnthatsinteresting";
import { LiveStreamFail } from "../accounts/LiveStreamFail/liveStreamFail";
import { Pics } from "../accounts/pics/pics";
import { Home } from "../accounts/home/home";

import './styles.css';


export default function Aside() {
    const [activeSubreddit, setActiveSubreddit] = useState(null);
   


    const handleClick = (subreddit) => {
        setActiveSubreddit(activeSubreddit === subreddit ? null : subreddit);
    };

    


    return (
        <>
            <aside className="asidebar">

                <h2>Subreddit</h2>
                
                <div className="button-list">

                    <button onClick={() => handleClick("Home")}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9EzKnJiLunrAsbZI4eW573FBGd9RGqz53A&s" />
                        Home</button>
                    <button onClick={() => handleClick("AskReddit")}>
                        <img src="https://cdn-icons-png.freepik.com/256/14781/14781837.png" alt="AskReddit Icon" />
                        AskReddit
                    </button>
                    <button onClick={() => handleClick("NoStupidQuestion")}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5726/5726395.png" alt="NoStupidQuestion Icon" />
                        NoStupidQuestion
                    </button>
                    <button onClick={() => handleClick("Baldurs")}>
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39864f6d-f4d2-4a56-adc2-da80c2274026/dh0x10v-584b77f6-629b-49fe-93f8-86889f0df68f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5ODY0ZjZkLWY0ZDItNGE1Ni1hZGMyLWRhODBjMjI3NDAyNlwvZGgweDEwdi01ODRiNzdmNi02MjliLTQ5ZmUtOTNmOC04Njg4OWYwZGY2OGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Vkdf0jGz9iSXi7XSXpCkcLyj_e8e6AWzkoK1qkK2sLk" />
                        BaldursGates
                    </button>
                    <button onClick={() => handleClick("Faceplam")}>
                        <img src="https://icon-library.com/images/facepalm-icon/facepalm-icon-26.jpg" alt="Faceplam Icon" />
                        Faceplam
                    </button>
                    <button onClick={() => handleClick("Interesting")}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-RuTYvzfysC-yUSgXfKAgxFlwq6aT_-XHg&s" />
                        Interesting</button>
                    <button onClick={() => handleClick(" DamnThatsIntresting")}>
                        <img src="https://b.thumbs.redditmedia.com/b19-jQLBsVc2-EQfPx5WEQkYIL_clR0mhba4-pHT0AA.png" />
                        DamnThatsIntresting
                    </button>
                    <button onClick={() => handleClick("LiveStreamFail")}>
                        <img src="https://i.ytimg.com/vi/ZbfotTUt9J0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB32j1HepN24psOsLICVsJ1jDpTkA" />
                        LiveStreamFail</button>
                    <button onClick={() => handleClick("Pics")}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX48JYpPPow8zQXp34oKHyqRbECSs1dUpOdw&s" />
                        Pics</button>

                </div>
                
            </aside>

            <div className="content">
                {activeSubreddit === "Home" && <Home />}
                {activeSubreddit === "AskReddit" && <AskReddit />}
                {activeSubreddit === "NoStupidQuestion" && <NoStupidQuestion />}
                {activeSubreddit === "Baldurs" && <Baldurs />}
                {activeSubreddit === "Faceplam" && <Faceplam />}
                {activeSubreddit === "Interesting" && <Intresting />}
                {activeSubreddit === " DamnThatsIntresting" && <DamnThatsIntresting />}
                {activeSubreddit === "LiveStreamFail" && <LiveStreamFail />}
                {activeSubreddit === "Pics" && <Pics />}

            </div>
        </>

    );
}
