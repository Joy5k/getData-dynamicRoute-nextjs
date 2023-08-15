// import getAllPosts from "@/lib/getAllPost";
import Link from "next/link";
import posts from '../../data/blogData.json'
export default async function Blog() {
    // const posts = await getAllPosts();

    return (
        <div>
            <section>
                <h1 className="font-bold text-lg">Blog Posts</h1>

                <div className="mt-5">
                    {posts.map((post) => {
                        return (
                            <p className="pb-5" key={post.id}>
                                <Link href={`/blog/${post.id}`}>
                                    {post.id} - {post.title}
                                </Link>
                            </p>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}