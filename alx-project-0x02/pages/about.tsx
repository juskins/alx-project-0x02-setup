import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const AboutPage = () => {
  return (
     <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Page</h1>
        
        <div className="space-y-6">
           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Button Sizes</h2>
              <div className="flex flex-wrap gap-4 items-center">
                 <Button size="small" shape="rounded-md">
                    Small Button
                 </Button>
                 <Button size="medium" shape="rounded-md">
                    Medium Button
                 </Button>
                 <Button size="large" shape="rounded-md">
                    Large Button
                 </Button>
              </div>
           </div>

           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Button Shapes</h2>
              <div className="flex flex-wrap gap-4 items-center">
                 <Button size="medium" shape="rounded-sm">
                    Rounded Small
                 </Button>
                 <Button size="medium" shape="rounded-md">
                    Rounded Medium
                 </Button>
                 <Button size="medium" shape="rounded-full">
                    Rounded Full
                 </Button>
              </div>
           </div>

           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Mixed Combinations</h2>
              <div className="flex flex-wrap gap-4 items-center">
                 <Button size="small" shape="rounded-full">
                    Small & Full
                 </Button>
                 <Button size="medium" shape="rounded-sm">
                    Medium & SM
                 </Button>
                 <Button size="large" shape="rounded-full">
                    Large & Full
                 </Button>
              </div>
           </div>
        </div>
      </div>
     </>
  );
};

export default AboutPage;   