import React from 'react'
import {Stack} from '@mui/material'
import {categories} from '../utils/contants'
export default function Sidebar() {
  return (
    <Stack direction="row" sx={{overflowY:"auto",height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
        {categories.map((catergory)=>(
            <button className="catergory-btn">
                <span>{catergory.icon}</span>
                <span>{catergory.name}</span>
            </button>
        ))}
    </Stack>
  )
}
