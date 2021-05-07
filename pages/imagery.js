import fetch from 'isomorphic-unfetch'

const Imagery = ({ imageries }) => {
    imageries = imageries.filter(d => d.publish == true).sort((a, b) => (a.list_ID > b.list_ID) ? 1 : -1);
    return(
    <div className="container">
        <p className="gis_title">IMAGERY</p>

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
    </div>
    )

}

export async function getServerSideProps({query}){
    const res = await fetch(process.env.API_URL+'/imageries')
    const data = await res.json()
  
    return {
      props: {
        imageries: data
      }
    }
  }

export default Imagery