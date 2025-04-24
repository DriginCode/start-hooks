import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = React.useRef();
    const handleCLick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWidth = (params) => {
        console.log(inputRef.current);
        inputRef.current.style.width = "300px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary mt-2" onClick={handleCLick}>
                Фокус на инпут
            </button>
            <button
                className="btn btn-secondary mt-2"
                onClick={handleClickWidth}
            >
                Изменить ширину объекта
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
