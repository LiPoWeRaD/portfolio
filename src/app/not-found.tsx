import Link from "next/link"


const NotFound = () => {
    return (
        <main className="flex my-auto flex-col gap-10 justify-center items-center h-full">
            <p className="text-quinary">Page not found</p>
            <Link className="flex p-[10px] justify-center items-center gap-x-[5px] rounded-full bg-secondary text-white border border-[#1E2D3D]" href="/">Back to home</Link>
        </main>
    )
}

export default NotFound