import React, { useEffect, useRef, useState, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validateWithOutCallBack = (data) => {
        console.log("validateWithOutCallBack", data);
    };

    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallBack]);

    const validateWithCallBack = useCallback((data) => {
        console.log("validateWithCallBack", data);
    }, []);

    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);

    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallBack: {withOutCallBack.current}</p>
            <p>Render withCallBack: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChange}
                value={data.email || ""}
                name="email"
                placeholder="Enter your email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
