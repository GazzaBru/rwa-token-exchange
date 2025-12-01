import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Understanding RWA Tokenisation in Real Estate",
    summary: "Dive deep into how blockchain technology is transforming property investment through real-world asset tokenisation.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/blog-placeholder-2-u43hsa7-1764601112086.webp",
    slug: "understanding-rwa-tokenisation"
  },
  {
    title: "5 Benefits of Fractional Property Investment",
    summary: "Discover the key advantages of owning fractions of high-value properties, from diversification to lower entry costs.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/blog-placeholder-1-8a7r5og-1764601105286.webp",
    slug: "benefits-of-fractional-investment"
  },
  {
    title: "The Legal Landscape of Digital Assets in South Africa",
    summary: "A look at the current regulatory environment governed by the FSCA and what it means for investors.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/976fda57-8ad8-40af-a3b5-35ef75699649/hero-background-w90g27p-1764601045864.webp",
    slug: "legal-landscape-sa"
  }
];

const Blog = () => {
  return (
    <div className='container mx-auto py-20 px-4'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold tracking-tight
'>Inaara Insights</h1>
        <p className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'>
          Your source for the latest news, market analysis, and educational content on digital assets and real estate.
        </p>
      </div>

      <div className='mb-12 max-w-lg mx-auto'>
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
          <Input type='search' placeholder='Search articles...' className='pl-10 w-full' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.title} className='group block bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1'>
            <div className='relative h-56 w-full'>
                <img src={post.imageUrl} alt={post.title} className='w-full h-full object-cover' />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-2 group-hover:text-blue-600'>{post.title}</h3>
              <p className='text-gray-600 mb-4'>{post.summary}</p>
              <span className='font-semibold text-blue-600 group-hover:underline'>Read More</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;