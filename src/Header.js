import React, {useEffect, useState} from 'react';

import { Link as RouterLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WifiIcon from '@mui/icons-material/Wifi';
import WifiOffIcon from '@mui/icons-material/WifiOff';

import { YOUTUBE_SEARCH_API } from './utils/constants';
import useOnline from './utils/useOnline';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const isOnline = useOnline();

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSearchSuggestion(json?.[1]);
  }

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} >
            <RouterLink to={'/'}>
              <img
                src={'https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png'}
                alt='Logo'
                width={'100px'}
              />
            </RouterLink>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={searchSuggestion.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  size="small"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              )}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Button>Search</Button>
          </Box>
          <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
            <IconButton
              aria-label="menu"
            >
              {isOnline ? <WifiIcon color='primary' /> : <WifiOffIcon />} 
            </IconButton>
            <IconButton
              aria-label="menu"
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
