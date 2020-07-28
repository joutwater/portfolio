import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import BarSlot from 'components/BarSlot'
import Link from 'next/link'
import React, { useState } from 'react';

const Home = ({ datavisualizations }) => {
  const[isShown, setIsShown] = useState(false);
  console.log(datavisualizations[0].title);
  return(
    <div className="container">
        <BarSlot datavisualizations={datavisualizations} index={isShown}/>
    <div className="link_container">
      {datavisualizations.map((datavisualization, i) => (
        <span className="project_links" key={datavisualization.list_ID}
        onMouseEnter={() => {
          setIsShown(i);
        }}
        onMouseLeave={() => {
          setIsShown(false);
        }} >
        <a id={datavisualization.list_ID} href={"/data-visualizations/" + datavisualization.slug}>{datavisualization.title}</a><br></br>
        </span>
      ))}
    </div>
    {isShown!==false && (
    <div className="blurb_holder">
      <span>{datavisualizations[isShown].blurb}</span>
    </div>
    )}
    {isShown!==false && (
    <div className="image_holder">
      <img id={datavisualizations[isShown].list_ID} src={process.env.API_URL + datavisualizations[isShown].image[0].url} width="750px" alt=""/>
    </div>
    )}
    </div>
  )
  }

  export async function getServerSideProps({query}){
    const res = await fetch(process.env.API_URL+'/data-visualizations')
    const res2 = await fetch(process.env.API_URL+'/data-visualizations?slug='+query.slug)
    const data = await res.json()
  
    return {
      props: {
        datavisualizations: data
      }
    }
  }

export default Home
