import '../Style/Pagination.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationComponent = () => {
  const pageNumbers = [1, 2, 3, 4, 5];
  
  return (
    <div className="pagination-container">
      <Pagination aria-label="Page navigation">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>

        {pageNumbers.map((number) => (
          <PaginationItem key={number} active={number === 2}>
            <PaginationLink href="#">
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination> 
    </div>
  );
};

export default PaginationComponent;