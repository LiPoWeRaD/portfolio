import Image from "next/image"

interface CardProjectProps {
    name: string
    nameCommit: string
    img: string
    description: string
    link: string
}

const CardProject = ({name, nameCommit, img, description, link}: CardProjectProps) => {
    return (
        <div className="flex flex-col gap-y-4 ">
            <h2 className="text-xl text-light">
                {name} <span className="text-quinary">{"//"}{nameCommit}</span>
            </h2>
            <div className={`flex flex-col border border-[#1E2D3D] rounded-xl overflow-hidden`}>                
                <Image src={img} alt="ProjectCinema" width={300} height={200} sizes="" className="w-full h-[200px] object-cover" />
                {/* Нижняя часть - контент */}
                <div className="p-4 bg-dark flex flex-col gap-y-4">
                    <p className='text-quinary'>{description}</p>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex mr-auto py-2 px-4 text-white bg-quinary2"
                    >
                        view-project
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardProject