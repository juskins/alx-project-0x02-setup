import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const PostsPage = () => {
   const posts = [
      { 
         id: 1, 
         title: "Getting Started with Next.js", 
         content: "Next.js is a powerful React framework that enables server-side rendering and static site generation." 
      },
      { 
         id: 2, 
         title: "Understanding TypeScript", 
         content: "TypeScript adds static typing to JavaScript, making your code more robust and maintainable." 
      },
      { 
         id: 3, 
         title: "Tailwind CSS Best Practices", 
         content: "Learn how to effectively use Tailwind CSS utility classes to build beautiful, responsive designs." 
      },
      { 
         id: 4, 
         title: "React Hooks Explained", 
         content: "Hooks are a powerful feature in React that let you use state and other React features without writing classes." 
      }
   ];

   return (
      <>
         <Header />
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Posts Page</h1>
            
            <div className="grid gap-6 md:grid-cols-2">
               {posts.map((post) => (
                  <Card key={post.id} title={post.title} content={post.content} />
               ))}
            </div>
         </div>
      </>
   );
};

export default PostsPage;
