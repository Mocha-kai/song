import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography, Box } from "@mui/material";

const MarkdownViwer = ({ id, title, content }: { id: string; title: string; content: string }) => {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <Typography variant="h4" gutterBottom {...props} />,
            h2: ({ node, ...props }) => <Typography variant="h5" gutterBottom {...props} />,
            p: ({ node, ...props }) => <Typography variant="body1" paragraph {...props} />,
            li: ({ node, ...props }) => <Typography component="li" variant="body1" sx={{ marginLeft: 2 }} {...props} />,
          }}
        >
          {id}
        </ReactMarkdown>
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <Typography variant="h4" gutterBottom {...props} />,
            h2: ({ node, ...props }) => <Typography variant="h5" gutterBottom {...props} />,
            p: ({ node, ...props }) => <Typography variant="body1" paragraph {...props} />,
            li: ({ node, ...props }) => <Typography component="li" variant="body1" sx={{ marginLeft: 2 }} {...props} />,
          }}
        >
          {title}
        </ReactMarkdown>
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <Typography variant="h4" gutterBottom {...props} />,
            h2: ({ node, ...props }) => <Typography variant="h5" gutterBottom {...props} />,
            p: ({ node, ...props }) => <Typography variant="body1" paragraph {...props} />,
            li: ({ node, ...props }) => <Typography component="li" variant="body1" sx={{ marginLeft: 2 }} {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </Box>
    </>
  );
};

export default MarkdownViwer;
