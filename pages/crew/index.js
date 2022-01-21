import Head from 'next/head';
import styles from '../../styles/Crew.module.css';

export default function Crew({ crewData }) {
    const result = []

    for (let i = 0; i < crewData.length; i++) {
        var crew = crewData[i];
        result.push(
            <a href={ crew.wikipedia } target='_blank'>
                <div className={styles.tile}>
                    <img src={`${crew.image}`} className={styles.profilePicture}/>
                    <h2> {crew.name} </h2>
                    <p> Status: {" " + capitalizeFirstLetter(crew.status)}</p>
                    <p> Agency: {" " + crew.agency} </p>
                </div>
            </a>
        )
    }

    return (<>
        <Head>
            <title>SpaceX's Crew</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <div className={styles.container}>
            <div className={styles.headerCard}>
                <h2>Meet SpaceX's Crew</h2>
            </div>
            <div className={styles.scrollBar}>
                {result}
            </div>
        </div>
    </>)
}

export async function getStaticProps({ params }) {
    const req = await fetch('https://api.spacexdata.com/v4/crew');
    const data = await req.json();

    return {
        props: { crewData: data }
    }
}

function capitalizeFirstLetter(status) {
    if (status == 'active') {
        return 'Active';
    } else {
        return 'Inactive';
    }
}