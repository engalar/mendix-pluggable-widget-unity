import { useCreation, useHover, useSize, useUnmount } from "ahooks";
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
    const size = useSize(ref);
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
    const [canvas, setCanvas] = useState<HTMLCanvasElement>();
    useEffect(() => {
        if (!canvas) {
            return;
        }
        if (size.height)
            canvas.height = size.height;
        if (size.width)
            canvas.width = size.width;
    }, [size, canvas]);

    useEffect(function () {
        unityContext.on("canvas", function (canvas) {
            canvas.width = 100;
            canvas.height = 50;
            setCanvas(canvas);
        });
    }, []);

    useUnmount(() => {
        unityContext.removeAllEventListeners();
    });

    return (
        <div
            style={props.style}
            tabIndex={props.tabIndex}
            className={props.class} ref={ref}>
            <Unity
                unityContext={unityContext}
                matchWebGLToCanvasSize
            />
        </div>
    );
}
