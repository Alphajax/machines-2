import React from "react";
import './App.css';
import Selectors from "./Selectors";
import machines from "./machines";
import {useState} from "react";
import MachinesList from "./MachinesList";


const App = () => {

    const [length, setLength] = useState(20);
    const [diameter, setDiameter] = useState(0);
    const [clearanceAbove, setClearanceAbove] = useState(0);
    const [clearanceBelow, setClearanceBelow] = useState(0);
    let machinesToShow = [...machines];

    const onInputChange = (type, value) => {
        switch (type) {
            case "length":
                setLength(value);
                break;
            case "diameter":
                setDiameter(value);
                break;
            case "clearanceAbove":
                setClearanceAbove(value);
                break;
            case "clearanceBelow":
                setClearanceBelow(value);
                break;
            default:
                break;
        }
    }

    const isMachineSuitable = (machine) => {
        if (machine.maxLength) {
            return (
                length >= machine.minLength
                && length <= machine.maxLength
                && diameter <= machine.diameter
                && clearanceAbove <= machine.clearanceAbove
                && clearanceBelow <= machine.clearanceBelow
            )
        } else {
            return (
                length >= machine.minLength
                && diameter <= machine.diameter
                && clearanceAbove <= machine.clearanceAbove
                && clearanceBelow <= machine.clearanceBelow
            )
        }
    }

    machinesToShow = machinesToShow.filter(isMachineSuitable)
    return (
        <div className="container">
            <h1 className="display-1 center-text">Подбор станка</h1>
            <Selectors onChange={onInputChange}/>
            <MachinesList items={machinesToShow}/>
        </div>
    );
}

export default App;
