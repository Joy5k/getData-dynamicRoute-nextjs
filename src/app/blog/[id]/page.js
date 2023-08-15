

import posts from '../../../data/blogData.json';
export default async function SingleBlog({ params }) {
    const id = parseInt(params.id);
    const post = posts.find(data => {
      return data.id === id;
    });
    
    
   
    return (
        <div>
            <section>
                <h1 className="font-bold text-lg">{post.title}</h1>
                <div className="mt-5">{post.content}</div>        
            </section>
        </div>
    );
}
