import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface Post {
   userId: number;
   id: number;
   title: string;
   body: string;
}

const PostsPage = () => {
   const [posts, setPosts] = useState<Post[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchPosts = async () => {
         try {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
               throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            // Get first 12 posts
            setPosts(data.slice(0, 12));
         } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
         } finally {
            setLoading(false);
         }
      };

      fetchPosts();
   }, []);

   return (
      <>
         <Header />
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Posts Page</h1>
            
            {loading && (
               <div className="flex justify-center items-center py-12">
                  <div className="text-xl text-gray-600 dark:text-gray-300">Loading posts...</div>
               </div>
            )}

            {error && (
               <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded relative mb-4">
                  <strong className="font-bold">Error: </strong>
                  <span className="block sm:inline">{error}</span>
               </div>
            )}

            {!loading && !error && (
               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                     <PostCard 
                        key={post.id} 
                        title={post.title} 
                        content={post.body}
                        userId={post.userId}
                     />
                  ))}
               </div>
            )}
         </div>
      </>
   );
};

export default PostsPage;
