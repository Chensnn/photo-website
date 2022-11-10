import React from "react";

const Picture = ({ data }) => {
    return (
        <div className="picture">
            <p>PhotoGrapher /&ensp;{data.photographer}</p>
            <div className="imageContainer">
                <img src={data.src.large} alt="" />
            </div>
            <p>
                Download Image /&ensp;
                <a target="_blank" href={data.src.large}>
                    Click Here
                </a>
            </p>
        </div>
    );
};

export default Picture;
