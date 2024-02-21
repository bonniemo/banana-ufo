import './UfoList.css';

const UfoList = () => {
    let UfoListTitle = 'Slowst ships in the Galaxy'
    return (
        <>
            <article className='UfoList'>
                <ul>
                    <h2>{UfoListTitle}</h2>
                    <li>Millennium Falcon</li>
                    <li>USS Enterprise</li>
                    <li>TARDIS</li>
                    <li>Serenity</li>
                    <li>Discovery One</li>
                    <li>Nostromo</li>
                    <li>Battlestar Galactica</li>
                    <li>Event Horizon</li>
                    <li>Sulaco</li>
                    <li>Heart of Gold</li>
                </ul>
            </article>
        </>
    )
}

export default UfoList;