import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => { 
   return ( 
      <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
         <h2 className="text-xl font-semibold mb-4">{title}</h2>
         <p className="text-gray-600 dark:text-gray-300">{content}</p>
      </div>
   ); 
}

export default Card;