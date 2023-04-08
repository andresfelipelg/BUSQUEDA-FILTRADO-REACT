import React from 'react'

export const Barra = ({searcher, search}) => {
  return (
    <>
        <input type="text" 
        className="form-control mt-3" 
        placeholder="search" 
        onChange={searcher}
        value={search}  />
    </>
  )
}
