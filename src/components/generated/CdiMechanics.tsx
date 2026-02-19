import * as React from "react";
import type { SVGProps } from "react";
const SvgCdiMechanics = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="1em"
        height="1em"
        viewBox="0 0 400.667 400.666"
        {...props}
    >
        <defs>
            <filter
                id="cdi_mechanics_svg__a"
                width={3}
                height={2.979}
                x={-1}
                y={-0.989}
                filterUnits="objectBoundingBox"
            >
                <feGaussianBlur
                    in="SourceAlpha"
                    result="blur"
                    stdDeviation={5}
                />
                <feOffset in="blur" result="offsetBlurredAlpha" />
                <feMerge>
                    <feMergeNode in="offsetBlurredAlpha" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <filter
                id="cdi_mechanics_svg__b"
                width={3}
                height={2.979}
                x={-1}
                y={-0.989}
                filterUnits="objectBoundingBox"
            >
                <feGaussianBlur
                    in="SourceAlpha"
                    result="blur"
                    stdDeviation={5}
                />
                <feOffset in="blur" result="offsetBlurredAlpha" />
                <feMerge>
                    <feMergeNode in="offsetBlurredAlpha" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <circle
            cx={200}
            cy={200}
            r={90}
            style={{
                display: "inline",
                fill: "#111",
                strokeWidth: 1.92282,
                strokeLinecap: "square",
                paintOrder: "stroke fill markers",
            }}
        />
        <g fill="#ff2a00">
            <path
                d="m206.458 55.893-12-.001 6.161 12.13z"
                style={{
                    fill: "#ff0",
                    filter: "url(#cdi_mechanics_svg__a)",
                }}
                transform="matrix(1 0 0 -1 -.458 178.022)"
            />
            <path
                d="m194.458 55.892 6.161 12.13 5.839-12.129z"
                style={{
                    fill: "#ff0",
                    filter: "url(#cdi_mechanics_svg__b)",
                }}
                transform="translate(-.458 222.108)"
            />
        </g>
        <circle
            cx={200}
            cy={200}
            r={11.936}
            style={{
                display: "inline",
                fill: "none",
                stroke: "#fff",
                strokeWidth: 3.18298,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <circle
            cx={152}
            cy={200}
            r={2.5}
            style={{
                fill: "#fff",
                stroke: "none",
                strokeWidth: 0.7131,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <circle
            cx={164}
            cy={200}
            r={2.5}
            style={{
                fill: "#fff",
                stroke: "none",
                strokeWidth: 0.7131,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <circle
            cx={176}
            cy={200}
            r={2.5}
            style={{
                fill: "#fff",
                stroke: "none",
                strokeWidth: 0.7131,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <circle
            cx={224}
            cy={200}
            r={2.5}
            style={{
                fill: "#fff",
                stroke: "none",
                strokeWidth: 0.7131,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <circle
            cx={236}
            cy={200}
            r={2.5}
            style={{
                fill: "#fff",
                stroke: "none",
                strokeWidth: 0.7131,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <circle
            cx={248}
            cy={200}
            r={2.5}
            style={{
                fill: "#fff",
                stroke: "none",
                strokeWidth: 0.7131,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <circle
            cx={260}
            cy={200}
            r={2.5}
            style={{
                fill: "#fff",
                stroke: "none",
                strokeWidth: 0.7131,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <circle
            cx={140}
            cy={200}
            r={2.5}
            style={{
                fill: "#fff",
                stroke: "none",
                strokeWidth: 0.7131,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
    </svg>
);
export default SvgCdiMechanics;
