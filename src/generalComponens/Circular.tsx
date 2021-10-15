import React,{FC, memo} from 'react'
import {CircularProgress} from "@mui/material";

export const Circular:FC = memo(() => {

return (
        <div>
            <CircularProgress color="inherit" />
        </div>
    )
})
