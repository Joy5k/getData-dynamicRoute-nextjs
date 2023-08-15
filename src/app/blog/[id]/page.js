

import posts from '../../../data/blogData.json';
import './style.css'

export default async function SingleBlog({ params }) {
    const id = parseInt(params.id);
    const post = posts.find(data => {
      return data.id === id;
    });
    
    
   
    return (
        <div>
            <section className="custom-section">
                <h1 className="">{post.title}</h1>
                <div className=" post-content">{post.content}</div>        
                <p className="post-date">Date:{post.date }</p>
            </section>
        </div>
    );
}
