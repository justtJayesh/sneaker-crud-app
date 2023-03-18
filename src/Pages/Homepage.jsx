import { Divider } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { ProductList } from '../Components/ProductList'
import { Sidebar } from '../Components/Sidebar'

export const Homepage = () => {
  return (
    <DIV>
      <div className='sidebarDiv'>
        <Sidebar />
      </div>
      <div className='productDiv'>
        <ProductList />
      </div>
    </DIV>
  )
}


const DIV = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-top: 30px; */

  .sidebarDiv {
    width: 15%;
    border-right: 1px solid lightgray;
    padding: 15px;
  }

  .productDiv {
    margin: auto;
  }
`