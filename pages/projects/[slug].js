import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Project = ({ project }) => {
  // console.log(projects)
  return(
    <div className="container" background-color="#efefef">
      <div className="title">
        {project.title}
      </div>
      <div className="process">
        {project.process}
      </div>
      <div className="live_site">
      <a href={project.link2}>LIVE SITE</a>
      </div>
      <div className="documentation">
      <a href={project.link}>DOCUMENTATION</a>
      </div>
      <div className="image">
      {project.image.map(image => (
        <img src={process.env.API_URL + image.url} width="800px" alt="" />
      ))}
      </div>
      <div className="video">
        {project.video.map(video => (
          <video width="800" autoPlay loop>
            <source src={process.env.API_URL + video.url}></source>
          </video>
          ))} 
      </div>
    </div>
  )
  }
Project.getInitialProps = async ({query}) => {
  const res = await fetch(process.env.API_URL+'/projects?slug='+query.slug)
  const data = await res.json()
  return{
    project:data[0]
  }

}

export default Project