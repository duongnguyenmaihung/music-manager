import React, { ReactNode } from "react";
import { Dialog, DialogTitle, Slide, Theme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Breakpoint, SxProps } from "@mui/system";


interface AppDialogProps {
  maxWidth?: Breakpoint;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string | ReactNode;
  dividers?: boolean;
  hideClose?: boolean;
  fullHeight?: boolean;
  actionTitle?: string;
  sxStyle?: SxProps<Theme>;
}

const AppDialog: React.FC<AppDialogProps> = ({
  sxStyle,
  maxWidth = "sm",
  hideClose = false,
  open,
  onClose,
  children,
  dividers = false,
  title,
  actionTitle,
  fullHeight = false,
}) => {
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
        },
        "& .MuiDialogContent-root": {
          overflowY: "hidden",
          paddingLeft: 0,
          paddingRight: 0,
        },
        ...sxStyle,
      }}
      maxWidth={maxWidth}
      open={open}
      onClose={onClose}
    >
      <DialogTitle
        sx={{
          color: '#1B1D21',
          fontSize: 18,
        }}
        id="app-dialog-title"
      >
        {title}
        {hideClose ? null : (
          <IconButton
            aria-label="close"
            sx={{
              position: "absolute",
              right: 16,
              top: 10,
              color: "grey.500",
            }}
            onClick={onClose}
            size="large"
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers={dividers}>
          {children} 
      </DialogContent>
      {actionTitle ? (
        <DialogActions>
          <Button color="primary" variant="contained" type="submit">
            {actionTitle}
          </Button>
        </DialogActions>
      ) : null}
    </Dialog>
  );
};
export default AppDialog;
