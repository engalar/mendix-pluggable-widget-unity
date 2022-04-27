import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { UnityPreviewProps } from "../typings/UnityProps";

export function getProperties(
    values: UnityPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: UnityPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
