import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import './blog.scss';
import { db, doc, getDoc } from '../util/firebase';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1630198696583-a5e4e1275232?w=2864&h=1400&fit=crop&q=80')`,
    height: '350px',
    backgroundPosition: 'center 30%', // Adjust the vertical focus
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: 300,
      fontSize: '3em',
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 240,
  },
  cardContent: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '98%',
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  cardDescription: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    color: 'gray',
  },
  cardMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    color: 'gray',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControlContainer: {
    marginBottom: theme.spacing(3),
  },
}));

const categories = ['tech', 'music', 'art', 'fashion', 'football'];

function Blog() {
  const { darkMode } = useDarkMode();
  const classes = useStyles({ darkMode });
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const postsPerPage = 6;

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(
      require.context('../posts/', false, /\.md$/)
    );

    const fetchPosts = async () => {
      const postsData = await Promise.all(
        markdownFiles.map(async (file) => {
          const res = await fetch(file);
          const text = await res.text();
          const [_, frontmatter, content] = text.split('---');
          const metadata = frontmatter.split('\n').reduce((acc, line) => {
            const [key, value] = line.split(':');
            if (key && value) acc[key.trim()] = value.trim();
            return acc;
          }, {});

          // Fetch view count from Firestore
          const postDocRef = doc(db, 'posts', metadata.id);
          const postDoc = await getDoc(postDocRef);
          const views = postDoc.exists() ? postDoc.data().views : 0;

          return { ...metadata, content, views };
        })
      );
      // Sort posts by date in descending order
      postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="container">
      <Box className={classes.hero}>
        <Box>
          <Typography variant="h1" sx={{ fontWeight: 800 }}>
            Blog
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          {currentPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  height: '100%',
                }}
                variant="plain"
                className={classes.card}
              >
                <CardActionArea
                  sx={{
                    borderRadius: 3,
                    p: 1.5,
                    height: '100%',
                  }}
                  component={Link}
                  to={{
                    pathname: `/post/${post.id}`,
                  }}
                >
                  <CardContent className={classes.cardContent}>
                    <Box>
                      <Typography
                        gutterBottom
                        className={classes.cardTitle}
                        sx={{ fontWeight: 600 }}
                        variant="h5"
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 'medium' }}
                        className={classes.cardDescription}
                      >
                        {post.description}
                      </Typography>
                    </Box>
                    <Box className={classes.cardMeta} sx={{ py: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: 'light', letterSpacing: 1 }}
                      >
                        {post.date}
                      </Typography>
                      <Typography variant="caption">
                        {post.views} views
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          {posts.length >= postsPerPage ? (
            <Pagination
              count={Math.ceil(filteredPosts.length / postsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default Blog;
