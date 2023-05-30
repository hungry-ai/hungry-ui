import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const MyPagination = ({ totalPages, width, setPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(
    totalPages - 1 <= 2 * width ? totalPages - 1 : 2 * width
  );

  useEffect(() => {
    setLeft(
      currentPage - width > 0 && currentPage + width < totalPages - 1
        ? currentPage - width
        : currentPage + width >= totalPages - 1 && totalPages - 1 >= 2 * width
        ? totalPages - 1 - 2 * width
        : 0
    );
    setRight(
      currentPage - width > 0 && currentPage + width < totalPages - 1
        ? currentPage + width
        : currentPage - width <= 0 && totalPages - 1 >= 2 * width
        ? 2 * width
        : totalPages - 1
    );
  }, [currentPage, width, totalPages]);

  const navigate = (i) => () => {
    setPage(i);
    setCurrentPage(i);
  };

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.Prev
        onClick={navigate(currentPage - 1)}
        disabled={currentPage === 0}
      />
      {left > 0 && (
        <Pagination.Item onClick={navigate(0)} active={currentPage === 0}>
          {1}
        </Pagination.Item>
      )}
      {left > 1 && <Pagination.Ellipsis />}
      {Array.from({ length: totalPages }).map(
        (_, i) =>
          left <= i &&
          i <= right && (
            <Pagination.Item
              onClick={navigate(i)}
              active={currentPage === i}
              key={i}
            >
              {i + 1}
            </Pagination.Item>
          )
      )}
      {right < totalPages - 2 && <Pagination.Ellipsis />}
      {right < totalPages - 1 && (
        <Pagination.Item
          onClick={navigate(totalPages - 1)}
          active={currentPage === totalPages - 1}
        >
          {totalPages}
        </Pagination.Item>
      )}
      <Pagination.Next
        onClick={navigate(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      />
    </Pagination>
  );
};

export default MyPagination;

// TODO: image modal
// TODO: replace pagination with infinite scroll
