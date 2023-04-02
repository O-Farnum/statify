import React from 'react'
import { useNavigate } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarItems } from './Navbaritems';
import Grid from '@mui/material/Grid';


const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <Grid item xs = {1.78}>
      <Drawer
        variant="permanent"
        anchor="left">

        <List>
          {navbarItems.map((item, index) => (
            <ListItem key={item.id} onClick= {() => navigate(item.route)} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
      </Drawer>
    </Grid>
  
  )
}

export default Navbar