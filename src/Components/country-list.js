import React, { useEffect } from 'react'
import styled from 'styled-components'
import Country from './Country'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from './wrapper'

const CountryListStyled = styled.div`
  display: grid;
  grid-auto-flow: columns;
  grid-row-gap: 2.3em;
  grid-column-gap: 75px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  padding: 3em 0em;
  justify-content: center;
`

function CountryList() {
  const dispatch = useDispatch()

  const countryListByName = useSelector((state) => state.countryListByName)

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) {
      return state.coutryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName
    }

    return state.countryList;
  })

  useEffect(() => {
    fechData()
  }, [])
  
  const fechData = async() => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all')
    const data = response.data
    dispatch({
      type: 'SET_COUNTRY_LIST',
      payload: data
    })
    //setCountryList(data)
  }

  return (
    <Wrapper>
      <CountryListStyled>
        {
          countryList.map((country) => {
            return (
              <Country
                key={country.numericCode}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                alpha2Code={country.alpha2Code}
                />
            )
          })
        }
      </CountryListStyled>
    </Wrapper>
  )
}

export default CountryList
