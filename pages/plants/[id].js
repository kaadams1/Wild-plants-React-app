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
    const plant = plants.find(plant => plant.id === params.plant)
    return { props: { plant }}
}