import { TextMessage_T } from "../../../shared/types";

export type TextMessageF_T = ({ message }: {
    message: TextMessage_T;
}) => JSX.Element