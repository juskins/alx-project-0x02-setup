import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface Post {
   userId: number;
   id: number;
   title: string;
   body: string;
}

interface PostsPageProps {
   posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
   return (
      <>
         <Header />
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Posts Page</h1>
            
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
         </div>
      </>
   );
};

export const getStaticProps: GetStaticProps = async () => {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
         throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      // Get first 12 posts
      const posts = data.slice(0, 12);

      return {
         props: {
            posts,
         },
         revalidate: 60, // Revalidate every 60 seconds
      };
   } catch (error) {
      console.error('Error fetching posts:', error);
      return {
         props: {
            posts: [],
         },
         revalidate: 60,
      };
   }
};

export default PostsPage;
