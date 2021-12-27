import React from "react";
import InputOutline from "../Utilities/InputOutline";
import Button from "@material-tailwind/react/Button";

const AddCategory = () => {
  return (
    <form className="w-2/3 md:w-1/3">
      <div className="">
        <InputOutline placeholder="Category" />
      </div>
      <div className="mt-2">
        <Button
          color="cyan"
          buttonType="filled"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddCategory;
