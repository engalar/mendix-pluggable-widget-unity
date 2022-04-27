import { useCreation, useHover, useUnmount } from "ahooks";
import { createElement, useEffect, useRef, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { UnityContainerProps } from "../typings/UnityProps";

export default function (props: UnityContainerProps) {
    const unityContext = useCreation(
        () =>
            new UnityContext({
                loaderUrl: `${props.unityModelPath}.loader.js`,
                dataUrl: `${props.unityModelPath}.data`,
                frameworkUrl: `${props.unityModelPath}.framework.js`,
                codeUrl: `${props.unityModelPath}.wasm`
            }),
        [props.unityModelPath]
    );

    const ref = useRef<any>();
    const isHovering = useHover(ref);

    useEffect(() => {
        if (props.hoverGameObject) {
            unityContext.send(props.hoverGameObject, props.hoverMethod, isHovering ? 1 : 0);
        }
    }, [isHovering]);

    const [first, setFirst] = useState(true);

    useEffect(() => {
        if (!unityContext) {
            return;
        }
        (window as any).unityContext = (window as any).unityContext ? (window as any).unityContext : {};
        (window as any).unityContext[props.name] = unityContext;

        if (first && props.onReady && props.onReady.canExecute) {
            props.onReady.execute();
            setFirst(false);
        }

        return () => {
        };
    }, [unityContext, props.onReady]);

    useUnmount(() => {
        unityContext.removeAllEventListeners();
    })

    return (
        <div ref={ref}>
            <Unity
                className={props.class}
                tabIndex={props.tabIndex}
                style={props.style}
                unityContext={unityContext}
            />
        </div>
    );
}
