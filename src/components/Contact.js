import ImgContact from '../images/contact.jpg'
function Contact() {
    return (
        <div className="content">
            <h1 className="title">Contact page</h1>
            <img className="contact" src={ImgContact}></img>
            <p className="desc">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
        </div>
    )
}
export default Contact