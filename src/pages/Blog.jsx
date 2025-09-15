import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import './Blog.css';
import { FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../Database/SupabaseClient";
import ReactPaginate from "react-paginate";
import Loading from "../components/Loading";
import ContactButtons from "../components/ContactButtons";

function Blog() {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const postsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
      if (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      } else {
        console.log("Fetched posts:", data);
        setBlogPosts(data);
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  const handleReadMore = (blogPost) => {
    navigate("/post", { state: { post: blogPost, recentPosts: blogPosts.slice(0, 4) } });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ContactButtons />
      <header className="blog-header">
        <Navigation />
        <div className="heading">
          <hr style={{background: 'rgb(255, 255, 255)'}} />
          <h1 style={{background: 'rgb(255, 255, 255)', color: 'rgb(25, 25, 25)'}}>Blog Posts</h1>
          <hr style={{background: 'rgb(255, 255, 255)'}} />
        </div>
      </header>
      <main className="blog">
        {blogPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage).map((post) => (
          <article className="blog-post" key={post.id}>
            <img className="blog-image" src={post.image} alt="Blog Post" />
            <strong className="blog-title">{post.title}</strong>
            <p className="blog-date">Posted on: <time dateTime={post.created_at}>{post.created_at.substring(0, 10)}</time></p>
            <p className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }}></p>
            <button className="read-more" onClick={() => handleReadMore(post)}><p>Read More</p><FaArrowRight size={18} /></button>
          </article>
        ))}
      </main>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(blogPosts.length / postsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => setCurrentPage(selected)}
        containerClassName={"pagination"}
        activeClassName={"active"}  
      />
      <Footer />
    </>
  );
}

export default Blog;