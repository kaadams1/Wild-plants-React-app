import Image from "next/image";
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div>
            <h1 className={styles.title}>About</h1>
            <h2 className={styles.subtitle}>
                My very first app using Next.JS and React!
            </h2>
            <p className={styles.text}>
                With a background in Python and a little vanilla JavaScript, I set out to make
                a site that would push me out of my comfort zone. A couple days of research and
                several tutorials later, Little Green was born.
            </p>
            <img className={styles.meadow} src="https://www.woodlandtrust.org.uk/media/47621/meadowsweet-flowering-damp-lowland-hay-meadow-naturepl-01464819-nick-upton.jpg" />
        </div>

    );
}
 
export default About;