import Link from 'next/link';
import './style.css'
const HomePage = () => {
  return (
    <div className="header-content content">
      <h1>Welcome to My Blog</h1>
        <div class="blog-list">
      <div class="blog-post">
        <p class="post-excerpt">This is a short excerpt of the first blog post. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto hic exercitationem praesentium sequi facere velit illo tempora ipsa, vitae dolor consectetur quasi ea. Eaque, dolore! Alias nemo qui, quae odit, debitis mollitia possimus enim delectus iste cupiditate sit. Eos magnam saepe, inventore itaque modi expedita quod ex quis! Voluptatum esse illum ex sit consequuntur autem earum dolorum consectetur sequi ea aliquid a, soluta debitis sunt dolore adipisci minus voluptas praesentium qui animi unde? Repellendus exercitationem incidunt vel iusto culpa quaerat obcaecati maiores iste laboriosam non, sunt aliquid nostrum reprehenderit quas neque atque illum, nemo tempore repellat officia accusantium doloremque amet. </p>
        <Link className="button" href="/blog">
        Go to Blog
      </Link>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
