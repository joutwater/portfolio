import fetch from 'isomorphic-unfetch'

const Gis = ({ giss }) => {
    // if (giss.publish === true){}
    giss = giss.filter(d => d.publish == true).sort((a, b) => (a.list_ID > b.list_ID) ? 1 : -1);
    return(
    <div className="container">
        <p className="gis_title">GIS</p>
        
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
    </div>
    )
}

export async function getServerSideProps({query}){
    const res = await fetch(process.env.API_URL+'/gis')
    const data = await res.json()
  
    return {
      props: {
        giss: data
      }
    }
  }

export default Gis