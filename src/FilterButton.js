import React from 'react'

import { Stack, Button } from '@mui/material'

const FilterButton = () => {
  return (
    <Stack spacing={2} direction="row" sx={{mt: 1}}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
        return <Button variant="outlined" color="primary" key={index}>Hello{index}</Button>
      })}
    </Stack>
  )
}

export default FilterButton
