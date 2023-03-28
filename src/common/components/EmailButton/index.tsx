import React from "react";
import {
  Email,
  EmailContainer,
  EmailLogo,
} from "./styleComponents";
interface Props {
  email: string;
}
export default function EmailButton({ email }: Props) {
  return (
    <EmailContainer>
      <EmailLogo />
      <Email>{email}</Email>
    </EmailContainer>
  );
}
