import Link from 'next/link';
import styles from '../../styles/Plants.module.css';
import plants from '../../data/plants.json';


export default function mapPlants() {
    return (
        <div >
            <h1>Some Lesser-Known Wild Plants</h1>
            {plants.map(plant => (
                <Link href={'/plants/' + plant.id} key={plant.id}>
                    <a className={styles.single}>
                        <h3>{ plant.common_name }</h3>
                    </a>
                </Link>   
            ))}
        </div>
    );
}

