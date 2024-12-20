"use client"

import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { useRouter } from "next/navigation";


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <main>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', gap: "3px" }}>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar src={''} alt="profile"/>
                </IconButton>
            </Tooltip>
            <div className="hidden xl:flex flex-col items-start leading-4">
                <p className='dark:text-lightGray'>Mallan Tanko</p>
                <p className='text-primary-green'><strong>Admin</strong></p>
            </div>
        </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <IoSettingsSharp/>
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => {
              router.push("/");
            }}>
          <ListItemIcon>
            <HiOutlineLogout/>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </main>
  );
}

