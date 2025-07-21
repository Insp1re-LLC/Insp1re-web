type NewsletterPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  imageUrl?: string;
};

export default function NewsletterCard({ post }: { post: NewsletterPost }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener"
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition p-6"
    >
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <time className="text-xs text-text/70">
        {new Date(post.pubDate!).toLocaleDateString()}
      </time>
      <h3 className="mt-2 text-xl font-heading text-brand">{post.title}</h3>
      <p className="mt-2 text-base text-text">{post.contentSnippet}</p>
      <span className="mt-4 inline-block text-accent-gold font-semibold">
        Read more →
      </span>
    </a>
  );
}
