import React, { useState, useEffect } from "react";
import { View } from "../Themed";

type Props = {};

const HeaderProfile: React.FC<Props> = ({ children }) => {
    let [numberOfSteps, setNumberOfSteps] = useState(0);

    useEffect(() => {
        window.setInterval(() => {
            console.log("hello");
            setNumberOfSteps((numSteps) => numSteps + 1);
        }, 1000);
    }, []);

    return (
        <div id="background">
            <div id="profile">
                <div id="picture">
                    <img src="./assets/profile.svg" />
                </div>
                <div id="infos">
                    <p>Benoit Duval</p>
                    <p>Chef de Rayon Jardinage</p>
                </div>
            </div>
            <div id="activity">
                <p id="activityTitle">Activité quotidienne</p>
                <p id="stepCount">{numberOfSteps} pas</p>
            </div>
        </div>
    );
};

export default HeaderProfile;
