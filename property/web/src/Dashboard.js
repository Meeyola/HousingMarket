import * as React from "react";
import Typography from "@material-ui/core/Typography";
import "./Dashboard.css";
import ByYear from "./charts/ByYear";
import ByRoom from "./charts/ByRoom";
import BySuburb from "./charts/BySuburb";
import { getAverageByYear, getAverageByRoom, getAverageBySuburb } from "./api";
import Filter from "./Filter";
import LoadingIndicator from "./LoadingIndicator";

export default class Dashboard extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            filter: {},
            suburb: "",
            year: "",
            rooms: "",
            byYear: [],
            byYearLoading: false,
            byRoom: [],
            byRoomLoading: false,
            bySuburb: [],
            bySuburbLoading: false,
            mode: "avPrice",
            suburbs: [],
            years: [],
        };

        this.onFilter = this.onFilter.bind(this);
        this.onSetMode = this.onSetMode.bind(this);
    }

    componentDidMount() {
        this.updateData();
    }

    render() {
        const { 
            suburbs, years, mode, filter, 
            bySuburb, byRoom, byYear, 
            bySuburbLoading, byRoomLoading, byYearLoading 
        } = this.state;
        
        let chartTitle;
        switch (mode) {
            case "avPrice":
                chartTitle = "Average Price";
                break;
            case "numOfProp":
                chartTitle = "Number of Properties Sold";
                break;
            case "totalPrice":
                chartTitle = "Total Sales Price";
                break;
        }

        return (
            <div className="Dashboard">
                <div className="title">
                    <Typography variant="h3">Melbourne Housing Market Data Map</Typography>
                </div>

                <Filter filter={filter} onFilter={this.onFilter} mode={mode} onSetMode={this.onSetMode} suburbs={suburbs} years={years} />
                <div className="title">
                    <Typography variant="h4">{chartTitle}:</Typography>
                </div>

                <div className="charts">
                    <div className="chart-item">
                        <Typography variant="h5">By Suburb</Typography>
                        <LoadingIndicator loading={bySuburbLoading}>
                            <BySuburb data={bySuburb} mode={mode} onFilter={this.onFilter} />
                        </LoadingIndicator>
                    </div>

                    <div className="chart-item">
                        <Typography variant="h5">By Year</Typography>
                        <LoadingIndicator loading={byYearLoading}>
                            <ByYear data={byYear} mode={mode} onFilter={this.onFilter} />
                        </LoadingIndicator>
                    </div>

                    <div className="chart-item">
                        <Typography variant="h5">By Room</Typography>
                        <LoadingIndicator loading={byRoomLoading}>
                            <ByRoom data={byRoom} mode={mode} onFilter={this.onFilter} />
                        </LoadingIndicator>
                    </div>
                </div>
            </div>
        );
    }

    onSetMode(mode) {
        this.setState({ mode });
    }

    onFilter(filter) {
        filter = { ...this.state.filter, ...filter };
        this.setState({ filter }, () => this.updateData());
    }

    async updateData() {
        this.setState({ byYearLoading: true, byRoomLoading: true, bySuburbLoading: true });
        await Promise.all([this.loadBySuburb(), this.loadByYear(), this.loadByRoom()]);
    }

    async loadBySuburb() {
        const bySuburbData = await getAverageBySuburb(this.state.filter);

        this.setState({
            bySuburb: bySuburbData.rows.map(row => ({
                label: row.suburb,
                ...this.getRow(row),
            })),
            bySuburbLoading: false,
        });

        if (!this.state.filter.suburb) {
            this.setState({
                suburbs: bySuburbData.rows.map(row => ({ label: row.suburb, value: row.suburb }))
            })
        }
    }

    async loadByYear() {
        const byYearData = await getAverageByYear(this.state.filter);

        this.setState({
            byYear: byYearData.rows.map(row => ({
                label: row.year,
                ...this.getRow(row),
            })),
            byYearLoading: false,
        });

        if (!this.state.filter.year) {
            this.setState({
                years: byYearData.rows.map(row => ({ label: row.year, value: row.year }))
            })
        }
    }

    async loadByRoom() {
        const byRoomData = await getAverageByRoom(this.state.filter);

        this.setState({
            byRoom: byRoomData.rows.map(row => ({ 
                label: row.rooms, 
                ...this.getRow(row),
            })).sort(function (a, b) {
                const x = Number(a.rooms);
                const y = Number(b.rooms);
                return x < y ? -1 : x === y ? 0 : 1
            }),
            byRoomLoading: false,
        });
    }
    
    getRow(row) {
        return {
            price: Math.round(row.avg_price),
            sales: Number(row.sales),
            totalP: Math.round(row.total_price),
        }
    }
}

export function decodeMode(mode) {
    let title;
    let getValue;

    switch (mode) {
        case "avPrice":
            title = "Price";
            getValue = row => row.price;
            break;

        case "numOfProp":
            title = "Properties";
            getValue = row => row.sales;
            break;

        case "totalPrice":
            title = "Total(K)";
            getValue = row => row.totalP;
            break;

        default:
            throw new Error(`Unknown mode: ${mode}`)
    }

    return { title, getValue };
}
