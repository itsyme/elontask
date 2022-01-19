import Head from 'next/head';
import styles from "../../styles/SpaceX.module.css";

export default function spaceX({ companyData, latestLaunchData }) {
    return (
        <div className={styles.background}>
            <Head>
                <title>SpaceX</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.grid}>
                <div className={styles.spaceXLogoContainer}>
                    <img src="/spacex.png" className={styles.spaceXLogo}/>
                </div>
                <div className={`${styles.about} ${styles.card}`}>
                    <h3>What is SpaceX?</h3>
                    <p>{companyData.summary}</p>
                </div>
                <div className={`${styles.location} ${styles.card}`}>
                    <h3>Headquarters</h3>
                    <img src="/spacex_headquarters.png" className={styles.spaceXHeadquarters} />
                    <p> {companyData.headquarters.city}, {companyData.headquarters.address}</p>
                </div>
                <div className={`${styles.nextLaunch} ${styles.card}`}>
                    <h1> Latest Launch: {latestLaunchData.name} </h1>
                    <h2> Launch {latestLaunchData.success ? "Success!" : "Failure"}</h2>
                    <p> Date: {formatDate(latestLaunchData.date_local.substring(0,10))}</p>
                    <p> Time: {latestLaunchData.date_local.substring(11)}</p>
                    <p><a href={`${latestLaunchData.links.webcast}`} target="_blank">View Web Cast</a></p>
                </div>
                <div className={`${styles.otherCompanies} ${styles.card}`}>
                    <h3>Elon's other companies:</h3>
                    <div className={styles.scrollBar}>
                        <a href='https://www.tesla.com/' target='_blank'>
                            <img className={styles.teslaLogo} src='/tesla.png' />
                        </a>
                        <a href='https://neuralink.com/' target='_blank'>
                            <img className={styles.neuralinkLogo} src='/neuralink.png'/>
                        </a>
                        <a href='https://www.boringcompany.com/' target='_blank'>
                            <img className={styles.boringCompanyLogo} src='boring_company.png' />
                        </a>
                    </div>
                </div>
            </div>
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
