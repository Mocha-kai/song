import React, { useState, ChangeEvent } from "react";
import { TextField, Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownWrite({ setText }: { setText: React.Dispatch<React.SetStateAction<string>> }) {
  const [markdown, setMarkdown] = useState<string>("");

  const HandleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setMarkdown(event.target.value);
    setText(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          p: 2,
        }}
      >
        <Box sx={{ flex: 1, width: "400px" }}>
          <Typography variant="h6" gutterBottom>
            Markdown
          </Typography>
          <TextField label="Markdown" multiline variant="outlined" fullWidth value={markdown} onChange={HandleChange} />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Markdown Preview
          </Typography>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
            }}
          >
            <ReactMarkdown
              components={{
                code: ({ inline, className, children, ...props }: any) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter style={materialLight} language={match[1]} PreTag="div" {...props}>
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {markdown}
            </ReactMarkdown>
          </Box>
        </Box>
      </Box>
    </>
  );
}
