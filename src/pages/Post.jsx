import Navigation from "../components/Navigation";
import './Post.css';
import { useLocation } from "react-router-dom";
import ContactButtons from "../components/ContactButtons";

function Post() {
  const location = useLocation();
  const { post, recentPosts } = location.state || {};

  return (
    <>
      <ContactButtons />
        <main className="post">
            <header className="post-header">
              <Navigation />
              <div className="heading">
                <hr style={{background: 'rgba(255, 255, 255, 1)'}}/>
                <h1 style={{color: 'rgba(0, 0, 0, 1)', background: 'rgba(255, 255, 255, 1)'}}> {post?.title} </h1>
                <hr style={{background: 'rgba(255, 255, 255, 1)'}}/>
              </div>
            </header>
            <div className="post-content">
              <div className="main-post">
                <img src={post?.image} alt="Post" />
                <article>
                  <div dangerouslySetInnerHTML={{ __html: post?.content }} />
                  <h3 className="post-author">Author: {post?.author}</h3>
                  <h3 className="post-date">Posted on: <time dateTime={post?.created_at}>{post?.created_at.substring(0, 10)}</time></h3>
                </article>
              </div>
              <div className="post-sidebar">
                <h2>Recent Posts</h2>
                <ul className="recent-posts">
                  {recentPosts.map((recentPost) => (
                    <li key={recentPost.id}>
                      <img src={recentPost.image} alt={recentPost.title} />
                      <p>{recentPost.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </main>
    </>
  );
}

export default Post;
