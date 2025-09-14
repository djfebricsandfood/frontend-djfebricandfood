import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CalendarDays, ArrowLeft, Clock, User, AlertCircle, RefreshCw } from 'lucide-react';
import { useGetBlog } from './http/useGetBlog';
import { imagUrl } from '../../utils/tokenHelper';

// Constants
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
const FALLBACK_CARD_IMAGE = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';

// Utility functions - memoized to prevent recreating on each render
const getFormattedDate = (dateString) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';
    return date.toLocaleDateString("en-US", { 
      day: "numeric", 
      month: "long", 
      year: "numeric" 
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

const getTimeAgo = (dateString) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Unknown';
    
    const now = new Date();
    const diffInMs = now - date;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 30) return `${diffInDays} days ago`;
    if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    }
    const years = Math.floor(diffInDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } catch (error) {
    console.error('Error calculating time ago:', error);
    return 'Unknown';
  }
};


const stripHtmlTags = (html) => {
  if (!html || typeof html !== 'string') return '';
  try {
    // Create a temporary div element to safely parse HTML
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  } catch (error) {
    console.error('Error stripping HTML tags:', error);
    return html.replace(/<[^>]*>/g, '');
  }
};


const BlogErrorBoundary = ({ children, onRetry }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event) => {
      console.error('Blog component error:', event.error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4 p-8">
          <AlertCircle className="w-16 h-16 text-[#FF7722] mx-auto" />
          <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>
          <p className="text-gray-600 max-w-md">
            We encountered an error while loading the blogs. Please try refreshing the page.
          </p>
          <button
            onClick={() => {
              setHasError(false);
              onRetry?.();
            }}
            className="inline-flex items-center space-x-2 bg-[#FF7722] text-white px-6 py-3 rounded-lg hover:bg-[#e02530] transition-colors duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    );
  }

  return children;
};

// Loading Component
const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF7722]"></div>
      <p className="text-gray-600">{message}</p>
    </div>
  </div>
);

