import "./styless.css";
export function Accounts() {

    return (
        <main>
            
            <article>
                <div className="card">
                    <div className="warpper">
                        <div className="post">
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12H10V20H14V12H20L12 4Z" fill="black" />
                                </svg>
                            </button>
                            <p>3l.k</p>
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 20L4 12H10V4H14V12H20L12 20Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                        <div className="container">
                            <h3 className="title">"Whenever there is a natural disaster in Australia, the Sikh community comes with free food vans"</h3>
                            <div className="image">
                                <img src="https://www.firstaidpro.com.au/wp-content/uploads/2023/04/Most-Common-Natural-Disasters-In-Australia.jpg" className="post-image" />
                            </div>
                            <div className="details">
                                <span className="author-details">
                                    <img src="https://api.adorable.io/avatars/10/Rd28T" alt="Rd28T profile" className="avatar-image" />
                                    <span class="author-username">Rd28T</span>
                                </span>
                                <span>8 hours ago</span>
                                <span className="post-comments-container">
                                    <button type="button" className="icon-action-button false">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <path
                                                d="M3 3V18H7V22L13 18H21V3H3ZM19 16H12.5L9 18V16H5V5H19V16Z"
                                                fill="black"
                                            />
                                        </svg>
                                        "600"


                                    </button>
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            </article>
        </main>
    )
}