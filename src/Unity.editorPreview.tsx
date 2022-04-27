import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { UnityPreviewProps } from "../typings/UnityProps";

declare function require(name: string): string;

export function preview(props: UnityPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
