import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginateBlock = () => {
  return (
    <div className="flex justify-center py-3">
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" color="primary" />
      </Stack>
    </div>
  );
};

export default PaginateBlock;
