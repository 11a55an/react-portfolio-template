import "../styles/skills.css"

function Skills() {
    return (
        <div id="skills-wrapper">
            <div id="skills">
                <h1>My Skills</h1>
                <p>HTML</p>
                <div class="container">
                    <p>90%</p>
                    <div class="html"></div>
                </div>
                <p>CSS</p>
                <div class="container">
                    <p>85%</p>
                    <div class="css"></div>
                </div>
                <p>JavaScript</p>
                <div class="container">
                    <p>70%</p>
                    <div class="js"></div>
                </div>
                <p>React</p>
                <div class="container">
                    <p>60%</p>
                    <div class="react"></div>
                </div>
                <p>C++</p>
                <div class="container">
                    <p>75%</p>
                    <div class="cpp"></div>
                </div>
                <p>Python</p>
                <div class="container">
                    <p>70%</p>
                    <div class="python"></div>
                </div>
                <p>Java</p>
                <div class="container">
                    <p>40%</p>
                    <div class="java"></div>
                </div>
            </div>
        </div>
    );
}


export default Skills;