import React, { useContext } from "react";
import { ApplicationContext } from "../../applicationContext";
import "./styles.css";
import IconJeremy from "../../assets/images/image-jeremy.png";

export default function UserCard({ showFor, setShowFor }) {
    const { user } = useContext(ApplicationContext);

    return (
        <div className="user-card">
            <div className="user">
                <div className="user-icon">
                    <img src={IconJeremy} alt="user icon" />
                </div>
                <div className="user-text">
                    <span id="report">Report for</span>
                    <br />
                    <span id="name">{user.name}</span>
                </div>
            </div>
            <div className="user-selection">
                <div
                    onClick={() => setShowFor("daily")}
                    className={`user-selection-item ${
                        showFor === "daily" ? "active" : ""
                    }`}
                >
                    Daily
                </div>
                <div
                    onClick={() => setShowFor("weekly")}
                    className={`user-selection-item ${
                        showFor === "weekly" ? "active" : ""
                    }`}
                >
                    Weekly
                </div>
                <div
                    onClick={() => setShowFor("monthly")}
                    className={`user-selection-item ${
                        showFor === "monthly" ? "active" : ""
                    }`}
                >
                    Monthly
                </div>
            </div>
        </div>
    );
}
