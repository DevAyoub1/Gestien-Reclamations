// import React, { useState } from 'react'
// import './sidebar.css'
// import {useNavigate} from 'react-router-dom'
// import SignalCellularAltSharpIcon from '@mui/icons-material/SignalCellularAltSharp';
// import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
// import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
// import SettingsIcon from '@mui/icons-material/Settings';
// import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import PersonIcon from '@mui/icons-material/Person';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import { Link, Outlet } from 'react-router-dom';



// export default function SidebarAdmin() {
//   const navigate=useNavigate()
//   const logout=async()=>{
//      try {
//       await Axios.post('/logout')
//       navigate('/')

//      } catch (error) {
      
//      }
//   }
//   return (
//     <div className='side' id='side' >
//       <div className='logo'>
//         <Link to={'/'}><img id="lg" src='/258541.svg'></img></Link>
//       </div>
//       <hr></hr>
//       <div className='side-list'>
        
          
//             <Link to={"/"}><a><i><SignalCellularAltSharpIcon className='icons' /><span>Dashboard</span></i></a></Link>
//             <Link to={'/client'}><a><PeopleAltSharpIcon className='icons'/><span>Client</span></a></Link>
//             <Link to={"/reclamation"}><a><AssignmentIcon className='icons'/><span>Reclamation</span></a></Link>
//             <Link to={"/parametre/:id"}><a><SettingsIcon className='icons'/><span>Parametres</span></a></Link>
            
//             <div className='buttom'><hr/>
//            <Link to={"#"} onClick={logout}><a><LoginIcon className='icons'/><span>Logout</span></a></Link>
//             <Link to={"/login"}><a><PersonAddIcon className='icons'/><span>Register</span></a></Link>
//             </div>
//             <div><Outlet/></div>
        
//       </div>
      
      
//     </div>
//   )
// }

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AccountCircle, AccountTree, Home, Login, Logout, Person, RequestPage, RequestPageRounded, SearchOutlined, Settings } from '@mui/icons-material';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import '../../Navbar/navbar.css'
import ReclamationApi from '../../ContextApi/ReclamationApi';
import { useEffect, useState } from 'react';
import { UserContext } from '../../ContextApi/ContexteApi';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import { confirmAlert } from 'react-confirm-alert';
import { Button, Menu, MenuItem } from '@mui/material';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function SidebarGuest() {
  
  const navigate=useNavigate()
  const {authenticated,setUser,setAuthenticated,logout:contextLogout,user} =UserContext()
  const [isLoading, setIsLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  
  
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogoutConfirmation = () => {
    confirmAlert({
      title: 'Logout Confirmation',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            logout();
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };
  
  const logout = async () => {
   
   await ReclamationApi.logout().then(() => {
      setAuthenticated(false);
      navigate('/login')
    }).catch((e) => {
      console.error(e);
  })}
  
  

  useEffect(() => {
    if (authenticated === true) {
      setIsLoading(false)
      ReclamationApi.getUser().then(({data}) => {
        setUser(data)
        setAuthenticated(true)
      }).catch((reason) => {
        contextLogout()
      })
    } else {
      navigate('/login')
    }

  }, [authenticated]);

  if (isLoading) {
    return <></>
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
       
       
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div">
            Menu
          </Typography>
          
          <Typography variant="h6" noWrap component="div">
            
         

    <Stack direction="row" spacing={2} style={{marginLeft:"1100px"}}>
    <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <Avatar
        sx={{ bgcolor: "white" }}
        style={{color:"black",marginLeft:"150px"}}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
         
    {
      user && user.email ? user.email.charAt(0).toUpperCase() :null
    }

      </Avatar></Button></Stack>
      <Stack><Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open1}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      ><Box sx={{ p: '16px 20px ' }}>
      <Typography variant="subtitle1">{`${user.nom} ${user.prenom}`}</Typography>
      <Typography color="text.secondary" variant="body2">
        {user.email}
      </Typography>
    </Box>
    <Divider />
        <Link to={'/profile'}><MenuItem onClick={handleClose}><Person/>Profile</MenuItem></Link>
        <Link to={`/UserEdit/${user.id}`}><MenuItem onClick={handleClose}><Settings/> Parametre</MenuItem></Link>
        <MenuItem onClick={handleLogoutConfirmation}><Logout/> Logout</MenuItem>
      </Menu></Stack>
      {/* <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      /> */}
      {/* <Avatar src="/broken-image.jpg" /> */}
    
  

            </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
         <Link to='/UserHome'> {['Home'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index  === 0 ? <Home /> : ""}
                 <Outlet/>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}</Link>
        </List>
        <Divider />
        <List>
        <Link to='/profile' user={user}>  {['Profile'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 {index === 0 ? <Person /> :""}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}</Link> 
        </List>
        <Divider />
        <List>
          <Link to='/reclamationUser'> {['Reclamation'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                {index === 0 ? <AssignmentIcon /> :""}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}</Link>
        </List>
        <Divider />
        <List>
         <Link to='/Usersurggestion'> {['Suggertions'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 {index === 0 ? <RequestPageRounded /> :""}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}</Link>
        </List> <Divider />
        
        <List>
         <Link to='/UserObservation'> {['Observations'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 {index === 0 ? < BorderColorSharpIcon /> :""}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}</Link>
        </List>
        <List>
          <Link to={"#"} onClick={handleLogoutConfirmation}> {['Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                {index === 0 ? <Logout /> :""}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}</Link>
        </List>
     
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
      </Main>
    </Box>
  );
}

