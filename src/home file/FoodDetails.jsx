

function FoodDetails({ special }) {

    const { image, name, title, price } = special

    let isAge = 20

    const ages = () => {
        if (isAge > 16) return "Food Is available"
        return "Food is not available"
    }

    return (
        <div>
            <div className=" flex justify-between items-center gap-3 ">
                <div className=" flex items-center gap-3 ">
                    <img className=" h-[80px] " src={image} alt="" />
                    <div className=" flex justify-between">
                        <div>
                            <p> {name} </p>
                            <p> {title} </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{price}</p>
                    <button className=" mt-5 btn bg-green-700 text-xs text-white "> {ages()} </button>
                </div>
            </div>
            <hr className=" mt-5 "></hr>
        </div>
    )
}

export default FoodDetails
