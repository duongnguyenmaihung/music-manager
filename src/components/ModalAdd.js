import React, { useState } from "react";

import AppDialog from "../modal/AppDialog";

import { Grid } from '@mui/material';

import TextField from '@mui/material/TextField';



const ModalGroup = ({
    isOpenModalAdd,
    onOpenModalAdd,
    onCloseModalAdd,
    
}) => {
  
  
  return (
    <AppDialog
      dividers
      maxWidth="md"
      open={isOpenModalAdd}
      onClose={() => onCloseModalAdd()}
      title="Tạo nhạc mới"
    >
            <Grid item xs={12} sm={12} xl={12} md={12}>
                <TextField fullWidth label="Tên bài hát" id="fullWidth" />
             </Grid>
             <Grid item xs={4} sm={4} xl={4} md={4}>
                <TextField fullWidth label="Tiên viết tắt" id="fullWidth" />
             </Grid>
    </AppDialog>
  );
};

export default ModalGroup;