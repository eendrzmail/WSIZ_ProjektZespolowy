import React from 'react'
import { Route, Routes } from 'react-router'
import { Wrapper } from './AppPage.styled'
import { ROUTING } from './utils/const'

type Props = {}

const AppPage = (props: Props) => {
  return (
    <Wrapper>
        <Wrapper>AppPage</Wrapper>
        <Routes>
            {ROUTING.map(page => (
                <Route path={page.path} element={page.component} />
            ))}
        </Routes>
    </Wrapper>
  )
}

export default AppPage