import * as React from "react";
import { ResponsiveLine } from "@nivo/line"
import { decodeMode } from "../Dashboard";
import "./ByYear.css"

export default class ByYear extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { mode, data } = this.props;
        const { title, getValue } = decodeMode(mode);

        return (
            <div className="ByYear">
                <ResponsiveLine
                    data={[{
                        id: title,
                        data: data.map(row => ({ x: row.label, y: getValue(row) }))
                    }]}
                    margin={{ "top": 65, "right": 110, "bottom": 65, "left": 80 }}
                    xScale={{ "type": "point" }}
                    yScale={{ "type": "linear", "min": "auto", "max": "auto" }}
                    curve="natural"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{ "orient": "bottom", "tickSize": 5, "tickPadding": 15, "tickRotation": 0, "legend": "Year", "legendOffset": 45, "legendPosition": "middle" }}
                    axisLeft={{
                        "orient": "left", "tickSize": 5, "tickPadding": 15, "tickRotation": 0, "legend": "", "legendOffset": -60,
                        "legendPosition": "middle"
                    }}
                    colors="category10"
                    dotSize={15}
                    dotColor="inherit:darker(0.3)"
                    dotBorderWidth={2}
                    dotBorderColor="#ffffff"
                    enableDotLabel={true}
                    dotLabel="y"
                    dotLabelYOffset={-15}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={[{
                        "anchor": "bottom-right",
                        "direction": "column",
                        "justify": false,
                        "translateX": 100,
                        "translateY": 0,
                        "itemsSpacing": 0,
                        "itemDirection": "left-to-right",
                        "itemWidth": 80,
                        "itemHeight": 20,
                        "itemOpacity": 0.75,
                        "symbolSize": 12,
                        "symbolShape": "circle",
                        "symbolBorderColor": "rgba(0, 0, 0, .5)",
                        "effects": [{
                            "on": "hover",
                            "style": {
                                "itemBackground": "rgba(0, 0, 0, .03)",
                                "itemOpacity": 1
                            }
                        }]
                    }
                    ]}
                />
            </div>

        );
    }

    handleClick(year) {
        this.props.onFilter({ year });
    }

}
