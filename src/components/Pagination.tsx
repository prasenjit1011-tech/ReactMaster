type Props = {
  page: number;
  setPage: (page: number) => void;
  hasNext: boolean;
};

const Pagination = ({ page, setPage, hasNext }: Props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>Page {page}</span>

      <button disabled={!hasNext} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;