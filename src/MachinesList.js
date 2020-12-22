import React from "react";

export default class MachinesList extends React.Component {

    constructor(props) {
        super(props);
        this.renderMachine = function (machine) {
            return (
                <li className="list-group-item" style={{"padding": "5%"}}>
                    <h5 className="card-title">{machine.name}</h5>
                    <p className="card-subtitle mb-2 text-muted">
                        Длина пиловочника:
                        от {machine.minLength}{machine.maxLength ? " до " + machine.maxLength : null}
                    </p>
                    <p className="card-subtitle mb-2 text-muted">
                        Диаметр пиловочника: {machine.diameter}
                    </p>
                    <p className="card-subtitle mb-2 text-muted">
                        Макс. просвет над пилой: {machine.clearanceAbove}
                    </p>
                    <p className="card-subtitle mb-2 text-muted">
                        Макс. просвет под пилой: {machine.clearanceBelow}
                    </p>
                    <p className="card-subtitle mb-2 text-muted">
                        Ширина пропила: {machine.width}
                    </p>
                    <p className="card-subtitle mb-2 text-muted">
                        Производительность: {machine.performance}
                    </p>
                </li>
            )
        }
    }

    render() {
        return (
            <ul className="list-group">
                {
                    this.props.items.map(this.renderMachine)
                }
            </ul>
        )
    }
}
