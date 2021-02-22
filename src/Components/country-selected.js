import React from 'react'
import styled from 'styled-components'

const CountrySelectedstyled = styled.div`
  padding: 3em 0;
  img {
    margin-bottom: 2em;
    width: 100%;
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;
  }
  .border-item {
    padding: .5em 2em;
    margin-right: 15px;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    border-radius: 5px;
    display: inline-flex;
    margin-bottom: 15px;
    background: var(--white);
  }
  .languages {
    span {
      &::after {
        content: ', '
      }
      &:last-child {
        &::after {
          display:none;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 5em;
    .grid {
      grid-template-columns: 1fr 1fr
    }
    .borders {
      display: inline-flex;
      margin-right: 1em;
      margin-top: 3.5em;
    }
  }
`

function CountrySelected({ 
  flag, 
  name, 
  nativeName, 
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
}) {
  return (
    <CountrySelectedstyled>
      <img src={flag} alt=""/>
      <div>
        <h1>{name}</h1>
        <div className="grid">
          <div>
            <p><strong>Native Name:</strong> {nativeName}</p>
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Region:</strong> {region}</p>
            <p><strong>Sub Region:</strong> {subregion}</p>
            <p><strong>Capital:</strong> {capital}</p>
          </div>
          <div>
            <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
            <p><strong>Currencies:</strong> {currencies.map((item) => item.name)}</p>
            <p className="languages"><strong>Languages:</strong> {languages.map((item) => <span key={item.name}>{item.name}</span>)}</p>
          </div>
        </div>
        <p className="borders"><strong>Border Countries:</strong></p>
        {borders.map((item) => <span key={item} className="border-item">{item}</span>)}
      </div>
    </CountrySelectedstyled>
  )
}

export default CountrySelected
