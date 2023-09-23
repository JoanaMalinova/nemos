import classes from "./DetailInfo.module.css";

function DetailInfo({ item }) {

    return (
        <div className={classes["info-wrapper"]}>
            <div>
                <h1>{item.species || item.name}</h1>
                <hr />
            </div>
            <h2>${item.price}</h2>
            <button className="purple-btn">Add to cart <i className="fa-solid fa-cart-plus fa-sm"></i></button>
            <div>
                {item.species ? <h3>How to care for {item.species}</h3> : <h3>About {item.name}</h3>}
                <hr />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, voluptate. Natus tenetur excepturi suscipit aliquam debitis hic corrupti necessitatibus blanditiis cupiditate totam nihil nisi quod vitae ullam praesentium, voluptate neque?</p>
            <p>{item.species ? <span className="bold blueviolet">Placement: </span> : <span className="bold blueviolet">Detail: </span>} Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure ab voluptatum rerum tenetur laboriosam dolor quibusdam nam mollitia libero ipsum magni eligendi porro nulla, ea iusto dolorum laudantium ad?</p>
            <p>{item.species ? <span className="bold blueviolet">Feeding: </span> : <span className="bold blueviolet">Material: </span>} A, consectetur molestias officia et expedita reprehenderit officiis eum dolore aliquam voluptatem, maiores ea. Asperiores adipisci beatae minima blanditiis quos obcaecati, architecto vel nam minus iure ipsam quas tempore illo!</p>
            <p >{item.species ? <span className="bold blueviolet">Lighting & Flow Requirements: </span> : <span className="bold blueviolet">Long life: </span>} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur tenetur pariatur quae at aut et veritatis, modi nihil incidunt blanditiis optio nostrum dolor quas quos unde fuga voluptatem obcaecati quasi!
                Eos dolor sed voluptatem ullam tempore nisi facere deserunt eveniet maxime architecto incidunt iure perspiciatis fugit repudiandae, in sunt temporibus. Modi natus ab molestiae aspernatur dicta ipsam, architecto eveniet libero.
                Ad, delectus sed tenetur asperiores reprehenderit vel numquam optio odio sapiente voluptates iure vero, hic quod ratione culpa veritatis modi. Excepturi ullam sequi voluptatibus mollitia delectus, rerum aspernatur praesentium voluptate!
                Minus sit mollitia error culpa odit labore nam sed vitae totam consequuntur rem quos voluptate itaque, quasi nemo repudiandae corrupti natus iure est, ut laudantium. A autem voluptatem earum numquam! </p>
        </div>
    )

}

export default DetailInfo;
