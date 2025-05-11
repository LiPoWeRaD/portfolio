

import CardProject from "../ui/CardProject"

const Projects = () => {
    return (
        <main className="grid grid-cols-1 my-auto">
            <ul className="flex flex-wrap gap-[60px] justify-center ">
                <li><CardProject name="Project 1" nameCommit="ProjectCinema" description="Firts project on react" img={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/SiteFilm1.png`} link="https://lipoweradcinema.netlify.app" /></li>
                <li><CardProject name="Project 2" nameCommit="ProjectBank" description="Two project on next" img={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/SiteFilm2.png`} link="https://lipowerad.github.io/bank/" /></li>
                <li><CardProject name="Project 3" nameCommit="Estate" description="Three project on next" img={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/SiteFilm3.png`} link="https://lipowerad.github.io/Estate/" /></li>
            </ul>
        </main>
    )
}

export default Projects