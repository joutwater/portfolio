import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Datavisualization = ({ datavisualization }) => {
  // console.log(projects)
  return(
    <div className="container" background-color="#efefef">
      <div className="title">
        {datavisualization.title}
      </div>
      <div className="process">
        {datavisualization.process}
      </div>
      <div className="live_site">
      <a href={datavisualization.link2}>LIVE SITE</a>
      </div>
      <div className="documentation">
      <a href={datavisualization.link}>DOCUMENTATION</a>
      </div>
      <div className="image">
      {datavisualization.image.map(image => (
        <img src={image.url} width="800px" alt="" />
      ))}
      </div>
      <div className="video">
        {datavisualization.video.map(video => (
          <video width="800" autoPlay loop>
            <source src={video.url}></source>
          </video>
          ))} 
      </div>
    </div>
  )
  }
Datavisualization.getInitialProps = async ({query}) => {
  const res = await fetch(process.env.API_URL+'/data-visualizations?slug='+query.slug)
  const data = await res.json()
  return{
    datavisualization:data[0]
  }

}

export default Datavisualization