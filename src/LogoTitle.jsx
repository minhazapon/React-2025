
function LogoTitle() {
    return (
        <>
            <div className=" p-5 ">
                <div className=" flex justify-center ">
                    <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/2079/2079154.png" alt="" />
                </div>
                <div className=" flex justify-center mt-2 ">
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-6"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div>
                    <p className=" text-center font-thin text-xl mt-3 text-gray-400 ">Food & Drinks</p>
                </div>
                <div className=" mt-5 ">
                    <hr></hr>
                </div>
            </div>
        </>

    )
}

export default LogoTitle
