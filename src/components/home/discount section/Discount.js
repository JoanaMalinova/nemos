export const Discount = () => {

    return (
        <section id="dicount" class="discounts">
            <div class="discount-wrapper">
                <h2 class="discount-header">Weekly offers</h2>
                <hr />
                <ul class="carousel" data-flickity='{
                     "autoPlay": true,
                     "draggable": false,
                     "freeScroll": true,
                     "wrapAround": true
                     }'>
                    <li class="carousel-cell">
                        <article class="card">
                            <section class="discount-image">
                                <img src="https://exoticland.bg/wp-content/uploads/2022/11/978cd78f31998f43905d6d9b9b009603.jpg"
                                    alt="reef-lobster" />
                                <div class="discount-percent">
                                    <span>-20%</span>
                                </div>
                            </section>
                            <section class="discount-info">
                                <p>Enoplometopus daumi</p>
                                <p class="discount-price"><span class="line-through">$150</span> $130</p>
                                <button class="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                    <li class="carousel-cell">
                        <article class="card">
                            <section class="discount-image">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Goniopora_closeup.jpg"
                                    alt="gonipora-color" />
                                <div class="discount-percent">
                                    <span>-20%</span>
                                </div>
                            </section>
                            <section class="discount-info">
                                <p>Gonipora spp.</p>
                                <p class="discount-price"><span class="line-through">$340</span> $300</p>
                                <button class="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                    <li class="carousel-cell">
                        <article class="card">
                            <section class="discount-image">
                                <img src="https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/jpg_E_una_specie_ermafrodita_proterogina_con_femmine_cioe_che_possono_diventar_maschi_invecchiando_c_Giuseppe_Mazza.jpg"
                                    alt="angelfish" />
                                <div class="discount-percent">
                                    <span>-40%</span>
                                </div>
                            </section>
                            <section class="discount-info">
                                <p>Pomacanthus-xanthometopon</p>
                                <p class="discount-price"><span class="line-through">$220</span> $140</p>
                                <button class="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                    <li class="carousel-cell">
                        <article class="card">
                            <section class="discount-image">
                                <img src="https://reefsolution.com/cdn/shop/products/venustus2.jpg?v=1664487549"
                                    alt="angelfish" />
                                <div class="discount-percent">
                                    <span>-10%</span>
                                </div>
                            </section>
                            <section class="discount-info">
                                <p>Pomacanthus-xanthometopon</p>
                                <p class="discount-price"><span class="line-through">$240</span> $212</p>
                                <button class="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                    <li class="carousel-cell">
                        <article class="card">
                            <section class="discount-image">
                                <img src="https://live.staticflickr.com/65535/17220543790_7298b56a62_b.jpg"
                                    alt="pseudanthias-pleurotaenia" />
                                <div class="discount-percent">
                                    <span>-5%</span>
                                </div>
                            </section>
                            <section class="discount-info">
                                <p>Pseudanthias pleurotaenia</p>
                                <p class="discount-price"><span class="line-through">$80</span> $72</p>
                                <button class="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                    <li class="carousel-cell">
                        <article class="card">
                            <section class="discount-image">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Panulirus_versicolor.jpg"
                                    alt="pseudanthias-pleurotaenia" />
                                <div class="discount-percent">
                                    <span>-20%</span>
                                </div>
                            </section>
                            <section class="discount-info">
                                <p>Panulirus vesicolor</p>
                                <p class="discount-price"><span class="line-through">$260</span> $214</p>
                                <button class="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    )
}