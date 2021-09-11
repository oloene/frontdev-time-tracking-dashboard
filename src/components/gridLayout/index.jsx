import React, { useState } from "react";
import TimeTrackingCard from "../timeTrackingCard";
import UserCard from "../userCard";
import "./styles.css";

export default function GridLayout({ data }) {
    const [showFor, setShowFor] = useState("weekly");

    return (
        <div className="grid-layout">
            <UserCard showFor={showFor} setShowFor={setShowFor} />
            {data.map((item, itemIndex) => {
                return (
                    <TimeTrackingCard
                        key={itemIndex}
                        item={item}
                        itemIndex={itemIndex}
                        showFor={showFor}
                    />
                );
            })}
        </div>
    );
}
