// import fetch from 'isomorphic-unfetch'
// import Card from 'components/Card'
// import BarSlot from 'components/BarSlot'
// import Link from 'next/link'
// import React, { useState } from 'react';

// const Home = ({ projects }) => {
//   const[isShown, setIsShown] = useState(false);
//   console.log(projects);
//   return(
//     <div className="container">
//         <BarSlot projects={projects} index={isShown}/>
//     <div className="link_container">
//       {projects.map((project, i) => (
//         <span className="project_links" key={project.id}
//         onMouseEnter={() => {
//           setIsShown(i);
//         }}
//         onMouseLeave={() => {
//           setIsShown(false);
//         }} >
//         <a id={project.id} href={"/projects/" + project.slug}>{project.title}</a><br></br>
//         </span>
//       ))}
//     </div>
//     {isShown!==false && (
//     <div className="blurb_holder">
//       <span>{projects[isShown].blurb}</span>
//     </div>
//     )}
//     {isShown!==false && (
//     <div className="image_holder">
//       <img id={projects[isShown].id} src={process.env.API_URL + projects[isShown].image[0].url} width="750px" alt=""/>
//     </div>
//     )}
//     </div>
//   )
//   }

//   export async function getServerSideProps({query}){
//     const res = await fetch(process.env.API_URL+'/projects')
//     const res2 = await fetch(process.env.API_URL+'/projects?slug='+query.slug)
//     const data = await res.json()
  
//     return {
//       props: {
//         projects: data
//       }
//     }
//   }

// export default Home
