/**
 * This file was generated from Unity.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
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
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    unityModelPath: string;
    onReady: {} | null;
    hoverGameObject: string;
    hoverMethod: string;
}
