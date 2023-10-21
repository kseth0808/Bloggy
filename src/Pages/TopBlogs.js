import React from 'react';

const TopBlogs = ({ topBlogs }) => {
  const topBlogsStyle = {
    border: '1px solid #ccc',
    margin: '20px',
    padding: '10px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    margin: '10px 0',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
  };

  return (
    <div style={topBlogsStyle} className="topBlogs">
      <h2>Top Blogs</h2>
      <ul style={listStyle}>
        {topBlogs.map((blog, index) => (
          <li style={listItemStyle} key={index}>
            <a style={linkStyle} href={`/blog/${blog.id}`}>
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBlogs;
