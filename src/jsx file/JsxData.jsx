import js from "@eslint/js"
import { useEffect } from "react"
import { useState } from "react"
import Details from "./Details"

function JsxData() {

    const [jsx, setJsx] = useState([])

    useEffect(() => {
        fetch('jsx.json')
            .then(res => res.json())
            .then(data => setJsx(data))
    }, [])

    return (
        //all are jsx and vanila dom work behind the sence
        <div className="ml-16 mb-20 mt-20 mr-20">
            <div>
                <div className="flex justify-center gap-3 items-center">
                    <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/3393/3393920.png" alt="" />
                    <p className=" text-5xl font-serif ">Jsx Data</p>
                </div>
                <div className=" flex justify-center mt-10 ">
                    <div className=" grid  md:grid-cols-3 gap-5 ">
                        {
                            jsx.map(jsx => <Details jsx={jsx}></Details>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JsxData
