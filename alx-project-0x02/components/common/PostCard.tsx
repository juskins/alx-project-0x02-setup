import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
   return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
         <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
               User ID: {userId}
            </span>
         </div>
         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 capitalize">
            {title}
         </h3>
         <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {content}
         </p>
      </div>
   );
};

export default PostCard;
