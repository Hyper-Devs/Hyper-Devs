import './PageTitle.css'

function PageTitle({pageName}) {
    return (
        <div className='PageTitle'>
            <div className='welcome-message'><p>{pageName}</p></div>
        </div>
    )
}

export default PageTitle;