import { Component, useState } from "react";
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


export default function Aside({ searchQuery }) {
    const [activeSubreddit, setActiveSubreddit] = useState("Home");



    const handleClick = (subreddit) => {
        setActiveSubreddit(subreddit);
    };

    const subreddit = [
        { name: "Home", component: <Home />, icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9EzKnJiLunrAsbZI4eW573FBGd9RGqz53A&s" },
        { name: "AskReddit", component: <AskReddit />, icon: "https://cdn-icons-png.freepik.com/256/14781/14781837.png" },
        { name: "NoStupidQuestion", component: <NoStupidQuestion />, icon: "https://cdn-icons-png.flaticon.com/512/5726/5726395.png" },
        { name: "Baldurs", component: <Baldurs />, icon: "https://icon-library.com/images/facepalm-icon/facepalm-icon-26.jpg" },
        { name: "Faceplam", component: <Faceplam />, icon: "https://icon-library.com/images/facepalm-icon/facepalm-icon-26.jpg" },
        { name: "Interesting", component: <Intresting />, icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-RuTYvzfysC-yUSgXfKAgxFlwq6aT_-XHg&s" },
        { name: " DamnThatsIntresting", component: <DamnThatsIntresting />, icon: "https://b.thumbs.redditmedia.com/b19-jQLBsVc2-EQfPx5WEQkYIL_clR0mhba4-pHT0AA.png" },
        { name: "LiveStreamFail", component: <LiveStreamFail />, icon: "https://i.ytimg.com/vi/ZbfotTUt9J0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB32j1HepN24psOsLICVsJ1jDpTkA" },
        { name: "Pics", component: <Pics />, icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX48JYpPPow8zQXp34oKHyqRbECSs1dUpOdw&s" }


    ];

    const filterSubreddit = subreddit.filter(subreddit =>
        subreddit.name.toLowerCase().includes(searchQuery.toLowerCase())
    )


    return (
        <div className="main-container">
            <div className="content">
                {subreddit.find(sub => sub.name === activeSubreddit)?.component}
            </div>
            <aside className="asidebar">

                <h2>Subreddit</h2>

                <div className="button-list">

                    {
                        filterSubreddit.map(({ name, icon }) => (
                            <button key={name} onClick={() => setActiveSubreddit(name)} className="ho">
                                <img src={icon} alt={`${name} Icon`} />
                                {name}
                            </button>
                        ))
                    }
                </div>

            </aside>


        </div>
    );
}
