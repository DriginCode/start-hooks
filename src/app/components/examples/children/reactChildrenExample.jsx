import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || "",
            error: child.props.name === "email" ? "error" : ""
        };

        return React.cloneElement(child, config);
    });
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField label="email" name="email" type="text" />
                <TextField label="password" name="password" type="password" />
            </FormComponent>
        </CardWrapper>
    );
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ReactChildrenExample;
