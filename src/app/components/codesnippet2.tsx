

const CodeSnippet2 = () => {
    return (
        // <div>
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-2 ">
                        <p className="flex-1">@lipowerad</p>
                        <p className="">details </p>
                        <p className="">0 starts</p>
                    </div>
                    <p>Created 9 months ago</p>
                </div>
                <div className="px-[30px] py-[24px] bg-dark border border-[#1E2D3D] rounded-xl">
                    <p className="text-quinary">
                        <span className="text-quaternary">export function </span> 
                        <span>initializeModelChunk</span>
                        <span>parseModelTuple</span>
                        <span>(</span>
                    </p>
                    <p className="ml-6 text-quinary">
                        <span>response:</span>
                        <span className="text-tertiary2"> Response</span>
                        <span>,</span>
                    </p>
                    <p className="ml-6 text-quinary">
                        <span>value: {`{`}</span>
                        <span className="text-light">+</span>
                        <span>{`[key: string]: JSONValue} | $ReadOnlyArray`}</span>
                        <span className="text-light">{`<`}</span>
                        <span className="text-tertiary">JSONValue</span>
                        <span className="text-light">{`>`}</span>
                        <span>,</span>
                    </p>
                    <p className="text-quinary">
                        <span>): any {`{`}</span>
                    </p>
                    <p className="ml-6 text-quinary">
                        <span>const tuple: [mixed, mixed, mixed, mixed] </span>
                        <span className="text-light">= </span>
                        <span>(value: any);</span>
                    </p>
                </div>
            </div>
        // </div>
    )
}

export default CodeSnippet2