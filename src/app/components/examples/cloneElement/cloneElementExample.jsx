import React from "react";
import CardWrapper from "../../common/Card";
import TextField from "../../common/form/textField";

import SmallTitle from "../../common/typografy/smallTitle";
const CloneElementExample = () => {
    const field = <TextField label="email" placeholder="email" />;
    const handleChange = (target) => {
        console.log("change: ", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, {
                onChange: handleChange,
                label: "Cloned email"
            })}
            <SmallTitle>Клонирование элемента с изменением label</SmallTitle>
        </CardWrapper>
    );
};

export default CloneElementExample;
