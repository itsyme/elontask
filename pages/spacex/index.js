import Head from 'next/head';
import styles from "../../styles/SpaceX.module.css";

export default function spaceX({ companyData, latestLaunchData }) {
    return (
        <div className={styles.background}>
            <Head>
                <title>SpaceX</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.about}>
                <img src="/spacex.png" className={styles.spaceXLogo}/>
                <h3> Location: {companyData.headquarters.city}, {companyData.headquarters.address}</h3>
                <p>{ companyData.summary}</p>
            </div>
            <div className={styles.nextLaunch}>
                <h1> Latest Launch: {latestLaunchData.name} </h1>
                <h2> Launch {latestLaunchData.success ? "Success!" : "Failure"}</h2>
                <h3> Date: {latestLaunchData.date_local}</h3>
                <p><a href={`${latestLaunchData.links.webcast}`} target="_blank">Web Cast</a></p>
                <p>Details: {latestLaunchData.details != null ? latestLaunchData.details : "Details Unavailable"}</p>
            </div>
            <footer>
                Elon's other companies:
            </footer>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const req = await fetch(`https://api.spacexdata.com/latest/company`)
    const data = await req.json();

    const req2 = await fetch(`https://api.spacexdata.com/v5/launches/latest`)
    const data2 = await req2.json();

    return {
        props: { companyData: data, latestLaunchData: data2 }
    }
}