export interface myInterface{
   id: number;
   name: string;
};

export interface CardProps {
   title: string;
   content: string;
}

export interface PostModalProps {
   isOpen: boolean;
   onClose: () => void;
   onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
   size?: 'small' | 'medium' | 'large';
   shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
   children: React.ReactNode;
   onClick?: () => void;
   type?: 'button' | 'submit' | 'reset';
   className?: string;
}