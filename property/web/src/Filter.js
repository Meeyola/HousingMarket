import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import './Filter.css';
import Select from './Select';
import TextField from '@material-ui/core/TextField';


class Filter extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            suburb: "",
            year: "",
            rooms: "",
            prevFilter: null,
        };

        this.handleSuburbChange = this.handleSuburbChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleRoomsChange = this.handleRoomsChange.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.filter !== state.prevFilter) {
            return {
                filter: props.filter,
                prevFilter: props.filter,
                ...props.filter,
            }
        }

        return null;
    }

    render() {
        return (
            <div className="Filter">
                <div className="input-element">
                    <div className="suburb-select">
                        <Select options={this.props.suburbs} value={this.state.suburb} onChange={this.handleSuburbChange}
                            label="Suburb" isClearable />
                    </div>
                </div>
                <div className="input-element">
                    <div className="year-select">
                        <Select options={this.props.years} value={this.state.year} onChange={this.handleYearChange}
                            label="Year" isClearable />
                    </div>
                </div>
                <div className="input-element">
                    <TextField fullWidth label="Rooms" value={this.state.rooms} onChange={this.handleRoomsChange} type="number" InputLabelProps={{ shrink: true }} />
                </div>
                <div className="input-element">
                    <RadioGroup value={this.props.mode} onChange={this.handleChange}>
                        <FormControlLabel value="avPrice" control={<Radio />} label="Show average price" />
                        <FormControlLabel value="numOfProp" control={<Radio />} label="Show number of properties sold" />
                        <FormControlLabel value="totalPrice" control={<Radio />} label="Show total sales price" />
                    </RadioGroup>
                </div>
            </div>
        );
    }

    handleSuburbChange(suburb) {
        this.setState({ suburb });
        this.props.onFilter({ suburb });
    }

    handleYearChange(year) {
        this.setState({ year });
        this.props.onFilter({ year });
    }

    handleRoomsChange(e) {
        this.setState({ rooms: e.currentTarget.value });
        let rooms = e.currentTarget.value;
        this.props.onFilter({ rooms });
    }

    handleChange = event => {
        this.props.onSetMode(event.target.value);
    }
}

export default Filter;