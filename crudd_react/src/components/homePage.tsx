import React from "react";

interface IProps {
    userName: string;
}

const Homepage: React.FC<IProps> = props => {


    return (
        <div className="container">
            <div className="form-group">
                <div>
                    <h5>HOLAAAAAAAAAAAAAAAAAA {props.userName}</h5>
                </div>

            </div>
        </div>
    );
};


export default Homepage;
