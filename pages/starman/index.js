import Head from 'next/head';
import styles from "../../styles/Starman.module.css";

export default function starman({ starmanData }) {
    return (
        <>
            <Head>
                <title>Locate Starman</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.container}>
                
                {/* Card containing details of Starman */}
                <div className={styles.card}>
                    <h1> Starman </h1>
                    <p> {starmanData.details} </p>
                    <p> Starman was launched on {formatDate(starmanData.launch_date_utc.substring(0,10))}</p>
                    <p> 
                        Starman is currently moving at {Math.round((starmanData.speed_kph + Number.EPSILON) * 100) / 100} kilometers per hour,
                        {" " + Math.round(starmanData.earth_distance_km/1000000)} million kiometers away from Earth.
                    </p>
                </div>

                {/* Starman's Launch Youtub Video Card */}
                <div className={styles.videoCard}>
                    <h2> {`Watch Starman's Launch`} </h2>
                    <iframe className={styles.video} src={`https://www.youtube.com/embed/${starmanData.video.substring(17)}`} allow='fullscreen'/>
                </div>
            </div>
        </>
    )
}

// Get data from API
export async function getStaticProps({ params }) {
    const req = await fetch('https://api.spacexdata.com/v4/roadster');
    const data = await req.json();

    return {
        props: { starmanData: data }
    }
}

// Function to format date to an easier to read form
function formatDate(date) {
    var month = date.substring(5,7);
    var day = date.substring(8,10);
    var year = date.substring(0,4)
    var stringMonth = '';
    switch(month) {
        case '01':
            stringMonth = 'January';
            break;
        case '02':
            stringMonth = 'Febraury';
            break;
        case '03':
            stringMonth = 'March';
            break;
        case '04':
            stringMonth = 'April';
            break;
        case '05':
            stringMonth = 'May';
            break;
        case '06':
            stringMonth = 'June';
            break;
        case '07':
            stringMonth = 'July';
            break;
        case '08':
            stringMonth = 'August';
            break;
        case '09':
            stringMonth = 'September';
            break;
        case '10':
            stringMonth = 'October';
            break;
        case '11':
            stringMonth = 'November';
            break;
        case '12':
            stringMonth = 'December';
    }
    return day + ' ' + stringMonth + ' ' + year;
}