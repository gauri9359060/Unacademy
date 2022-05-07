import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';


export default function InputBox() {
    const [mobile,setMobile] = React.useState("")
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

            <FormControl fullWidth >
                <InputLabel htmlFor="outlined-adornment-amount"> Mobile </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={mobile}
                    onChange={(e) => { setMobile(e.currentTarget.value) }}
                    startAdornment={<InputAdornment position="start">
                        <span>
                            <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" width="20px" style={{ marginRight: "4px" }} alt="" />
                            +91
                        </span>
                    </InputAdornment>}
                    label="Amount"
                />
            </FormControl>
        </Box>
    );
}
