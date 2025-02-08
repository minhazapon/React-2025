import { useEffect } from "react"
import { useState } from "react"
import FoodDetails from "./FoodDetails"

function SPECIALITIES() {

    const [special, setSpecial] = useState([])

    useEffect(() => {

        fetch('special.json')
            .then(res => res.json())
            .then(data => setSpecial(data))

    }, [])

    return (
        <div className="ml-14 mr-14 mt-20 mb-20">
            <div>
                <p className=" text-5xl font-thin text-gray-400 text-center mb-8 ">SPECIALITIES
                </p>
            </div>
            <div className=" grid  md:grid-cols-2 gap-10 ">
                {
                    special.map(special => <FoodDetails special={special}></FoodDetails>)

                }
            </div>
        </div>
    )
}

export default SPECIALITIES
