import * as React from "react";
import "./LoadingIndicator.css";
import { CircularProgress } from "@material-ui/core";

export default function LoadingIndicator({ loading, children }) {
    return <div className="LoadingIndicator">
        {children}
        {loading === true && <div className="indicator">
            <CircularProgress />
        </div>}
    </div>
}