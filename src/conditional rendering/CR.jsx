


function CR() {

    const RiverInfo = {

        name: 'Navaganga',
        location: 'Jhenaidah',
        country: 'Bangladesh',
        CreatePlace: 'Gorai nodi'

    }

    let age = 20

    const Re = () => {

        if (age > 18) return "Yes Info available"
        return "So sad Not Available"

    }

    return (
        <>
            <div className=" mt-10 mb-10 ml-16 mr-16 flex justify-center ">

                <div className=" flex justify-center items-center gap-5 border-[1px] w-fit p-8 ">
                    <img className=" h-[300px] w-[400px] rounded-xl " src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Nabaganga_River.jpg" alt="" />
                    <div>
                        <p className=" text-xl font-thin "> {RiverInfo.name} </p>
                        <p className=" text-xl font-thin "> {RiverInfo.location} </p>
                        <p className=" text-xl font-thin "> {RiverInfo.country} </p>
                        <p className=" text-xl font-thin "> {RiverInfo.CreatePlace} </p>
                        {/* <button className=" btn bg-cyan-700 mt-5 text-white">
                            {age > 40 ? "info available" : "info not available"} </button> */}
                        <button className=" btn bg-cyan-700 mt-5 text-white"> {Re()} </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CR
