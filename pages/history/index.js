import Head from 'next/head';
import styles from '../../styles/History.module.css';

export default function history({ historyData }) {

    // Generating Tiles for each history event
    const result = [];

    // Generating Tile for title
    result.push(
        <div className={styles.welcomeTile}>
            <h1> History of SpaceX </h1>
            <p> Click on a tile to view article </p>
        </div>
    )
    for (let i = historyData.length-1; i >= 0; i--) {
        // If no article available
        if (historyData[i].links.article == null) {
            result.push(
                <div className={styles.tile} key={i}>
                    <h3>{ historyData[i].title }</h3>
                    <p> { formatDate(historyData[i].event_date_utc.substring(0,10)) } </p>
                    <p> No article available </p>
                </div>
            )
        } 
        // If article available
        else {
            result.push(
            <a href={ historyData[i].links.article } target='_blank' rel='noreferrer'>
                <div className={styles.tile} key={i}>
                        <h3>{ historyData[i].title }</h3>
                        <p> { formatDate(historyData[i].event_date_utc.substring(0,10)) } </p>
                </div>
            </a>
            )
        }
    }
    
    return (
    <>
        <Head>
            <title> {`SpaceX's History`} </title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <div className={styles.background}>
            <div className={styles.container}>
                {result}
            </div>
        </div>
    </>
    )
}

// Getting data from API
export async function getStaticProps({ params }) {
    const req = await fetch('https://api.spacexdata.com/v4/history');
    const data = await req.json();

    return {
        props: { historyData: data }
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