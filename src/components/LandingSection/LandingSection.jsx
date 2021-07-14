import "./LandingSection.css";

const LandingSection = () => {
    return (
        <section id="landing">
        <header className="navbar">
            <nav>
                <ul className="nav-links">
                    <li className="nav-link">
                    <a data-scroll href="#landing">
                    Home
                    </a> 
                    </li>
                    <li className="nav-link">
                        <a data-scroll href="#about">About</a></li>
                    <li className="nav-link">
                        <a data-scroll href="#skills">Skills</a></li>
                    <li className="nav-link">
                        <a data-scroll href="#projects">Projects</a></li>
                    <li className="nav-link contact">
                    <a href="mailto:krish.bajaj.cer19@itbhu.ac.in"> Contact Me</a>                       
                    </li>

                </ul>
            </nav>
        </header>
        <main></main>
        </section>
    )
}

export default LandingSection
