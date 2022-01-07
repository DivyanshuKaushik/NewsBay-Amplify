import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";

const PaginateBlock = () => {
  return (
    <div className="flex justify-center">
      <Pagination>
        <PaginationItem href="#last" ripple="dark">
          <Icon name="keyboard_arrow_left" />
        </PaginationItem>
        <PaginationItem color="blueGray" href="#1" ripple="light">
          1
        </PaginationItem>
        <PaginationItem href="#2" ripple="dark">
          2
        </PaginationItem>
        <PaginationItem href="#3" ripple="dark">
          3
        </PaginationItem>
        <PaginationItem href="#4" ripple="dark">
          4
        </PaginationItem>
        <PaginationItem href="#5" ripple="dark">
          5
        </PaginationItem>
        <PaginationItem href="#last" ripple="dark">
          <Icon name="keyboard_arrow_right" />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default PaginateBlock;
