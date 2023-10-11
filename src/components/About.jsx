import "../styles/about.css";
import aboutImage from "../images/about.jpg";

function About() {
    return (
        <div id="about-wrapper">
            <div class="about">
                <h1>About</h1>
                <img className="aboutImg" src={aboutImage} alt="aboutImag" />
                <span className="aboutText">
                    <h3>Hassan.</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        placeat inventore rerum tempore cupiditate, amet adipisci aut eius
                        facilis quisquam magni ratione maxime officiis earum blanditiis
                        magnam illum obcaecati vero? Odit ipsa facilis officiis fuga
                        voluptate similique sunt exercitationem voluptatibus, illo et
                        fugit eveniet provident quo atque, nesciunt explicabo tenetur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        placeat inventore rerum tempore cupiditate, amet adipisci aut eius
                        facilis quisquam magni ratione maxime officiis earum blanditiis
                        magnam illum obcaecati vero? Odit ipsa facilis officiis fuga
                        voluptate similique sunt exercitationem voluptatibus, illo et
                        fugit eveniet provident quo atque, nesciunt explicabo tenetur!
                    </p>
                </span>
            </div>
        </div>
    );
}

export default About;