
import React from 'react'
import { Button, Form, Input, Modal } from "antd";
import ModalAdd from './ModalAdd'


export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isOpenModalAdd, setOpenModalAdd] = React.useState(false);

  const onOpenModalAdd = () => {
    setAnchorEl(null);
    setOpenModalAdd(true);
  };

  const onCloseModalAdd = () => {
    setOpenModalAdd(false);
  };
  return (
    <div className='transition-ease-in-out sticky top-0 grid grid-cols-3 p-6 bg-[rgba(33,33,42,255)] z-50 items-center' style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <i className='fa fa-music mr-5' style={{fontSize:  25,  color: '#fff',}}></i>
          <p style={{fontSize:  25, color: '#fff',  }}>Music Manager</p>
        </div>
        <div>
          <Button style={{ backgroundColor: '#0049C6', color: 'white', padding: '8px 12px', marginLeft: 10 }} onClick={onOpenModalAdd}>
              Thêm nhạc
          </Button>

        </div> 
        
        <ModalAdd
          isOpenModalAdd={isOpenModalAdd}
          onCloseModalAdd={onCloseModalAdd}
        />
      </div>
    
  )
}
