import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>
                <a href="mailto:hassan.ahmad.ali.dev@gmail.com" className="btn btn-primary contact-btn">Say Hello</a>
            </div>
        </section>
    );
};

export default Contact;
