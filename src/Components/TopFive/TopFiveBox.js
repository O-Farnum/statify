import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box  from '@mui/system/Box';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const TopFiveBox = ({children}) => {
    return (
        <Box xs = {3}
          sx={{
            backgroundColor: '#1E1E1E',
            border: 2,
            borderColor: 'secondary.main',
          }}
          >
           <Stack>
            <Item>{children}</Item>
            <Item>{children}</Item>
            <Item>{children}</Item>
            <Item>{children}</Item>
            <Item>{children}</Item>
           </Stack>
        </Box>  
  )
}

export default TopFiveBox