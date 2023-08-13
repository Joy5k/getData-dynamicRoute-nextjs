import Link from 'next/link';
import './style.css'
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <Link href="/blog">
        Go to Blog
      </Link>
    </div>
  );
};

export default HomePage;
