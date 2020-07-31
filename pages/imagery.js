import fetch from 'isomorphic-unfetch'

const Imagery = ({ imageries }) => {
    imageries.sort((a, b) => (a.list_ID > b.list_ID) ? 1 : -1);
    return(
    <div className="container">
        <p className="gis_title">IMAGERY WORK</p>

      {imageries.map((imagery, i) => (
        <div>
        <div className="gis_image">
        <img id={imagery.list_ID} src={imagery.image[0].url} width="750px" alt=""/>
        </div>
        <span className="gis_description" key={imagery.id}>
        <p id={imagery.list_ID} href={"/gis/"}>{imagery.description}</p><br></br>
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
    const res = await fetch(process.env.API_URL+'/imageries')
    // const res2 = await fetch(process.env.API_URL+'/data-visualizations?slug='+query.slug)
    const data = await res.json()
  
    return {
      props: {
        imageries: data
      }
    }
  }

export default Imagery