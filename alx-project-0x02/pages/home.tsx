import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

interface Post {
  id: number;
  title: string;
  content: string;
}

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "Welcome", content: "This is the home page of our website." },
    { id: 2, title: "Features", content: "Explore the various features we offer." }
  ]);

  const handleAddPost = (title: string, content: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      content
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Home Page</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
        >
          + Add New Post
        </button>
      </div>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;