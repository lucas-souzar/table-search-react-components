import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "./styles";
import { InputSearchProps } from "./types";

export default function InputSearch({ size }: InputSearchProps) {
  const [value, setValue] = useState("");

  return (
    <Container size={size}>
      <SearchIcon sx={{ color: "#737373" }} />
      <input
        className="flex-grow focus:outline-none cursor-pointer"
        type="text"
        placeholder="Pesquisa"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <button type="button" onClick={() => setValue("")}>
          <CloseIcon sx={{ color: "#737373" }} />
        </button>
      )}
    </Container>
  );
}
