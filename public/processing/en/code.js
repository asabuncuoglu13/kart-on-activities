const codeList = [{
        title: "fill r:",
        code: "fill({0});\n",
        input: "color",
        code_type: 3,
        no_in: 3
    },
    {
        title: "background r:",
        code: "background({0});\n",
        input: "color",
        code_type: 3,
        no_in: 3
    },
    {
        title: "stroke r:",
        code: "stroke({0});\n",
        input: "color",
        code_type: 3,
        no_in: 3
    },
    {
        title: "ellipse x:",
        code: "ellipse({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 3
    },
    {
        title: "rectangle x:",
        code: "rect({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "rect x:",
        code: "rect({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "triangle x:",
        code: "simpleTriangle({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "line sx:",
        code: "line({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "text:",
        code: "textSize({0}); \n text('{1}', {2}, {3});\n",
        input: "text",
        code_type: 3,
        no_in: 3
    },
    {
        title: "ghost animation x:",
        code: "animation(ghost, {0});\n",
        input: "shape",
        code_type: 3,
        no_in: 2
    },
    {
        title: "define function:",
        code: "{0} = function(){\n",
        input: "cond",
        code_type: 2,
        no_in: 1
    },
    {
        title: "end",
        code: "}\n",
        input: "end",
        code_type: 3,
        no_in: 0
    },
    {
        title: "call:",
        code: "{0}();\n",
        input: "call",
        code_type: 3,
        no_in: 1
    },
    {
        title: "new variable n:",
        code: "let {0} = {1};\n",
        input: "variable",
        code_type: 1,
        no_in: 2
    },
    {
        title: "increase value",
        code: "{0} += {1};\n",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "decrease value",
        code: "{0} -= {1};\n",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "set value",
        code: "{0} = {1};\n",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "if: ",
        code: "if({0}){\n",
        input: "cond",
        code_type: 3,
        no_in: 1
    },
    {
        title: "else",
        code: "}else{\n",
        input: "cond",
        code_type: 3,
        no_in: 0
    },
    {
        title: "repeat:",
        code: "for(let i = 0; i < {0}; i++){\n",
        input: "cond",
        code_type: 3,
        no_in: 1
    },
    {
        title: "loop on/off",
        code: "",
        input: "loop",
        code_type: 0,
        no_in: 0
    },
    {
        title: "random number:",
        code: "let {0} = random({1});\n",
        input: "variable",
        code_type: 1,
        no_in: 2
    },
    {
        title: "when device shaken",
        code: "deviceShaken = function() {\n",
        input: "cond",
        code_type: 2,
        no_in: 0
    },
    {
        title: "move x:",
        code: "translate({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 1
    },
    {
        title: "rotate:",
        code: "rotate({0});\n",
        input: "numeric",
        code_type: 3,
        no_in: 1
    },
    {
        title: "wait:",
        code: "await sleep({0});\n",
        input: "numeric",
        code_type: 3,
        no_in: 1
    },
    {
        title: "",
        code: "",
        input: "numeric",
        code_type: 2,
        no_in: 1
    }
]