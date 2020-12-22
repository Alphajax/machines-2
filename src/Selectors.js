function Selectors({onChange}) {
    return (
        <div className="row">
            <div className="col-3">
                <div className="input-group mb-3">
                    <input onChange={(e) => onChange("length", +e.target.value)}
                        type="number" min="0.6" max="12" step = "0.1" className="form-control" placeholder="Длина иловочника"
                           aria-label="Длина пиловочника" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">М</span>
                </div>
            </div>
            <div className="col-3">
                <div className="input-group mb-3">
                    <input onChange={(e) => onChange("diameter", +e.target.value)}
                        type="number" min="0" className="form-control" placeholder="Диаметр пиловочника"
                           aria-label="Диаметр пиловочника" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">СМ</span>
                </div>
            </div>
            <div className="col-3">
                <div className="input-group mb-3">
                    <input onChange={(e) => onChange("clearanceAbove", +e.target.value)}
                        type="number" min="0" className="form-control" placeholder="Просвет над пилой"
                           aria-label="Просвет над пилой" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">СМ</span>
                </div>
            </div>
            <div className="col-3">
                <div className="input-group mb-3">
                    <input onChange={(e) => onChange("clearanceBelow", +e.target.value)}
                        type="number" min="0" className="form-control" placeholder="Просвет под пилой"
                           aria-label="Просвет под пилой" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">СМ</span>
                </div>
            </div>
        </div>
    )
}

export default Selectors;
