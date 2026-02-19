import React from "react";
import Instrument, { BoxStyle, InstrumentProperties } from "./Instrument";

import { CdiMechanics, CdiNeedle, FiCircle, HeadingYaw } from "./generated";

type CourseDeviationIndicatorProps = InstrumentProperties & {
    heading?: number;
    deviation?: number;
    
    // all the gauges maintain a square proportion (aspect ratio? who knows)
    size?: string;
};

const constants = {
    deviation_bound: 30,
};

function CourseDeviationIndicator(props: CourseDeviationIndicatorProps) {
    let deviation = props.deviation ?? 0;
    if (deviation > constants.deviation_bound) {
        deviation = constants.deviation_bound;
    } else if (deviation < -constants.deviation_bound) {
        deviation = -constants.deviation_bound;
    }

    return (
        <Instrument {...props}>
            <div
                className="heading box"
                style={{
                    ...BoxStyle,
                    transform: `rotate(${-(props.heading ?? 0)}deg)`,
                }}
            >
                <HeadingYaw className="box" style={BoxStyle} />
            </div>
            <div className="mechanics box" style={BoxStyle}>
                <CdiMechanics className="box" style={BoxStyle} />
                <CdiNeedle className="box" style={{ ...BoxStyle, left: `${deviation * 1.5}%` }} />
                <FiCircle className="box" style={BoxStyle} />
            </div>
        </Instrument>
    );
}

export default React.memo(CourseDeviationIndicator);