// Blog Card Component
const BlogCard = React.memo(({ blog, onClick }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  const handleCardClick = useCallback(() => {
    onClick(blog);
  }, [blog, onClick]);

  const imageUrl = useMemo(() => {
    if (imageError || !blog.image) return FALLBACK_CARD_IMAGE;
    return `${imagUrl}/${blog.image}`;
  }, [blog.image, imageError]);

  const strippedDescription = useMemo(() => {
    return stripHtmlTags(blog.description);
  }, [blog.description]);

  return (
    <article
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={blog.heading || 'Blog post'}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={handleImageError}
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#FF7722] text-white px-3 py-1 text-xs font-semibold rounded shadow-lg">
            {getTimeAgo(blog.createdAt)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <CalendarDays className="w-4 h-4 text-[#FF7722] flex-shrink-0" />
          <span className="text-sm text-gray-500">
            {getFormattedDate(blog.createdAt)}
          </span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#FF7722] transition-colors duration-200">
          {blog.heading || 'Untitled Post'}
        </h2>
        
        <div className="text-gray-600 text-sm line-clamp-3 mb-4">
          {strippedDescription}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <User className="w-4 h-4 flex-shrink-0" />
            <span>Admin</span>
          </div>
          <span className="text-[#FF7722] font-semibold text-sm group-hover:underline flex items-center space-x-1">
            <span>Read More</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </article>
  );
});

BlogCard.displayName = 'BlogCard';

// Blog Detail Component
const BlogDetail = React.memo(({ blog, onBack }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  const imageUrl = useMemo(() => {
    if (imageError || !blog.image) return FALLBACK_IMAGE;
    return `${imagUrl}/${blog.image}`;
  }, [blog.image, imageError]);

  // Scroll to top when blog detail opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Detail Header */}
      <section className="relative w-full h-[400px] sm:h-[500px] overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt={blog.heading || 'Blog post'}
          className="w-full h-full object-cover absolute inset-0"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 text-white">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 mb-6 text-white hover:text-[#FF7722] transition-colors duration-200 w-fit focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded p-2"
            aria-label="Back to blog listing"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Blogs</span>
          </button>
          
          <div className="flex items-center space-x-2 mb-4">
            <CalendarDays className="w-6 h-6 text-[#FF7722]" />
            <span className="bg-white text-[#FF7722] px-3 py-1 text-xs font-semibold rounded">
              {getFormattedDate(blog.createdAt)}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl mb-4">
            {blog.heading || 'Untitled Post'}
          </h1>
          
          <div className="flex items-center space-x-4 text-sm opacity-90">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{getTimeAgo(blog.createdAt)}</span>
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
        <div className="bg-white rounded-lg shadow-sm p-8">
          {blog.description ? (
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:text-gray-900 prose-links:text-[#FF7722] prose-links:no-underline hover:prose-links:underline"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          ) : (
            <p className="text-gray-500 italic">No content available for this blog post.</p>
          )}
          
          {/* Extended content placeholder - you can remove this if not needed */}
          <div className="mt-8 pt-8 border-t border-gray-200 space-y-6 text-gray-700 leading-relaxed">
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
    </div>
  );
});

BlogDetail.displayName = 'BlogDetail';

// Main Component
const BlogListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [error, setError] = useState(null);

  const { data, isLoading: isLoadingBlog, error: apiError , isFetching } = useGetBlog();

  // Memoized handlers
  const handleBlogClick = useCallback((blog) => {
    if (!blog || !blog._id) {
      console.error('Invalid blog data:', blog);
      return;
    }
    setSelectedBlog(blog);
  }, []);

  const handleBackToListing = useCallback(() => {
    setSelectedBlog(null);
  }, []);

  const handleRetry = useCallback(() => {
    setError(null);
    // You might want to add a retry mechanism for your API call here
  }, []);

  // Update blogs when data is available
  useEffect(() => {
    try {
      if (data && Array.isArray(data)) {
        // Validate blog data
        const validBlogs = data.filter(blog => 
          blog && 
          typeof blog === 'object' && 
          blog._id && 
          blog.heading
        );
        setBlogs(validBlogs);
        setError(null);
      } else if (data && !Array.isArray(data)) {
        console.error('Expected array of blogs, received:', typeof data);
        setError('Invalid data format received');
      }
    } catch (err) {
      console.error('Error processing blog data:', err);
      setError('Error processing blog data');
    }
  }, [data]);

  // Handle API errors
  useEffect(() => {
    if (apiError) {
      console.error('API Error:', apiError);
      setError('Failed to load blogs. Please try again.');
    }
  }, [apiError]);

  // Handle browser refresh - reset to listing view
  useEffect(() => {
    const handleBeforeUnload = () => {
      setSelectedBlog(null);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Memoized blog list to prevent unnecessary re-renders
  const blogList = useMemo(() => {
    return blogs.map((blog) => (
      <BlogCard
        key={blog._id}
        blog={blog}
        onClick={handleBlogClick}
      />
    ));
  }, [blogs, handleBlogClick]);

  // Show error state
  if (error) {
    return (
      <BlogErrorBoundary onRetry={handleRetry}>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <AlertCircle className="w-16 h-16 text-[#FF7722] mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900">Error Loading Blogs</h2>
            <p className="text-gray-600 max-w-md">{error}</p>
            <button
              onClick={handleRetry}
              className="inline-flex items-center space-x-2 bg-[#FF7722] text-white px-6 py-3 rounded-lg hover:bg-[#e02530] transition-colors duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      </BlogErrorBoundary>
    );
  }

  // Show loading state
  if (isLoadingBlog || isFetching) {
    return <LoadingSpinner message="Loading blogs..." />;
  }

  return (
    <BlogErrorBoundary onRetry={handleRetry}>
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} onBack={handleBackToListing} />
      ) : (
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
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogList}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                    <CalendarDays className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">No blogs available</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    There are no blog posts available at the moment. Please check back later for new content.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </BlogErrorBoundary>
  );
};

export default BlogListing;