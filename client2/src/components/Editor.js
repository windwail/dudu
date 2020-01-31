import ReactDOM from "react-dom";
import React, { Component } from "react";

import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./EditorTools";


function Editor(params){



    return (
        <EditorJs tools={EDITOR_JS_TOOLS} holder={params.holder}>
        <div id={params.holder} style={{paddingBottom: 0}} />
        </EditorJs>);
}

export default Editor;