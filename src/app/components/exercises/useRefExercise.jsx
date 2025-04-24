import React, { useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const inputRef = React.useRef();

    const [isModified, setIsModified] = useState(false); // Состояние для переключения

    const handleClickChange = () => {
        if (isModified) {
            // Возвращаем к исходным значениям
            inputRef.current.style.width = "60px";
            inputRef.current.style.height = "40px";
            inputRef.current.innerText = "Блок";
        } else {
            // Изменяем значения
            inputRef.current.style.width = "150px";
            inputRef.current.style.height = "80px";
            inputRef.current.innerText = "text";
        }
        setIsModified(!isModified); // Переключаем состояние
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={inputRef}
            >
                <small>Блок</small>
            </div>
            <button
                className="btn btn-secondary mt-2"
                onClick={handleClickChange}
            >
                Изменить блок
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
