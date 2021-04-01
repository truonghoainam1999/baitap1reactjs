import Banner from '../images/banner.jpg'
function Home() {
    return (
        <div className="content">
            <h1 className="title">Home page</h1>
            <p className="desc">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
            <img className="banner" src={Banner} alt="banner" ></img>
        </div>
    );
}
export default Home