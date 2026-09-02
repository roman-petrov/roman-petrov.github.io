import { Content } from "../Content";
import { Button } from "./Button";

export const PdfButton = () => (
  <Button download href={`./${Content.meta.pdf}`} label="PDF">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#E5252A" />
      <path d="M14 2v6h6z" fill="#fff" />
    </svg>
  </Button>
);
