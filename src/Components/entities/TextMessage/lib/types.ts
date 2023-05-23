import { TextMessage_T } from "../../../shared/types";

export type TextMessageF_T = ({ message }: {
    message: TextMessage_T;
}) => JSX.Element

export type MyMessageF_T = ({ message }: {
    message: TextMessage_T;
}) => JSX.Element

export type CompanionMessageF_T = ({ message }: {
    message: TextMessage_T;
}) => JSX.Element