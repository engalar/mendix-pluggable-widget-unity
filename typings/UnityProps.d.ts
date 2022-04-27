/**
 * This file was generated from Unity.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export interface UnityContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    unityModelPath: string;
    onReady?: ActionValue;
    hoverGameObject: string;
    hoverMethod: string;
}

export interface UnityPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    unityModelPath: string;
    onReady: {} | null;
    hoverGameObject: string;
    hoverMethod: string;
}
