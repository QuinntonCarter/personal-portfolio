export default function Banner() {
// add transform animation that shrinks text to fit in upper left corner of screen
// when change to profile view or search results return; allows enough space to 
// view results etc
    return(
        <div className='bannerWrapper'>
            <header>
                <h1 style={{marginBottom: '-5px'}}> Cue </h1>
            </header>
        </div>
    )
}