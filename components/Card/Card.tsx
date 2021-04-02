import React from "react";
import { StyleSheet } from "react-native";
import style from "./CardStyle";

// const style = {
//     container: {
//         flex: 1,
//         backgroundColor: "red",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// };

const Card: React.FC = ({ children }) => {
    return (
        // <p>hello</p>
        <div style={style.card}>
            <div style={style.cardTop}>
                <p>click and collect</p>
                <p>13/03/2021 à 9h13</p>
            </div>
            <div style={style.cardBody}>
                <div>
                    <p>Commande client</p>
                    <p>date du rendez vous</p>
                    <div>
                        <p>222m</p>
                        <p>3.48kg</p>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Card;
