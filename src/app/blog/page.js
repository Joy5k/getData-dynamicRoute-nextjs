// import getAllPosts from "@/lib/getAllPost";
import Link from "next/link";
import posts from '../../data/blogData.json'
import './style.css'
export default async function Blog() {
    // const posts = await getAllPosts();

    return (
        <div>
            <section className="blog-section">
                <h1 className="">Blog Posts</h1>

                <div className="blog-list">
                    {posts.map((post) => {
                        return (
                            <p className="post-item" key={post.id}>
                                <Link className="link" href={`/blog/${post.id}`}>
                                     -- {post.title}
                                </Link>
                            </p>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}