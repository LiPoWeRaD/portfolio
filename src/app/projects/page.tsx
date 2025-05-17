

import CardProject from "../ui/CardProject"

const Projects = () => {
    return (
        <main className="grid grid-cols-1 my-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[60px] justify-center ">
                <li><CardProject name="Project 1" nameCommit="ProjectCinema" description="Firts project on react" img={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/SiteFilm1.png`} link="https://lipoweradcinema.netlify.app" /></li>
                <li><CardProject name="Project 2" nameCommit="ProjectBank" description="Two project on next" img={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/SiteFilm2.png`} link="https://lipowerad.github.io/bank/" /></li>
                <li><CardProject name="Project 3" nameCommit="Estate" description="Three project on next" img={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/SiteFilm3.png`} link="https://lipowerad.github.io/Estate/" /></li>
                <li><CardProject name="Project 4" nameCommit="StyleLoom" description="Four project on next" img={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/SiteFilm4.jpg`} link="https://lipoweradstyleloom.netlify.app/" /></li>
            </ul>
        </main>
    )
}

export default Projects