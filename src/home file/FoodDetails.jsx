

function FoodDetails({ special }) {

    const { image, name, title, price } = special

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
                </div>
            </div>
            <hr className=" mt-5 "></hr>
        </div>
    )
}

export default FoodDetails
