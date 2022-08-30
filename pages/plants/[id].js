import plants from '../../data/plants.json';

export default function Plant({ plant }) {
    return (
        <div>
            <img src={plant.image_url} />
            <h1>Common name: { plant.common_name }</h1>
            <p>Scientific name: { plant.scientific_name }</p>
            <p>Family name: { plant.family_name }</p>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = plants.map(plant => {
        return {
            params: { id: plant.id.toString() }
        }
    })
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    console.log(params) // { id: '1' }

    const plant = plants.find(plant => plant.id === Number(params.id));

    console.log(typeof plants) // object
    plants.forEach(plant => { console.log(plant.id, params.id, typeof plant.id, typeof params.id) })

    console.log(plant) // undefined

    return { 
        props: { plant }
    }
}