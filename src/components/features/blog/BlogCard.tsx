import { BlogPost } from '@/lib/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="w-full h-40 bg-gray-100 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform" loading="lazy" />
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs bg-blood-red/10 text-blood-red px-2 py-1 rounded">{post.category}</span>
            <span className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <h3 className="text-base lg:text-lg font-semibold text-blood-red mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-xs text-gray-700 line-clamp-3 mb-2">{post.excerpt}</p>
          <p className="text-xs text-gray-600">By {post.author}</p>
        </div>

        <div className="text-blood-red text-sm font-medium mt-3 cursor-pointer hover:underline">
          Read More →
        </div>
      </div>
    </div>
  );
}
