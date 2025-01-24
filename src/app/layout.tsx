import * as React from "react";

//npm install @mui/material-nextjs @emotion/cache
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/app/mui/theme/theme_mui";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

import Header from "./components/base_layout/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
