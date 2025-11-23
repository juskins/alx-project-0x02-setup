import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ 
   size = 'medium', 
   shape = 'rounded-md', 
   children, 
   onClick, 
   type = 'button',
   className = ''
}) => {
   const sizeClasses = {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-5 py-2.5 text-base',
      large: 'px-7 py-3.5 text-lg'
   };

   const shapeClasses = {
      'rounded-sm': 'rounded-sm',
      'rounded-md': 'rounded-md',
      'rounded-full': 'rounded-full'
   };

   const baseClasses = 'bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-200 shadow-md hover:shadow-lg';

   return (
      <button
         type={type}
         onClick={onClick}
         className={`${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
      >
         {children}
      </button>
   );
};

export default Button;
