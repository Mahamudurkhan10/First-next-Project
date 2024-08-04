import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Blogs = [
     {
       id: 1,
       name: "News & Current Events",
       description: "Latest news, analysis, and commentary on global and local events.",
       image: "https://i.ibb.co/6BBxTg4/1-001.webp",
     },
     {
       id: 2,
       name: "Lifestyle & Wellness",
       description: "Tips on health, fitness, mental well-being, and lifestyle choices.",
       image: "https://i.ibb.co/26LNb6x/How-to-make-health-and-wellness-a-lifestyle-instead-of-a-phase-featured-image.jpg",
     },
     {
       id: 3,
       name: "Technology & Innovation",
       description: "Updates on tech trends, gadget reviews, and insights into the latest innovations.",
       image: "https://i.ibb.co/26LNb6x/How-to-make-health-and-wellness-a-lifestyle-instead-of-a-phase-featured-image.jpg",
     },
     {
       id: 4,
       name: "Travel & Adventure",
       description: "Travel guides, adventure stories, and tips for exploring new places.",
       image: "https://i.ibb.co/26LNb6x/How-to-make-health-and-wellness-a-lifestyle-instead-of-a-phase-featured-image.jpg",
     },
     {
       id: 5,
       name: "Food & Recipes",
       description: "Delicious recipes, cooking tips, and food reviews.",
       image: "https://i.ibb.co/26LNb6x/How-to-make-health-and-wellness-a-lifestyle-instead-of-a-phase-featured-image.jpg",
     },
     {
       id: 6,
       name: "Personal Development",
       description: "Articles on self-improvement, productivity, and personal growth.",
       image: "https://i.ibb.co/26LNb6x/How-to-make-health-and-wellness-a-lifestyle-instead-of-a-phase-featured-image.jpg",
     },
     {
       id: 7,
       name: "Entertainment & Culture",
       description: "Reviews of movies, books, music, and cultural events.",
       image: "https://i.ibb.co/26LNb6x/How-to-make-health-and-wellness-a-lifestyle-instead-of-a-phase-featured-image.jpg",
     },
     {
       id: 8,
       name: "Finance & Business",
       description: "Advice on personal finance, business trends, and investment tips.",
       image: "https://i.ibb.co/26LNb6x/How-to-make-health-and-wellness-a-lifestyle-instead-of-a-phase-featured-image.jpg",
     },
     {
       id: 9,
       name: "Opinion & Editorial",
       description: "Thought-provoking opinions and editorials on various topics.",
       image: "https://i.ibb.co/26LNb6x/How-to-make-health-and-wellness-a-lifestyle-instead-of-a-phase-featured-image.jpg",
     },
     {
       id: 10,
       name: "Creative Writing",
       description: "Short stories, poems, and creative essays from various contributors.",
       image: "https://i.ibb.co/26LNb6x/How-to-make-health-and-wellness-a-lifestyle-instead-of-a-phase-featured-image.jpg",
     },
   ];
 

const BlogPage = ({ params }) => {
  const blog = Blogs.find((b) => b.id === parseInt(params.id, 10));

  if (!blog) {
    return (
      <div>
        <h1 className="text-3xl">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-7">
      <div className="flex flex-col lg:flex-row rounded-md shadow-md bg-gray-200 dark:text-gray-800">
        <div className="w-full lg:w-1/2 mx-auto p-5">
          <Image
            src={blog.image}
            alt={blog.name}
            width={300}
            height={200}
            className="rounded-t-md hover:shadow-2xl object-cover opacity-90 object-center"
            layout="responsive"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-around flex-grow p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{blog.name}</h2>
            <p className="dark:text-gray-800">{blog.description}</p>
          </div>
          <Link
            href="/blogs"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

BlogPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPage;

export async function generateStaticParams() {
  // Simulating fetching from an API endpoint
  const posts = Blogs; // Directly using the Blogs array for static generation

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
