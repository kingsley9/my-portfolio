import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '@mui/material/Box';

import {
  db,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from '../../util/firebase';
import { components } from './MarkdownComponents'; // Adjust the import path as necessary

const BlogPost = ({ id, content }) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    let isMounted = true;
    const incrementViewCount = async () => {
      try {
        const postDocRef = doc(db, 'posts', id);
        const postDoc = await getDoc(postDocRef);
        if (isMounted) {
          if (postDoc.exists()) {
            await updateDoc(postDocRef, {
              views: increment(1),
            });
          } else {
            await setDoc(postDocRef, { views: 1 }, { merge: true });
          }
        }
      } catch (error) {
        console.error('Error updating view count: ', error);
      }
    };

    incrementViewCount();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <Box>
      <ReactMarkdown components={components} className="markdown">
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default BlogPost;
