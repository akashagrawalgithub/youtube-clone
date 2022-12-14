import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from "../utils/contants";
import SearchBar from './SearchBar';
export default function Navbar() {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'fixed', background: '#000', top: "0px", justifyContent: 'space-between' }}>
      <Link to="/" style={{display:'flex',alignItems:'center'}}>
        <img src={logo} alt="logo" height={45}/>
        {/* Logo and on click user visit the original website */}
      </Link>
      <SearchBar/>
    </Stack>
  )
}
