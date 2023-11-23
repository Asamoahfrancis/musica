import React from "react";
import { Input } from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
const Inputsearch = () => {
  return (
    <Input
      classNames={{
        base: "max-w-full  sm:max-w-[17rem] h-15",

        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-white rounded-full  bg-pink-800 ",
      }}
      placeholder="what do you want to listen to?"
      size="sm"
      startContent={<IoIosSearch size="2rem" />}
      type="search"
    />
  );
};

export default Inputsearch;
