import React from "react";

import "./Task3.scss";

const Task3 = () => {
    const programmerOutput = [
        {
            name: "Uncle Bobby",
            linesOfCode: 500
        },
        {
            name: "Suzie Q",
            linesOfCode: 1500
        },
        {
            name: "Jimmy Gosling",
            linesOfCode: 150
        },
        {
            name: "Gracie Hopper",
            linesOfCode: 1000
        }
    ];
       
    let totalOutput = 0;
       
    for (let i = 0; i < programmerOutput.length; i++) {
        totalOutput += programmerOutput[i].linesOfCode;
       }

    return(
        <div className="Code">
            <h1>{totalOutput}</h1>
        </div>
    );
};

export default Task3;