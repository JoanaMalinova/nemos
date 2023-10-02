import { useNavigate } from "react-router-dom";
import classes from "./Pagination.module.css";

function Pagination({ currPage, totalCount, setCurrPage }) {

    const navigate = useNavigate();

    const pageRange = Math.ceil(totalCount / 12);

    const pageArr = [];

    for (let i = 1; i <= pageRange; i++) {
        pageArr.push(i);
    }

    const onNext = () => {
        setCurrPage(currPage + 1);     
        navigate(`page/${currPage + 1}`);      
    };

    const onPrevious = () => {
        setCurrPage(currPage - 1);       
        navigate(`page/${currPage - 1}`);       
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
                        onClick={() => { setCurrPage(`page/${pageNumber}`); navigate(`page/${pageNumber}`) }}
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