import { useState } from "react"
import data from "./data.json"
import { useEffect } from "react";

export function Home() {

    const [post, setPost] = useState(data);
    const [hoursAgo, setHoursAgo] = useState(null);

    useEffect(() => {
        if (post?.data?.children[0]?.data?.created_utc) {
            const postTimestamp = post.data.children[0].data.created_utc * 1000; // Convert to milliseconds
            const currentTimestamp = Date.now(); // Get current time in milliseconds
            const hoursDiff = Math.floor((currentTimestamp - postTimestamp) / (1000 * 60 * 60)); // Convert to hours
            setHoursAgo(hoursDiff);
        }
    }, [post]);

    return (
        <div className="post-container">

            <h3 className="post-title">
                {
                    post?.data?.children[0]?.data?.title || "No title available"
                }
            </h3>
            <div className="post-image">
                <img src={post?.data?.children[0]?.data?.url_overridden_by_dest} alt="" className="post-image-pic" />

            </div>
            <div className="post-details">
                <span className="author-details">
                    <img src={post?.data?.children[0]?.data.thumbnail} className="author-avatar" />
                    <span>{post?.data?.children[0]?.data?.author}</span>
                </span>
                <span className="post-time">  {hoursAgo !== null ? `${hoursAgo} hours ago` : "Loading..."}</span>
            </div>
        </div>
    )
}