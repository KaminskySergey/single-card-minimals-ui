'use client'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
interface ISelectField { 
  name: string
  value: string[]
}


export default function SelectField({ name, value }: ISelectField) {
  return <div className='grow flex flex-col gap-1'>
    <div className='text-[#101D62] text-[14px] font-bold'>
      <p>{name}</p>
    </div>
    <TextField
      className='w-full p-0 select text-[#101D62]'
      id={name}
      select
      defaultValue={value[0]}
    >
      {value.map((el) => (
        <MenuItem key={el} value={el} >
          {el}
        </MenuItem>
      ))}
    </TextField>
  </div>
}
