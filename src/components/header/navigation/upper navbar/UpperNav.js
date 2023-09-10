export const UppperNav = () => {

    return (
        <nav class="upper-nav">
            <div class="logo">
                <p>NEMO's</p>
            </div>
            <form method="POST">
                <label for="search"><i class="fa-solid fa-magnifying-glass fa-xl"></i></label>
                <input type="text" name="search" id="search" />
            </form>
            <div>
                <ul class="user-div">
                    <li>
                        <a href=""><i class="fa-solid fa-user fa-2xl"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="fa-solid fa-cart-shopping fa-2xl"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}