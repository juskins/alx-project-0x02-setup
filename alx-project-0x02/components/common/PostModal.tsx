import { PostModalProps } from "@/interfaces";
import { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");

   if (!isOpen) return null;

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (title.trim() && content.trim()) {
         onSubmit(title, content);
         setTitle("");
         setContent("");
         onClose();
      }
   };

   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Post</h2>
               <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
               >
                  &times;
               </button>
            </div>
            <form onSubmit={handleSubmit}>
               <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                     Title
                  </label>
                  <input
                     type="text"
                     id="title"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     placeholder="Enter post title"
                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                     required
                  />
               </div>
               <div className="mb-6">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                     Content
                  </label>
                  <textarea
                     id="content"
                     value={content}
                     onChange={(e) => setContent(e.target.value)}
                     placeholder="Enter post content"
                     rows={5}
                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                     required
                  ></textarea>
               </div>
               <div className="flex gap-4">
                  <button
                     type="submit"
                     className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                  >
                     Submit
                  </button>
                  <button
                     type="button"
                     onClick={onClose}
                     className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                  >
                     Cancel
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default PostModal;