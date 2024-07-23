---
id: hw
title: Hello World
date: July 22, 2024
description: Creating a blog on my website
category: tech
---
![MF doom mask on ground](https://images.unsplash.com/photo-1594553950475-0a69e5252577?w=850&h=500&fit=crop&q=80)

## Introduction

Welcome to my first blog post! Today, I'll take you through the process of adding a blog feature to my portfolio website. This experience not only improved my web development skills but also taught me a lot about handling content dynamically. Let's get into it.

## Setting Up the Project

First, I set up my React project using Create React App. This provided a solid foundation and streamlined many of the initial configuration tasks. If you haven't already, you can create a new React project using the following commands:

```bash
npx create-react-app my-portfolio
cd my-portfolio
```

## Installing Dependencies

To manage and display my blog posts, I decided to use markdown files. Markdown is a lightweight markup language with plain text formatting syntax, which is perfect for writing blog posts. To parse and render these markdown files in React, I installed `react-markdown`.

```bash
npm install react-markdown
```

## Creating the Blog Component

The next step was to create a `Blog` component to display the list of blog posts. This component fetches markdown files, extracts metadata, and displays each post in a card layout. Here's a simplified version of the `Blog` component:

```jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material';
import { useDarkMode } from '../contexts/DarkModeContext';

const Blog = () => {
  const { darkMode } = useDarkMode();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    // Fetch and set posts here
  }, []);

  const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div className="container">
      <Box className="hero">
        <Typography variant="h1">Blog</Typography>
      </Box>
      <Grid container spacing={3}>
        {currentPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea component={Link} to={`/post/${post.id}`}>
                <CardContent>
                  <Typography variant="h5">{post.title}</Typography>
                  <Typography variant="subtitle2">{post.description}</Typography>
                  <Typography variant="caption">{post.date}</Typography>
                  <Typography variant="caption">{post.views} views</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
```

## Adding Routes

To navigate between the list of blog posts and individual blog posts, I set up routes in my `App.js` file. This involved defining paths for the home page, the blog list page, and individual blog post pages.

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './components/Blog';
import BlogPostPage from './pages/blog/BlogPostPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
```

## Creating the BlogPostPage Component

The `BlogPostPage` component fetches and displays individual blog posts based on the post ID. It also includes metadata for SEO purposes, like the post title and description.

## Challenges and Constraints

### Markdown Parsing

One of the challenges was ensuring the markdown content was parsed and displayed correctly. Initially, the bullet points and numbers in lists weren't showing up correctly. After some troubleshooting, I found that the `overflow-x: hidden;` style in my index.html was causing the problem. Removing this style fixed the issue and made the lists display properly.

### Handling Routing

Another challenge was handling routing for individual blog posts. Using React Router, I was able to dynamically generate routes for each post based on its ID. This allowed users to navigate directly to a post via a URL.

### SEO Considerations

Ensuring good SEO practices was crucial. I added meta tags dynamically for each blog post using `react-helmet`, which helped improve the visibility of individual posts on search engines.

## Lessons Learned

### Simplicity in Design

Keeping the design simple and consistent was key. I aimed for a minimalist look that focused on content readability. This included using a clean layout, clear typography, and sufficient white space.

### Performance Optimization

Loading all markdown files at once could be inefficient, especially as the number of posts grows. Implementing pagination and fetching posts on demand helped improve performance.

### User Engagement

Tracking user engagement, such as post views, provided valuable insights. This data helped me understand which topics resonated most with my audience and informed future content creation.

## Conclusion

Adding a blog to my React portfolio was a rewarding experience that taught me a lot about React, routing, and markdown parsing. It also highlighted the importance of SEO and performance optimization. I hope this guide provides a useful starting point for anyone looking to add a blog to their React website.

Stay tuned for more posts as I continue to document my journey in web development!
