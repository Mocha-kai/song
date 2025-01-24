"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

const UserId = ({ SetDataFunc }: { SetDataFunc: (s_key: string) => Promise<void> }) => {
  const [value, setValue] = useState<string>("");

  const ClickBtnFunc = () => {
    SetDataFunc(value);
  };
  return (
    <Box sx={{ display: `flex` }}>
      <TextField
        label="s_key"
        variant="outlined" // 'outlined', 'filled', or 'standard'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={ClickBtnFunc}>Click</Button>
    </Box>
  );
};

export default UserId;
