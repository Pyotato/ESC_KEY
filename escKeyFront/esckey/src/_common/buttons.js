import styled from "styled-components";
import { colors, margins, paddings } from "../theme/theme";

export const CommunityBtn = styled.button`
  width: 6em;
  background-color: ${({ theme }) =>
    theme.theme === "dark" ? colors.color_black : colors.color_beige_brown};
  color: ${({ theme }) =>
    theme.theme === "dark" ? colors.color_white : colors.color_gray_red};
  margin-right: ${margins.margin_uuul};
  padding: ${paddings.padding_small};
  border: none;
`;
export const CommunityWritePostBtn = styled.button`
  width: 6em;
  background-color: ${colors.color_white};
  padding: ${paddings.padding_small};
  border: 1px solid ${colors.color_black};
`;
