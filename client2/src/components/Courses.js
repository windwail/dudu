import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../context";
import hello from "../services/hello";
import hello2 from "../services/hello2";

function Courses() {

    const {store, dispatch} = useContext(Context);

    const [result, setResult] = useState("");

    const getHello = () => {
        hello({
            token: store.user.token,
            success: (data) => {
                setResult(data.message);
            },
            error: (e) => {

            }
        });
    }

    const getHello2 = () => {
        hello2({
            token: store.user.token,
            success: (data) => {
                setResult(data.message);
            },
            error: (e) => {

            }
        });
    }

    return (<div>

        <button className="button" onClick={getHello}>
            get HELLO
        </button>
        <button className="button" onClick={getHello2}>
            get HELLO
        </button>
        <div>
            Result:{result}
        </div>

    </div>);
}

export default Courses;