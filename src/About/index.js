const About = () => {
    return(
        <div className="aboutBox">
            <div>
                <h2>ABOUT US</h2>
                <p>Welcome to Kababji, where every dish is a celebration of Bahrain’s rich culinary heritage. We pride ourselves on blending traditional Bahraini flavors with contemporary dining experiences. Our commitment to using only the freshest local ingredients ensures that every dish is prepared with passion and precision.
                <br/>At Kababji, we aim to create a warm and inviting environment where guests can enjoy exceptional food and great company. Our experienced team is dedicated to providing attentive service, ensuring each visit is memorable and enjoyable.</p>
            </div>
            <div className="contactMain">
                <div className="contactBox">
                    <h3>CONTACT US</h3>
                    <p>We’d love to hear from you! For reservations, inquiries, or feedback, please get in touch with us: <br/>
                      <b>PHONE: </b><br/>
                      <b>EMAIL: </b>KababjiOfficial@gmail.com<br/>
                      <b>ADDRESS: </b><br/>
                      <b>HOURS: </b>6am-1am
                    </p>
                </div>
            </div>
            <iframe
             src="https://www.google.com/maps/embed?pb=https://www.google.com/maps/place/Manama,+Bahrain/@26.2266878,50.5477918,13z/data=!3m1!4b1!4m6!3m5!1s0x3e49af722776a62d:0x8b6738a6070f60c2!8m2!3d26.2235305!4d50.5875935!16zL20vMDU0amo?entry=ttu"
             width="300"
             height="240"
            //   style="border:0;"
             allowfullscreen=""
             loading="lazy">
            </iframe>


        </div>     
    )
}
export default About
