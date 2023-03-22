import { useHover } from "ahooks";
import { createElement, useEffect, useRef, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { UnityContainerProps } from "../typings/UnityProps";

export default function (props: UnityContainerProps) {
    const unityContext = useUnityContext({
        loaderUrl: `${props.unityModelPath}.loader.js`,
        dataUrl: `${props.unityModelPath}.data`,
        frameworkUrl: `${props.unityModelPath}.framework.js`,
        codeUrl: `${props.unityModelPath}.wasm`
    });

    (window as any).unityContext = (window as any).unityContext ? (window as any).unityContext : {};
    (window as any).unityContext[props.name] = unityContext;

    const { unityProvider, sendMessage } = unityContext;

    const ref = useRef<any>();
    const isHovering = useHover(ref);

    useEffect(() => {
        if (props.hoverGameObject) {
            sendMessage(props.hoverGameObject, props.hoverMethod, isHovering ? 1 : 0);
        }
    }, [isHovering]);

    const [first, setFirst] = useState(true);

    useEffect(() => {
        if (first && props.onReady && props.onReady.canExecute) {
            props.onReady.execute();
            setFirst(false);
        }

        return () => {
        };
    }, [unityProvider, props.onReady]);

    return (
        <div
            style={props.style}
            tabIndex={props.tabIndex}
            className={props.class} ref={ref}>
            <Unity
                style={{ height: '100%', width: '100%' }}
                unityProvider={unityProvider}
                matchWebGLToCanvasSize
            />
        </div>
    );
}
