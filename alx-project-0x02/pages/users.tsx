import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
   users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
   return (
      <>
         <Header />
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Users Page</h1>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
               {users.map((user) => (
                  <UserCard 
                     key={user.id}
                     id={user.id}
                     name={user.name}
                     email={user.email}
                     address={user.address}
                     phone={user.phone}
                     website={user.website}
                     company={user.company}
                  />
               ))}
            </div>
         </div>
      </>
   );
};

export const getStaticProps: GetStaticProps = async () => {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
         throw new Error('Failed to fetch users');
      }
      const users = await response.json();

      return {
         props: {
            users,
         },
         revalidate: 60, // Revalidate every 60 seconds
      };
   } catch (error) {
      console.error('Error fetching users:', error);
      return {
         props: {
            users: [],
         },
         revalidate: 60,
      };
   }
};

export default UsersPage;
