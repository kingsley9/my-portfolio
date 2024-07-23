import React from 'react';
import Typography from '@mui/material/Typography';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const components = {
  h1: ({ children }) => (
    <Typography
      gutterBottom
      variant={{ sm: 'h2', md: 'h1' }}
      component="h1"
      mb={3}
      fontWeight={'bold'}
      style={{
        fontFamily:
          'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      }}
    >
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography
      gutterBottom
      fontWeight={'bold'}
      variant={{ sm: 'h3', md: 'h2' }}
      component="h2"
      mb={3}
      style={{
        fontFamily:
          'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      }}
    >
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      gutterBottom
      fontWeight={'bold'}
      variant={{ sm: 'h4', md: 'h3' }}
      mb={3}
      component="h3"
      style={{
        fontFamily:
          'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      }}
    >
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography
      gutterBottom
      variant={{ sm: 'h5', md: 'h4' }}
      mb={3}
      component="h4"
      style={{
        fontFamily:
          'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      }}
    >
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography
      gutterBottom
      variant="body1"
      component="p"
      lineHeight={2}
      mb={3}
      style={{
        fontFamily:
          'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        color: '#7d7d7d',
        paddingLeft: '1px',
        paddingRight: '1px',
      }}
    >
      {children}
    </Typography>
  ),
  li: ({ children }) => (
    <Typography
      variant="body1"
      gutterBottom
      component="li"
      mb={3}
      style={{
        paddingRight: '10px',
      }}
    >
      {children}
    </Typography>
  ),
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={atomDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export { components };
