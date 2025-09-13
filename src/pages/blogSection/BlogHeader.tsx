import React, { useState, useEffect } from 'react';
import { CalendarDays, ArrowLeft, Clock, User } from 'lucide-react';
import { useGetBlog } from './http/useGetBlog';
import { imagUrl } from '../../utils/tokenHelper';





const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const getTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  return `${diffInDays} days ago`;
};

const BlogListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const {data, isLoading: isLoadingBlog} = useGetBlog()

  console.log(selectedBlog?.image)

  

  // Update blogs when data is available
  useEffect(() => {
    if (data && Array.isArray(data)) {
      setBlogs(data);
    }
  }, [data]);

  // Handle browser refresh - reset to listing view
  useEffect(() => {
    const handleBeforeUnload = () => {
      setSelectedBlog(null);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToListing = () => {
    setSelectedBlog(null);
  };

  if (isLoadingBlog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FB2C36]"></div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Blog Detail Header */}
        <section className="relative w-full h-[400px] sm:h-[500px] overflow-hidden shadow-lg">
          <img
            src={`${imagUrl}/${selectedBlog.image}`}
            alt={selectedBlog.heading}
            className="w-full h-full object-cover absolute inset-0 bg-red-300"
            onError={(e) => {
              e.target.src = `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`;
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 text-white">
            <button
              onClick={handleBackToListing}
              className="flex items-center space-x-2 mb-6 text-white hover:text-[#FB2C36] transition-colors duration-200 w-fit"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Blogs</span>
            </button>
            
            <div className="flex items-center space-x-2 mb-4">
              <CalendarDays className="w-6 h-6 text-[#FB2C36]" />
              <span className="bg-white text-[#FB2C36] px-3 py-1 text-xs font-semibold rounded">
                {getFormattedDate(selectedBlog.createdAt)}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl mb-4">
              {selectedBlog.heading}
            </h1>
            
            <div className="flex items-center space-x-4 text-sm opacity-90">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{getTimeAgo(selectedBlog.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Admin</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: selectedBlog.description }}
          />
          
          {/* Extended content for demo */}
          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              In today's rapidly evolving business landscape, organizations are constantly seeking innovative ways to optimize their operations and stay ahead of the competition. This comprehensive analysis explores the latest trends and methodologies that are shaping the future of business operations.
            </p>
            
            <p>
              The integration of advanced technologies has opened up unprecedented opportunities for businesses to streamline their processes, reduce costs, and improve overall efficiency. From artificial intelligence to blockchain technology, companies are leveraging these tools to create more resilient and adaptable business models.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Key Benefits</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Enhanced operational efficiency and productivity</li>
              <li>Improved customer satisfaction and engagement</li>
              <li>Reduced operational costs and waste</li>
              <li>Better decision-making through data-driven insights</li>
              <li>Increased scalability and flexibility</li>
            </ul>
            
            <p>
              As we continue to navigate the challenges and opportunities of the modern business environment, it becomes increasingly important to adopt a holistic approach that considers both technological capabilities and human factors. The most successful organizations are those that can effectively balance innovation with practical implementation strategies.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Latest Blog Posts
          </h1>
          <p className="text-gray-600">
            Discover insights, trends, and expert perspectives on industry topics
          </p>
        </div>
      </div>

      {/* Blog Listing */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((blog) => (
            <article
              key={blog._id}
              onClick={() => handleBlogClick(blog)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`${imagUrl}/${blog.image}`}
                  alt={blog.heading}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`;
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FB2C36] text-white px-3 py-1 text-xs font-semibold rounded">
                    {getTimeAgo(blog.createdAt)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <CalendarDays className="w-4 h-4 text-[#FB2C36]" />
                  <span className="text-sm text-gray-500">
                    {getFormattedDate(blog.createdAt)}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#FB2C36] transition-colors duration-200">
                  {blog.heading}
                </h2>
                
                <div 
                  className="text-gray-600 text-sm line-clamp-3 mb-4"
                  dangerouslySetInnerHTML={{ 
                    __html: blog.description.replace(/<[^>]*>/g, '') 
                  }}
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>Admin</span>
                  </div>
                  <span className="text-[#FB2C36] font-semibold text-sm group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {blogs?.length === 0 && !isLoadingBlog && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No blogs available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListing;