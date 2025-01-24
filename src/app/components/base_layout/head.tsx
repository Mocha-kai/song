"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ChangeMode from "@/app/mui/theme/change_mode";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        color: "#00000",
        boxShadow: "0px 2px 4px rgba(255, 255, 255, 0.1)",
        margin: "2 2 2 2",
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* 로고 */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#1976d2",
              textTransform: "none",
            }}
          >
            <Link href="/" underline="none" color="inherit">
              Mablog
            </Link>
          </Typography>

          {/* 네비게이션 메뉴 */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            {/* <Button href="#features" color="inherit" sx={navButtonStyle}>
              WRITE
            </Button> */}
            {/* </Box> */}

            {/* 로그인/가입 버튼 */}
            {/* <Box> */}
            {/* <Button
              href="/login"
              color="inherit"
              sx={{
                fontSize: "0.9rem",
                textTransform: "none",
                fontWeight: "500",
                color: "#00000",
              }}
            >
              Sign in
            </Button> */}
          </Box>
          <ChangeMode />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// 공통 스타일
const navButtonStyle = {
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "none",
  color: "#666666",
  "&:hover": { color: "#000000" },
};
