import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { Button } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import { mens_kurta } from '../../../Data/Men/men_kurta'
import { useDispatch, useSelector } from 'react-redux'

const HomeSectionCarousel = ({ data, sectionName }) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch()
  const { products } = useSelector(store => store)
  console.log(products)

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  }

  // const slidePrev = () => setActiveIndex(activeIndex - 1);
  // const slideNext = () => setActiveIndex(activeIndex + 1);
  // const syncActiveIndex = ({item}) => setActiveIndex(item);

  const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item}/>)

  useEffect(()=>{

  })

  return (

    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          responsive={responsive}
          // disableButtonsControls
          disableDotsControls
          // onSlideChange={syncActiveIndex}
          // activeIndex={activeIndex}

        />
        {/*{activeIndex !== items.length - 5 &&*/}
        {/*    <Button className="z-50 bg-white" variant="contained"*/}
        {/*             onClick={slideNext}*/}
        {/*             sx={{*/}
        {/*                 position: "absolute",*/}
        {/*                 top: "8rem",*/}
        {/*                 right: "0rem",*/}
        {/*                 transform: "translateX(50%) rotate(90deg)",*/}
        {/*                 bgcolor: "whitesmoke"*/}
        {/*             }} aria-label="next">*/}
        {/*        <ArrowLeftIcon sx={{transform: "rotate(90deg)", color: "black"}}/>*/}
        {/*    </Button>}*/}

        {/*<Button className="z-50 bg-white" variant="contained"*/}
        {/*        onClick={slidePrev}*/}
        {/*        sx={{*/}
        {/*            position: "absolute",*/}
        {/*            top: "8rem",*/}
        {/*            left: "0rem",*/}
        {/*            transform: "translateX(50%) rotate(-90deg)",*/}
        {/*            bgcolor: "whitesmoke"*/}
        {/*        }} aria-label="next">*/}
        {/*    <ArrowLeftIcon sx={{transform: "rotate(90deg)", color: "black"}}/>*/}
        {/*</Button>*/}
      </div>
    </div>
  )

}

export default HomeSectionCarousel
