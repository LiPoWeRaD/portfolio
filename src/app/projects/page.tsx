import CardProject from "../ui/CardProject"


const Projects = () => {
    return (
        <main className="grid grid-cols-1 my-auto">
            <ul className="flex flex-wrap gap-[60px] justify-center ">
                <li><CardProject name="Project 1" nameCommit="ProjectCinema" description="Duis aute irure dolor in velit esse cillum dolore." classImage="bg-SiteFilm1" link="https://lipoweradcinema.netlify.app" /></li>
                <li><CardProject name="Project 2" nameCommit="ProjectBank" description="Duis aute irure dolor in velit esse cillum dolore." classImage="bg-SiteFilm2" link="https://lipowerad.github.io/bank/" /></li>
                <li><CardProject name="Project 3" nameCommit="ProjectBlanchard" description="Duis aute irure dolor in velit esse cillum dolore." classImage="bg-SiteFilm3" link="https://lipowerad.github.io/Blanchard/" /></li>
            </ul>
        </main>
    )
}

export default Projects