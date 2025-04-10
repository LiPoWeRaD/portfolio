

const CodeSnippet = () => {
    return (
        // <div>
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-2">
                        <p className="flex-1">@lipowerad</p>
                        <p className="">details </p>
                        <p className="">3 starts</p>
                    </div>
                    <p>Created 5 months ago</p>
                </div>
                <div className="px-[30px] py-[24px] bg-dark border border-[#1E2D3D] rounded-xl">
                    <p className="text-quinary">
                        <span className="text-quaternary">function </span> 
                        <span>initializeModelChunk</span>
                        <span className="text-light">{`<`}</span>
                        <span className="text-tertiary">T</span>
                        <span className="text-light">{`>`}</span>
                        <span>(</span>
                        <span>chunk</span>
                        <span>: </span>
                        <span>ResolvedModelChunk</span>
                        <span>)</span>
                        <span>: </span>
                        <span>T</span>
                        <span>{`{`}</span>
                    </p>
                    <p className="ml-6 text-quinary">
                        <span>const </span>
                        <span>value</span>
                        <span>: </span>
                        <span className="text-tertiary2">T</span>
                        <span className="text-light"> = </span>
                        <span className="text-quaternary2">parseModel</span>
                        <span>(</span>
                        <span>chunk</span>
                        <span>._</span>
                        <span className="text-light">response</span>
                        <span>, </span>
                        <span>chunk</span>
                        <span>._</span>
                        <span className="text-light">value</span>
                        <span>)</span>
                        <span>;</span>
                    </p>
                    <p className="ml-6 text-quinary">
                        <span className="text-quaternary">const </span>
                        <span>initializedChunk</span>
                        <span>: </span>
                        <span className="text-tertiary2">InitializedChunk</span>
                        <span className="text-light">{`<`}</span>
                        <span className="text-tertiary2">T</span>
                        <span className="text-light">{`>`}</span>
                        <span> = </span>
                        <span>(</span>
                        <span>chunk</span>
                        <span>: </span>
                        <span>any</span>
                        <span>)</span>
                        <span>{`;`}</span>
                    </p>
                    <p className="ml-6 text-quinary">
                        <span>initializedChunk</span>
                        <span>._</span>
                        <span className="text-light">status</span>
                        <span> = </span>
                        <span className="text-light">INITIALIZED</span>
                        <span>;</span>
                    </p>
                    <p className="ml-6 text-quinary">
                        <span>initializedChunk</span>
                        <span>._</span>
                        <span className="text-light">value</span>
                        <span> = </span>
                        <span>value</span>
                        <span>;</span>
                    </p>
                    <p className="ml-6 text-quinary">
                        <span className="text-quaternary">return</span>
                        <span> value;</span>
                    </p>
                    <p className="text-quinary">
                        <span className="">{`}`}</span>
                    </p>
                </div>
            </div>
        // </div>
    )
}

export default CodeSnippet