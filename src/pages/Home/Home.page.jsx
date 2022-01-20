// Components
import React, { useContext } from 'react'
import { HomeContainer, HomeSubheader } from './Home.styled'
import ItemList from '../../components/ItemList'
import useApiCall from '../../utils/hooks/useApiCall'

// Context
import { GlobalContext } from '../../providers/Global/Global.provider'

function HomePage() {
  // Use Context
  const { searchParam, darkTheme } = useContext(GlobalContext)
  const { data, loading } = useApiCall(`/search?q=${searchParam}`)

  // Functions

  return loading ? (
    '...Loading'
  ) : (
    <HomeContainer darkTheme={darkTheme}>
      <HomeSubheader>Welcome to Wize Tube!</HomeSubheader>
      <ItemList redirectLink={'/video'} items={data} />
    </HomeContainer>
  )
}

export default HomePage
