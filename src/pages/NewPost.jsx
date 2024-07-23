// src/components/BlogEditor.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('posts').add({
      title,
      content,
      createdAt: new Date(),
    });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default BlogEditor;
