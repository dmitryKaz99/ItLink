import { Button } from "react-bootstrap";

const MyPagination = ({ totalCount, limit, currentPage, setCurrentPage }) => {
  const pagesCount = Math.ceil(totalCount / limit);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  return (
    <div className="d-flex justify-content-center my-4">
      {pages.map((p) => (
        <Button
          key={p}
          className={currentPage === p ? "btn-danger mx-1" : "mx-1"}
          onClick={() => setCurrentPage(p)}
        >
          {p}
        </Button>
      ))}
    </div>
  );
};

export default MyPagination;
