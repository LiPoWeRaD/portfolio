import Github from "../svg/github";


const Contacts = () => {
    return (
        <main className="flex my-auto flex-col gap-10 justify-center items-center h-full">
            <p className="text-quinary">{"// you can also see it on my Github page"}</p>
            <ul className="flex flex-wrap gap-[60px] justify-center">
                <li><a className="flex justify-center items-center gap-x-[5px]" target="_blank" href="https://github.com/lipowerad">@lipowerad<Github /></a></li>
            </ul>
        </main>
    );
}

export default Contacts