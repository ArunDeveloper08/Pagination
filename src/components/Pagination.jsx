import React, { useEffect, useState } from "react";

const Pagination = ({initialPageSize , API_URL}) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchUers = async () => {
    try {
      const response = await fetch(
        API_URL
      );
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUers();
  }, []);

  const setPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const setNext = () => {
    if (currentPage <  Math.ceil(users.length / initialPageSize) - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const start = currentPage * initialPageSize;
  const end = initialPageSize + start;
  return (
    <div>
      <div>
        {users.slice(start, end)?.map((user) => {
          return <p key={user.id}>{user.name}</p>
        })}
      </div>
      <div>
        <button onClick={() => setPrev()}>Prev</button>
        {currentPage+1}
        <button onClick={() => setNext()}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
