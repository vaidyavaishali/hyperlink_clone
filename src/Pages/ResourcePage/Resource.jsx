import './resource.css'
const ResourcePage = () => {
    return (
        <div id="resource-page">
            <div id='first-div'>
                <ul>
                    <li>ML AI Blog</li>
                    <li>Data Science Blog</li>
                    {/* <li></li>
                    <li>Press Release</li>
                    <li>Tech News</li>
                    <li>WhitePapers</li>
                    <li>Podcast</li>
                    <li>Portfolio</li>
                    <li>Download Brochures</li> */}
                </ul>
            </div>
            <div id='second-div'>
                <div className='second-inner-div'>
                    <h3>Latest Blog</h3>
                </div>
            </div>
            <div id='third-div'>
                <div className='third-inner-div'>
                    <h4>Podcast</h4>
                </div>

            </div>
            <div id='fourth-div'>
                <div className='fourth-inner-div'>
                    <h3>Lets Discuss Your Requirnment</h3>
                </div>
            </div>
        </div>
    )
}
export default ResourcePage