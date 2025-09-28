// components/Footer.jsx
'use client';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [blogs, setBlogs] = useState([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
        const json = await res.json();
        setBlogs(json.blogs || []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchBlogs();
  }, []);

  const nextBlog = () => {
    setCurrentBlogIndex((prev) => (prev + 1) % blogs.length);
  };

  const prevBlog = () => {
    setCurrentBlogIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const currentBlog = blogs[currentBlogIndex];

  const showComingSoonPopup = () => {
    alert('🚀 Coming Soon! This feature is currently under development. Stay tuned for updates!');
  };

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/Golf+Green+Kolkata', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-auto relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Us</h4>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We are a cutting-edge digital agency specializing in innovative web solutions, 
              modern design, and strategic digital transformation. Our mission is to empower 
              businesses with exceptional digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="font-bold text-xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</h4>
            </div>
            <ul className="space-y-3">
              <li><button onClick={showComingSoonPopup} className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group w-full text-left">
                <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                Web Development
              </button></li>
              <li><button onClick={showComingSoonPopup} className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group w-full text-left">
                <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                UI/UX Design
              </button></li>
              <li><button onClick={showComingSoonPopup} className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group w-full text-left">
                <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                Digital Marketing
              </button></li>
              <li><button onClick={showComingSoonPopup} className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group w-full text-left">
                <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                Brand Strategy
              </button></li>
              <li><button onClick={showComingSoonPopup} className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group w-full text-left">
                <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                E-commerce Solutions
              </button></li>
            </ul>
          </div>

          {/* Blogs & News Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <h4 className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Latest Insights</h4>
              {blogs.length > 0 && (
                <div className="ml-auto flex items-center space-x-1 text-xs text-slate-400">
                  <span>{currentBlogIndex + 1}</span>
                  <span>/</span>
                  <span>{blogs.length}</span>
                </div>
              )}
            </div>
            
            <div className="relative">
              {blogs.length === 0 ? (
                <div className="text-slate-400 text-sm bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span>No posts available yet</span>
                  </div>
                </div>
              ) : (
                <div className="relative bg-slate-800/30 hover:bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden group">
                  <a href={`/blog/${currentBlog._id}`} className="block p-6">
                    <div className="relative overflow-hidden">
                      <h5 className="font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 text-lg leading-tight">
                        {currentBlog.title || 'Untitled Post'}
                      </h5>
                      
                      {currentBlog.idea && (
                        <div className="mb-4 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                          <p className="text-sm text-purple-200 leading-relaxed">
                            <span className="text-purple-400 font-semibold">💡 Key Idea:</span> {currentBlog.idea}
                          </p>
                        </div>
                      )}
                      
                      {currentBlog.content && (
                        <p className="text-sm text-slate-300 mb-4 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                          {currentBlog.content.length > 150 ? `${currentBlog.content.substring(0, 150)}...` : currentBlog.content}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                        <div className="flex items-center space-x-3">
                          {currentBlog.author && (
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-sm font-bold text-white">
                                  {currentBlog.author.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                                  {currentBlog.author}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 group-hover:text-purple-400 transition-colors duration-300 font-medium">
                          {new Date(currentBlog.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                      
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>
                  </a>
                </div>
              )}
              
              {/* Navigation Controls - Outside the card */}
              {blogs.length > 1 && (
                <div className="absolute -left-4 -right-4 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      prevBlog();
                    }}
                    className="pointer-events-auto w-10 h-10 bg-slate-900/90 hover:bg-slate-800 border border-slate-600 hover:border-purple-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 group/btn backdrop-blur-sm"
                    aria-label="Previous blog post"
                  >
                    <svg className="w-5 h-5 text-slate-300 group-hover/btn:text-purple-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      nextBlog();
                    }}
                    className="pointer-events-auto w-10 h-10 bg-slate-900/90 hover:bg-slate-800 border border-slate-600 hover:border-purple-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 group/btn backdrop-blur-sm"
                    aria-label="Next blog post"
                  >
                    <svg className="w-5 h-5 text-slate-300 group-hover/btn:text-purple-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Blog Indicators */}
            {blogs.length > 1 && (
              <div className="flex items-center justify-center space-x-2 mt-4">
                {blogs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBlogIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentBlogIndex 
                        ? 'bg-purple-400 w-6' 
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to blog post ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            {/* View All Link */}
            <div className="text-center pt-4">
              <button onClick={showComingSoonPopup} className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300 group">
                <span>View all {blogs.length} posts</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h4 className="font-bold text-xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Get in Touch</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group hover:bg-slate-800/30 p-3 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-slate-700 group-hover:bg-orange-500/20 rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a href="mailto:raginisarkarwork@gmail.com" className="text-sm text-slate-300 hover:text-orange-400 transition-colors duration-300">
                    raginisarkarwork@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover:bg-slate-800/30 p-3 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-slate-700 group-hover:bg-orange-500/20 rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <a href="tel:+911234567890" className="text-sm text-slate-300 hover:text-orange-400 transition-colors duration-300">
                    +91 1234567890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover:bg-slate-800/30 p-3 rounded-lg transition-all duration-300 cursor-pointer" onClick={openGoogleMaps}>
                <div className="w-10 h-10 bg-slate-700 group-hover:bg-orange-500/20 rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="text-sm text-slate-300 group-hover:text-orange-400 transition-colors duration-300">Golf Green, Kolkata</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stay Updated
            </h4>
            <p className="text-slate-300 mb-6">Get the latest insights and updates delivered to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-purple-500 text-white placeholder-slate-400 transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-r-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DD</span>
              </div>
              <span className="text-slate-300 text-sm">
                © {new Date().getFullYear()} DD-Style Agency. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}