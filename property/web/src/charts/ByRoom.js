import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { decodeMode } from "../Dashboard";
import './ByRoom.css'

export default class ByRoom extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { mode, data } = this.props;
        const { title, getValue } = decodeMode(mode);

        return (
            <div className="ByRoom">
                <ResponsiveBar
                    data={data.map(row => ({ rooms: row.label, [title]: getValue(row) }))}
                    indexBy="rooms"
                    keys={[title]}
                    margin={{ "top": 40, "right": 90, "bottom": 65, "left": 50 }}
                    padding={0.25}
                    layout="horizontal"
                    colors="paired"
                    colorBy="id"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        "tickSize": 5,
                        "tickPadding": 15,
                        "tickRotation": 90,
                        "legend": "",
                        "legendPosition": "middle",
                        "legendOffset": 45
                    }}
                    axisLeft={{
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "Bedrooms",
                        "legendPosition": "middle",
                        "legendOffset": -60
                    }}
                    borderColor="inherit:darker(1.6)"
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="#000000"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={[{
                        "dataFrom": "keys",
                        "anchor": "bottom-right",
                        "direction": "column",
                        "justify": false,
                        "translateX": 120,
                        "translateY": 0,
                        "itemsSpacing": 2,
                        "itemWidth": 100,
                        "itemHeight": 20,
                        "itemDirection": "left-to-right",
                        "itemOpacity": 0.85,
                        "symbolSize": 20,
                        "effects": [{
                            "on": "hover",
                            "style": {
                                "itemOpacity": 1
                            }
                        }]
                    }]}
                    onClick={x => this.handleClick(x.indexValue)}
                />
            </div>
        );
    }

    handleClick(rooms) {
        this.props.onFilter({ rooms });
    }

}
