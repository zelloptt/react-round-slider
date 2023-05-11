import { Vector2 } from 'mz-math';
import { createContext } from 'react';
import { getSliderProps, getSVGCenter, getSVGSize } from './svg-provider';
import { normalizeAngles } from './angles-provider';
import {
    DEFAULT_SVG_RX,
    DEFAULT_SVG_RY,
    DEFAULT_STROKE_WIDTH,
    DEFAULT_POINTER_RX,
    DEFAULT_POINTER_RY, DEFAULT_BG_COLOR, DEFAULT_END_ANGLE, DEFAULT_START_ANGLE, // DEFAULT_START_ANGLE, DEFAULT_END_ANGLE
} from './defaults';
import { getNumber, getString } from './common';
import { IUserSettings, IRoundSliderPointer, ISettings, IUserSettingsPointer } from '../interfaces';

export const getInitialPointers = (propsPointers?: IUserSettingsPointer[]): IRoundSliderPointer[] => {

    if(!propsPointers || propsPointers.length <= 0){
        return [{
            pointerRadii: [DEFAULT_POINTER_RX, DEFAULT_POINTER_RY],
        }]
    }
    const pointers: IRoundSliderPointer[] = [];

    for(const propsPointer of propsPointers){

        const pointerRadii: Vector2 = [
            getNumber(propsPointer.rx, DEFAULT_POINTER_RX),
            getNumber(propsPointer.ry, DEFAULT_POINTER_RY),
        ];

        pointers.push({
            pointerRadii,
        });
    }

    return pointers;
};

const getMaxPointerRadii = (pointers: IRoundSliderPointer[]) : Vector2 => {
    let maxX = -Infinity;
    let maxY = -Infinity;

    for(const pointer of pointers){
        maxX = Math.max(maxX, pointer.pointerRadii[0]);
        maxY = Math.max(maxY, pointer.pointerRadii[1]);
    }

    return [
        maxX,
        maxY,
    ];
};

// ---------------- SETTINGS -------------------------
export const formatSettings = (props: IUserSettings) : ISettings => {

    const pointers: IRoundSliderPointer[] = getInitialPointers(props.pointers);

    const svgRadii: Vector2 = [getNumber(props.rx, DEFAULT_SVG_RX), getNumber(props.ry, DEFAULT_SVG_RY)];
    const [startAngleDegrees, endAngleDegrees] = normalizeAngles(props.startAngleDegrees, props.endAngleDegrees);

    const strokeWidth = getNumber(props.strokeWidth, DEFAULT_STROKE_WIDTH);
    const bgColor = getString(props.bgColor, DEFAULT_BG_COLOR);

    const maxPointer = getMaxPointerRadii(pointers);

    const { svgWidth, svgHeight } = getSVGSize(svgRadii, maxPointer, strokeWidth);

    const { sliderStartPoint, sliderEndPoint, largeArcFlag } = getSliderProps(
        startAngleDegrees,
        endAngleDegrees,
        svgRadii,
        maxPointer,
        strokeWidth
    );

    const svgCenter = getSVGCenter(svgRadii, maxPointer, strokeWidth);

    return {
        pointers,
        svgRadii,

        startAngleDegrees,
        endAngleDegrees,

        strokeWidth,
        bgColor,

        svgWidth,
        svgHeight,
        svgCenter,

        sliderStartPoint,
        sliderEndPoint,
        largeArcFlag,
    };
};

export const SettingsContext = createContext<ISettings>({
    pointers: getInitialPointers(),
    svgRadii: [DEFAULT_SVG_RX, DEFAULT_SVG_RY],
    // pointerRadii: [DEFAULT_POINTER_RX, DEFAULT_POINTER_RY],

    startAngleDegrees: DEFAULT_START_ANGLE,
    endAngleDegrees: DEFAULT_END_ANGLE,

    strokeWidth: DEFAULT_STROKE_WIDTH,
    bgColor: DEFAULT_BG_COLOR,

    ...getSVGSize([DEFAULT_SVG_RX, DEFAULT_SVG_RY], [DEFAULT_POINTER_RX, DEFAULT_POINTER_RY], DEFAULT_STROKE_WIDTH),
    ...getSliderProps(
        DEFAULT_START_ANGLE, DEFAULT_END_ANGLE,
        [DEFAULT_SVG_RX, DEFAULT_SVG_RY], [DEFAULT_POINTER_RX, DEFAULT_POINTER_RY],
        DEFAULT_STROKE_WIDTH
    ),

    svgCenter: getSVGCenter([DEFAULT_SVG_RX, DEFAULT_SVG_RY], [DEFAULT_POINTER_RX, DEFAULT_POINTER_RY], DEFAULT_STROKE_WIDTH),
});
