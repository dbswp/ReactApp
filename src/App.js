/* eslint-disable*/
import React, { useState } from 'react';
import './App.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const btnStyle = {
  color: "white",
  background: "teal",
  padding: ".375rem .75rem",
  border: "1px solid teal",
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  cursor: "pointer",
  width:"60%",
  height:"150px",
};

const btnStyle2 = {
  color: "white",
  background: "teal",
  padding: ".25rem  1rem",
  border: "1px solid teal",
  width: "100%",
  height: "60px",
  borderRadius: "0.25rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  cursor: "pointer",
};

function ClickMe(props){
  window.location.assign('./mainmenu.html');
}

function ClickMe2(props){
  window.location.assign('./broad.html');
}

function ClickMe3(props){
  window.location.assign('./setting.html');
}
function ClickMe4(props){
  window.location.assign('./setting.html');
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

 function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Buttonmain(props){
  return(
    <div className='main-background'>
      <div className='main'>
        <div className='button-main-background'>
          <div className='button-main'>
            <button style={btnStyle} onClick={ClickMe}>메인 메뉴</button>
          </div>
        </div><br></br>
        <div className='button-setting'>
            <button style={btnStyle} onClick={ClickMe2}>환경 설정</button>
        </div><br></br>
        <div className='button-broad'>
            <button style={btnStyle2} onClick={ClickMe3}>게시판</button>
        </div>
        <div className='button-broad'>
            <button style={btnStyle2} onClick={ClickMe4}>게시판</button>
        </div>
      </div>
    </div>
  );
}

function App(){

  return(
    <div className="App">
        <SearchAppBar></SearchAppBar>
      <section>
        <Buttonmain></Buttonmain>
      </section>
    </div>
  );
}

export default App;