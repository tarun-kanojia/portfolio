import React from "react";
import { navigateToMailMe } from "../../Util/NavigationUtils";
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
    <EmailContainer onClick={navigateToMailMe}>
      <EmailLogo />
      <Email>{email}</Email>
    </EmailContainer>
  );
}
