import { useState } from "react";
import data from "./data.json";
import { FaArrowDown,FaArrowUp ,FaComment} from "react-icons/fa";
import "./liveStreamFail.css";


export function LiveStreamFail(){
    const [liveStreamFail,setLiveStream]=useState(data);
    const computeHoursAgo = (created_utc) => {
        const postTimestamp = created_utc * 1000; // Convert to millisecond
        const currentTimestamp = Date.now();
        return Math.floor((currentTimestamp - postTimestamp) / (1000 * 60 * 60));
    };

    return(
        <div>
            {
                liveStreamFail.data.children.map((child,index)=>(
                    <div key={child.data.id || index} className="card">
                                                <div className="post-warpper">
                                                    <div className="post-votes-container">
                                                        <button className="up-icons-button" type="button"><FaArrowUp /></button>
                                                        <p className="post-votes-count">{child.data.score}</p>
                                                        <button type="button" className="down-icons-button">
                                                            <FaArrowDown />
                                                        </button>
                                                    </div>
                                                    <div className="post-container">
                                                        <h3 className="post-title">
                                                            {child.data.title || "No title available"}
                                                        </h3>
                                                        <div className="post-image-container">
                                                        </div>
                                                        <div className="post-details">
                                                            <span className="author-details">
                                                                <img
                                                                    src={child.data.url}
                                                                    alt="User avatar"
                                                                    className="avatar-profile-image"
                                                                />
                                                                <span className="author-username">{child.data.author}</span>
                                                            </span>
                                                            <span className="post-time">
                                                                {
                                                                    child.data.created_utc
                                                                        ? `${computeHoursAgo(child.data.created_utc)} hours ago`
                                                                        : "Loading..."
                                                                }
                    
                                                            </span>
                                                            <span className="post-comments-container">
                                                                <button type="button" className="comment-icon">
                                                                    <FaComment className="icon" />
                                                                    {child.data.num_comments}
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                    
                                            </div>
                ))
            }
        </div>
    )
}