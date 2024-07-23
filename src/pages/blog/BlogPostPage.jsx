import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { db, doc, getDoc, updateDoc, increment } from '../../util/firebase';
import BlogPost from '../../components/blog/BlogPost';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDarkMode } from '../../contexts/DarkModeContext';

const useStyles = makeStyles((theme) => ({
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  cardMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    color: 'gray',
    paddingLeft: 2,
    paddingRight: 10,
    paddingBottom: theme.spacing(1),
  },
  blogsContainer: {
    padding: theme.spacing(10),
    width: '70%',
    paddingBottom: theme.spacing(30),
  },
}));

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchPostFromMarkdown = async () => {
      try {
        const file = await import(`../..//posts/${id}.md`);
        const res = await fetch(file.default);
        const text = await res.text();
        const [_, frontmatter, content] = text.split('---');
        const metadata = frontmatter.split('\n').reduce((acc, line) => {
          const [key, value] = line.split(':');
          if (key && value) acc[key.trim()] = value.trim();
          return acc;
        }, {});
        console.log('id', id);
        const postDocRef = doc(db, 'posts', id);
        const postDoc = await getDoc(postDocRef);
        const views = postDoc.exists() ? postDoc.data().views : 0;

        const postData = { ...metadata, content, views };
        setPost(postData);

        // Increment view count
        await updateDoc(postDocRef, {
          views: increment(1),
        });
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostFromMarkdown();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords || ''} />
        {/* Add more meta tags as needed */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={post.image || 'default-image-url'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta
          name="twitter:image"
          content={post.image || 'default-image-url'}
        />
      </Helmet>
      <Container maxWidth="md" className={classes.blogsContainer}>
        <Box my={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <ArrowBackIcon />
          <Typography
            variant="button"
            mx={1}
            sx={{
              color: darkMode ? 'white' : 'black',
              '&:hover': {
                textDecoration: 'underline', // This will add the underline on hover
              },
            }}
            component={Link}
            to="/blog"
            style={{ cursor: 'pointer' }}
          >
            Back to Blog
          </Typography>
        </Box>
        <Typography
          variant="h2"
          sx={{ fontWeight: 800 }}
          className={classes.blogTitle}
        >
          {post.title}
        </Typography>
        <Box className={classes.cardMeta}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: { xs: '180px', md: '200px', lg: '210px' },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 'light',
                fontSize: { xs: '12px', md: '14px', lg: '15px' },
              }}
              textAlign={'left'}
            >
              By Kingsley Okon
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              sx={{
                fontWeight: 'light',
                fontSize: { xs: '12px', md: '13px', lg: '14px' },
              }}
            >
              {'|'}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 'light',
                fontSize: { xs: '12px', md: '13px', lg: '14px' },
              }}
            >
              {post.date}
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 'light',
              fontSize: { xs: '12px', md: '13px', lg: '14px' },
            }}
          >
            {post.views} views
          </Typography>
        </Box>
        <BlogPost id={id} content={post.content} />
        <Box mt={2}>
          <Typography
            variant="button"
            component={Link}
            to="/blog"
            style={{ cursor: 'pointer' }}
          >
            Back to all posts
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default BlogPostPage;
