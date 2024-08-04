import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
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

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-4 gap-5">
        {Blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col">
            <div className="flex flex-col h-full rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <div className="flex-shrink-0 h-60 overflow-hidden">
                <Image
                  src={blog.image}
                  alt=""
                  width={300}
                  height={200}
                  className="object-cover w-full h-full object-center rounded-t-md"
                  layout="responsive"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-wide">{blog.name}</h2>
                  <p className="dark:text-gray-800">{blog.description}</p>
                </div>
                <Link
                  href={`/blogs/${blog.id}`}
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                >
                  view Details 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

