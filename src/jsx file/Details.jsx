

function Details({ jsx }) {

    const { name, details, creatingYear, owner } = jsx

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 border-[1px] ">
                <figure>
                    <img
                        src="https://www.makeblock.com/cdn/shop/articles/coding_background_1200x1200.jpg?v=1688543181"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p> {details} </p>
                    <p> {creatingYear} </p>
                    <p> {owner} </p>
                </div>
            </div>
        </div>
    )
}

export default Details
