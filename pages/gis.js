import fetch from 'isomorphic-unfetch'

const Gis = ({ giss }) => {

    return(
    <div className="container">
        <p className="gis_title">GIS PROJECTS</p>

      {giss.map((gis, i) => (
        <div>
        <div className="gis_image">
        <img id={gis.list_ID} src={gis.image[0].url} width="750px" alt=""/>
        </div>
        <span className="gis_description" key={gis.id}>
        <p id={gis.list_ID} href={"/gis/"}>{gis.description}</p><br></br>
        </span>
        </div>
      ))}

    {/* <div className="blurb_holder">
      <span>{datavisualizations[isShown].blurb}</span>
    </div> */}
    {/* <div className="image_holder">
      <img id={gis.list_ID} src={giss.image.url} width="750px" alt=""/>
    </div> */}
    </div>
    )

}

export async function getServerSideProps({query}){
    const res = await fetch(process.env.API_URL+'/gis')
    // const res2 = await fetch(process.env.API_URL+'/data-visualizations?slug='+query.slug)
    const data = await res.json()
  
    return {
      props: {
        giss: data
      }
    }
  }

export default Gis