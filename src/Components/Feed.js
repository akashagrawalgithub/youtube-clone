import React from 'react'
import {useState,useEffect} from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Sidebar from "./Sidebar"
export default function Feed() {
  return (
    // this part content the sidebar as well as the main feed area
    // the box will wrap the side bar ans the feed arae as teh div with display flex property
    <Stack sx={{flexDirection:{sx:"column",md:"row"},background: '#000'}}>
      <Box sx={{height:{sx:'auto',md:"92vh"},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        {/* SideBar */}
        <Sidebar/>
        <Typography className="copyright"
        variant="body2"sx={{mt:1.5,color:'#fff'}}>
          Copyright 2022 Akash
        </Typography>
      </Box>
    </Stack>
  )
}
