
export function Switcher() {
    return (
        <>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="switch bg-gradient-to-b from-oceanBlue to-silver">
                <div className="powersign"></div>
            </label>

            <style>{`
            #checkbox {
                display: none;
            }

            .switch {
                position: relative;
                width: 55px;
                height: 55px;
                border-radius: 50%;
                z-index: 1;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 0px 3px rgb(2, 2, 2) inset;
            }

            .powersign {
                position: relative;
                width: 30%;
                height: 30%;
                border: 4px solid #116AE3;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 0 5px #116AE3;
            }

            .powersign::before {
                content:"";
                width:4px;
                height:90%;
                background-color: transparent;
                z-index:2;
                top:-60%;
            }
            .powersign::after {
                content: "";
                width: 4px;
                height: 100%;
                background-color: #116AE3;
                position: absolute;
                top: -75%;
                z-index: 3;
            }
            #checkbox:checked + .switch .powersign {
                border: 4px solid rgb(255, 255, 255);
                box-shadow: 0px 0px 10px rgb(151, 243, 255),
                    0px 0px 5px rgb(151, 243, 255) inset;
            }

            #checkbox:checked + .switch .powersign::after {
                background-color: rgb(255, 255, 255);
                box-shadow: 0px 0px 5px rgb(151, 243, 255);
            }

            #checkbox:checked + .switch {
                    box-shadow: 0px 0px 1px rgb(151, 243, 255) inset,
                    0px 0px 2px rgb(151, 243, 255) inset,
                    0px 0px 10px rgb(151, 243, 255) inset,
                    0px 0px 40px rgb(151, 243, 255),
                    0px 0px 100px rgb(151, 243, 255),
                    0px 0px 5px rgb(151, 243, 255);
                    border: 2px solid rgb(255, 255, 255);
                    background-color: rgb(146, 180, 184);
            }

            #checkbox:checked + .switch .powersign::before {
                background-color: rgb(146, 180, 184);
            }
            `}
            </style>
        </>
    );
}