import React from "react";
import { Box, Modal as MuiModal } from "@mui/material";

interface ModalProps {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
  size: string;
}

const MakePopUp = ({ open, close, children, size }: ModalProps) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: size,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  };

  return (
    <MuiModal open={open} onClose={close} aria-labelledby="modal-title">
      <Box sx={style}>{children}</Box>
    </MuiModal>
  );
};

export default MakePopUp;
