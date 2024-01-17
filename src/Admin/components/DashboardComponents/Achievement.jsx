import React from 'react'
import { Button, Card, CardContent, styled } from '@mui/material'
import Typography from '@mui/material/Typography'

const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

const TrophyImg = styled('img')({
  right: 36,
  bottom: 5,
  height: 150,
  position: 'absolute'
})
const Achievement = () => {
  return (
    <div>
      <Card clasName="space-y-5" sx={{ position: 'relative', bgcolor: '#6c7a89',color:"white" }}>
        <CardContent>
          <Typography variant="h6" sx={{ letterSpacing: '.25px' }}>
            Shop With Hieu
          </Typography>
          <Typography variant="body2">Congratulations</Typography>
          <Typography variant="h5" sx={{ my: 3.1 }}> 420.8k </Typography>

          <Button size="small" variant="contained">
            View Sales
          </Button>

          <TriangleImg src=""></TriangleImg>
          <TrophyImg
            src="https://media.istockphoto.com/id/1176397624/vector/vector-flat-golden-trophy.jpg?s=612x612&w=0&k=20&c=kjnN3SB3l1cAMMt5xUvnyJDfPzQKzZ_pZHt3jaFnmF0="></TrophyImg>
        </CardContent>
      </Card>
    </div>
  )
}

export default Achievement
