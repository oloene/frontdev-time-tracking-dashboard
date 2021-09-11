import React from "react";
import "./styles.css";
import { ReactComponent as IconEllipsis } from "../../assets/images/icon-ellipsis.svg";

export default function TimeTrackingCard({ item, itemIndex, showFor }) {
    const renderHourLabel = () =>
        `${
            showFor === "daily"
                ? "Yesterday"
                : showFor === "weekly"
                ? "Last Week"
                : "Last Month"
        } - `;

    return (
        <div className={`time-tracking-card c-${itemIndex}`}>
            <div className={`background c-${itemIndex}`}></div>
            <div className="foreground">
                <div className="title">
                    <span>{item.title}</span>
                    <span id="icon">
                        <IconEllipsis />
                    </span>
                </div>
                <div className="hours">
                    <div className="current-hours">
                        <span>{item.timeframes[showFor].current}hrs</span>
                    </div>
                    <div className="previous-hours">
                        <span>
                            {renderHourLabel()}
                            {item.timeframes[showFor].previous}hrs
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
