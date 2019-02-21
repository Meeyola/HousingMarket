import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { decodeMode } from "../Dashboard";
import './BySuburb.css'

export default class BySuburb extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { mode, data } = this.props;
        const { title, getValue } = decodeMode(mode);

        return (
            <div className="BySuburb">
                <Paper>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Suburb</TableCell>
                                <TableCell align="right">{title}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(row => (
                                <TableRow key={row.label} onClick={() => this.handleClick(row.label)}>
                                    <TableCell component="th" scope="row">
                                        {row.label}
                                    </TableCell>
                                    <TableCell align="right">{getValue(row)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )

    }

    handleClick(suburb) {
        this.props.onFilter({ suburb });
    }
}
