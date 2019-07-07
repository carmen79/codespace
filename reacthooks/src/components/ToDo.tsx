import React from "react";

// interface Iprops {
//     text: string;
//     delete: () => void;
// }

const ToDo: React.FC = () => {
    const [text, setText] = React.useState("");

    const deleteText = () => void {

    };

    return (
        <div>
            <div>{text}</div>
            <div>
                <button onClick={deleteText}>Delete</button>
            </div>
        </div>
    );
}

export default ToDo;