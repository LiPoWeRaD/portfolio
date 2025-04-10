

import CardProject from "../ui/CardProject"

const Projects = () => {
    return (
        <main className="grid grid-cols-1 my-auto">
            <ul className="flex flex-wrap gap-[60px] justify-center ">
                <li><CardProject name="Project 1" nameCommit="ProjectCinema" description="Duis aute irure dolor in velit esse cillum dolore." img={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/SiteFilm1.png`} link="https://lipoweradcinema.netlify.app" /></li>
                <li><CardProject name="Project 2" nameCommit="ProjectBank" description="Duis aute irure dolor in velit esse cillum dolore." img={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/SiteFilm2.png`} link="https://lipowerad.github.io/bank/" /></li>
                <li><CardProject name="Project 3" nameCommit="ProjectBlanchard" description="Duis aute irure dolor in velit esse cillum dolore." img={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/images/SiteFilm3.jpg`} link="https://lipowerad.github.io/Blanchard/" /></li>
            </ul>
        </main>
    )
}

export default Projects