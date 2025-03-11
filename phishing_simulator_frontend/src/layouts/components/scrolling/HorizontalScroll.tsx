import React, { useState, useRef, useEffect } from 'react'
import { Box, Grid, styled } from '@mui/material'

interface ScrollProps {
  children: React.ReactNode
}

interface ScrollElementGridProps {
  handleScroll: (event: React.MouseEvent<HTMLDivElement>) => any
  scrollRef: any
  width: number
  allItemsWidth: number
}

const GridWithScrolling = styled('div')(({ theme }) => ({
  '.customScrollBar': {
    overflowX: 'auto',
    height: '10px'
  },
  '.customScrollBar::-webkit-scrollbar': {
    height: '10px'
  },
  '.customScrollBar::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.action.disabledBackground
  },
  '.customScrollBar::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '6px'
  },
  '.scrollElementClassName': {
    scrollbarWidth: 'none'
  }
}))

export const HorizontalScroll: React.FC<ScrollProps> = ({ children }) => {
  const [scrollX, setScrollX] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const firstDivRef = useRef<HTMLDivElement>(null)
  const childRef = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(0)
  const [allItemsWidth, setAllItemsWidth] = useState(0)

  useEffect(() => {
    if (firstDivRef.current) {
      if (childRef.current) {
        setAllItemsWidth(childRef.current.offsetWidth)
      }
      const firstDivWidth = firstDivRef.current.offsetWidth
      setWidth(firstDivWidth)
    }
  }, [])

  const handleScroll = (event: React.MouseEvent<HTMLDivElement>) => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollRef.current.scrollLeft = (event.target as any)?.scrollLeft

      const newScrollX = scrollElement.scrollLeft
      setScrollX(newScrollX)
    }
  }

  return (
    <GridWithScrolling sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Grid className='scrollElementClassName' sx={{ overflowX: 'hidden' }} onScroll={handleScroll} ref={firstDivRef}>
        <div>
          <Box
            sx={{
              display: 'inline-flex',
              transform: `translateX(-${scrollX}px)`
            }}
            ref={childRef}
          >
            {children}
          </Box>
        </div>
      </Grid>
      <ScrollElementGrid
        scrollRef={scrollRef}
        width={width}
        handleScroll={handleScroll}
        allItemsWidth={allItemsWidth}
      />
    </GridWithScrolling>
  )
}

export const ScrollElementGrid = ({ scrollRef, width, handleScroll, allItemsWidth }: ScrollElementGridProps) => {
  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1rem' }}>
      <Grid ref={scrollRef} sx={{ width: width / 2 }} className='customScrollBar' onScroll={handleScroll}>
        <Grid sx={{ width: (allItemsWidth + allItemsWidth - width) / 2 }}></Grid>
      </Grid>
    </Grid>
  )
}
