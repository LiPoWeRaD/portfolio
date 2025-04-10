
// w-[310px] w-[410px]

export default function Page() {
  return (
    <main className="flex mt-[120px] flex-col justify-center items-center h-full">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-lg">Hi all. I am</p>
          <h2 className="text-[62px]">Egor Limonov</h2>
          <p className="text-[32px] text-secondary"><span className="mr-2">&#62;</span> Front-end developer</p>
        </div>
        <div>
          <p className="text-quinary">{"// complete the game to continue"}</p>
          <p className="text-quinary">{"// you can also see it on my Github page"}</p>
          <p><span className="text-secondary">const</span> <span className="text-tertiary">githubLink</span> = <a className="text-quaternary underline" target="_blank" href="https://github.com/lipowerad">“https://github.com/lipowerad”</a></p>
        </div>
      </div>
    </main>
      
  );
}
