import projectImg from '../AchiveIMage/01.jpg'
const Projects = () => {
    return (
        <div className='mt-24'>
            <div className='achieve-title'><h1>Projects</h1></div>
            <div>
                <div className="hero" style={{ backgroundImage: `url(${projectImg})` }}>
                    <div className="hero-overlay  bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md py-10">
                            <h1 className="mb-5 text-5xl font-bold">Bistro Coffe Shop</h1>
                            <a href="https://bistro-restaurent-ce4e8.web.app/"><button className="btn btn-secondary">Get Started</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;