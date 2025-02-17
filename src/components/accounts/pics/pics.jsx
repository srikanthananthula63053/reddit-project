import { useState, useEffect } from "react"

import data from "./data.json"

import { FaComment, FaArrowUp, FaArrowDown } from "react-icons/fa";
import styles from "./styles.css";
import profileData from "./comment.json"
;


export function Pics() {

  const [post, setPost] = useState(data);
  const [profile, setProfile] = useState(null);

  const [comments, setComments] = useState({}); // Store user input per post
  const [openCommentBox, setOpenCommentBox] = useState({});

  console.log(profileData[0]?.data?.children[0]?.data?.author_fullname)

  useEffect(() => {
    setProfile(profileData[0])
  }, [])



  const computeHoursAgo = (created_utc) => {
    const postTimestamp = created_utc * 1000; // Convert to milliseconds
    const currentTimestamp = Date.now();
    return Math.floor((currentTimestamp - postTimestamp) / (1000 * 60 * 60));
  }

  const handleVote = (postId, type) => {

    setPost((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        children: prev.data.children.map((child) =>
          child.data.id === postId
            ? {
              ...child,
              data: {
                ...child.data,
                score: type === "up" ? child.data.score + 1 : child.data.score - 1, // Increment or decrement score
              },
            }
            : child
        )
      }
    }))

  }


  const toggleCommentBox = (postId) => {
    setOpenCommentBox((prev) => ({
      ...prev,
      [postId]: !prev[postId], // Toggle true/false
    }));
  };

  // Handle Comment Input Change
  const handleCommentChange = (postId, value) => {
    setComments((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  // Handle Comment Submission
  const handleCommentSubmit = (postId) => {
    if (!comments[postId]?.trim()) return; // Avoid empty comments

    setPost((prev) => {
      const updatedPosts = {
        ...prev,
        data: {
          ...prev.data,
          children: prev.data.children.map((child) =>
            child.data.id === postId
              ? {
                ...child,
                data: {
                  ...child.data,
                  userComments: [...(child.data.userComments || []), comments[postId]],
                  num_comments: (child.data.num_comments || 0) + 1, // Dynamically update count
                },
              }
              : child
          ),
        },
      };
      return updatedPosts; // React detects the state change
    });

    setComments((prev) => ({
      ...prev,
      [postId]: "",
    }));
  };

  return (
    <div className="card-list">
      {post?.data?.children?.map((child, index) => (
        <div key={child.data.id || index} className="card">
          <div className="post-warpper">
            <div className="post-votes-container">
              <button type="button" className="up-icons-button" onClick={() => handleVote(child.data.id, "up")}>
                <FaArrowUp />
              </button>
              <p className="post-votes-count">{child.data.score}</p>
              <button type="button" className="down-icons-button" onClick={() => handleVote(child.data.id, "up")}>
                <FaArrowDown />
              </button>
            </div>

            <div className="post-container">
              <h3 className="post-title">
                {child.data.title || "No title available"}
              </h3>
              <div className="post-image-container">
                <img
                  src={child.data.url_overridden_by_dest}
                  alt="Post"
                  className="post-image"
                />
              </div>
              <div className="post-details">
                <span className="author-details">
                  <img
                    src={child.data.thumbnail}
                    alt="User avatar"
                    className="avatar-profile-image"
                  />
                  <span className="author-username">{child.data.author}</span>
                </span>
                <span className="post-time">
                  {child.data.created_utc
                    ? `${computeHoursAgo(child.data.created_utc)} hours ago`
                    : "Loading..."}
                </span>
                <span className="post-comments-container">
                  <button type="button" className="comment-icon" onClick={() => toggleCommentBox(child.data.id)}>
                    <FaComment className="icon" /> {child.data.num_comments || 0}
                  </button>
                </span>
              </div>

              {/* Show Comment Box & Comments when the button is clicked */}
              {openCommentBox[child.data.id] && (
                <div className="comment-section">
                  {/* <div className="text"> */}
                  <textarea
                    value={comments[child.data.id] || ""}
                    onChange={(e) => handleCommentChange(child.data.id, e.target.value)}
                    placeholder="comment here.."
                    className="comment-box"
                  />
                  <button type="button" onClick={() => handleCommentSubmit(child.data.id)} className="comment-submit">
                    Submit
                  </button>
                  {/* </div> */}

                  {/* Display Comments */}
                  <div className="comments-list">
                    {child.data.userComments?.map((comment, idx) => (
                      <div key={idx} className="comment-item">
                        <img
                          className="comment-profile"
                          src={profile?.data?.children[0]?.data.url}
                          alt="Profile"
                        />
                        <div className="comment-content">
                          <div className="comment-header">
                            <span className="username">
                              {profile?.data?.children.map((box, index) => (
                                <p key={box.data.id}>{box.data.author}</p>)) || "Loading..."}
                            </span>
                            <span className="time">
                              {child.data.created_utc
                                ? `${computeHoursAgo(child.data.created_utc)} hours ago`
                                : "Loading..."}
                            </span>
                          </div>
                          <p className="comment-text">{comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


      ))}
    </div>
  );
}