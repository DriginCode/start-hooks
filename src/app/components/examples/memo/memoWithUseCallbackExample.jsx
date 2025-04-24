import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func.isRequired
};

const MemoizedLogOutButton = React.memo(
    LogOutButton,
    (prevProps, nextProps) => {
        if (prevProps === nextProps) {
            return true;
        }
        return false;
    }
);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);

    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initiate render
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};
export default MemoWithUseCallbackExample;
