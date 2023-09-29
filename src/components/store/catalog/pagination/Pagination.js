import classes from "./Pagination.module.css";

function Pagination({ currPage, setcurrPage, totalCount }) {

    const pageRange = Math.ceil(totalCount / 12);

    const pageArr = [];

    for (let i = 1; i <= pageRange; i++) {
        pageArr.push(i);
    }

    const onNext = () => {
        setcurrPage(currPage + 1);
    };

    const onPrevious = () => {
        setcurrPage(currPage - 1);
    };

    let lastPage = pageArr[pageArr.length - 1];

    return (
        <ul className={classes["pagination-wrapper"]}>
            <li onClick={onPrevious} style={{ display: currPage === 1 ? "none" : "block" }}>
                <i className="fa-solid fa-angle-left fa-xl"></i>
            </li>
            {pageArr.map(pageNumber =>
                <li key={pageNumber} >
                    <button
                        className={`${classes.pagination} ${currPage === pageNumber ? classes.active : ""}`}
                        onClick={() => setcurrPage(pageNumber)}
                        disabled={pageNumber === currPage}
                    >
                        {pageNumber}
                    </button>
                </li>)}
            <li onClick={onNext} style={{ display: lastPage === currPage ? "none" : "block" }}>
                <i className="fa-solid fa-angle-right fa-xl"></i>
            </li>
        </ul>
    );
};

export default Pagination;