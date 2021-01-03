const codeList = [{
        title: "doldur",
        code: "fill({0}, 75, 50);\n",
        input: "attr",
        code_type: 3,
        no_in: 1
    },
    {
        title: "arkaplan",
        code: "background({0}, 75, 50);\n",
        input: "attr",
        code_type: 3,
        no_in: 1
    },
    {
        title: "kenar",
        code: "stroke({0}, 75, 50);\n",
        input: "attr",
        code_type: 3,
        no_in: 1
    },
    {
        title: "boyutlar",
        code: "size_w = {0}; size_h = {1};",
        input: "attr",
        code_type: 3,
        no_in: 2
    },
    {
        title: "konum",
        code: "loc_x = {0}; loc_y = {1};",
        input: "attr",
        code_type: 3,
        no_in: 2
    },
    {
        title: "elips",
        code: "ellipse(loc_x, loc_y, size_w, size_h);\n",
        input: "shape",
        code_type: 3,
        no_in: 0
    },
    {
        title: "şekle başla",
        code: "beginShape();\n",
        input: "shape",
        code_type: 3,
        no_in: 0
    },
    {
        title: "şekli bitir",
        code: "endShape(CLOSE);\n",
        input: "shape",
        code_type: 3,
        no_in: 0
    },
    {
        title: "nokta",
        code: "vertex(loc_x, loc_y);\n",
        input: "shape",
        code_type: 3,
        no_in: 0
    },
    {
        title: "ötele",
        code: "translate({0}, {1});\n",
        input: "attr",
        code_type: 3,
        no_in: 2
    },
    {
        title: "döndür:",
        code: "rotate({0});\n",
        input: "attr",
        code_type: 3,
        no_in: 1
    },
    {
        title: "dikdörtgen",
        code: "rect(loc_x, loc_y, size_w, size_h);\n",
        input: "shape",
        code_type: 3,
        no_in: 0
    },
    {
        title: "dörtgen",
        code: "rect(loc_x, loc_y, size_w, size_h);\n",
        input: "shape",
        code_type: 3,
        no_in: 0
    },
    {
        title: "üçgen",
        code: "simpleTriangle(loc_x, loc_y, size_w, size_h);\n",
        input: "shape",
        code_type: 3,
        no_in: 0
    },
    {
        title: "yazı",
        code: "textSize(size_h); \n text('{0}', loc_x, loc_y);\n",
        input: "shape",
        code_type: 3,
        no_in: 1
    },
    {
        title: "kukla",
        code: "animation(ghost, loc_x, loc_y);\n",
        input: "shape",
        code_type: 3,
        no_in: 0
    },
    {
        title: "fonksiyon tanımla: ",
        code: "{0} = function(){\n",
        input: "cond",
        code_type: 2,
        no_in: 1
    },
    {
        title: "bitir",
        code: "}\n",
        input: "end",
        code_type: 3,
        no_in: 0
    },
    {
        title: "çağır:",
        code: "{0}();\n",
        input: "call",
        code_type: 3,
        no_in: 1
    },
    {
        title: "değişken oluştur",
        code: "let {0} = {1};\n",
        input: "variable",
        code_type: 1,
        no_in: 2
    },
    {
        title: "değerini artır",
        code: "{0} += {1};\n",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "değerini azalt",
        code: "{0} -= {1};\n",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "değer ata",
        code: "{0} = {1};\n",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "eğer : ",
        code: "if({0}){\n",
        input: "cond",
        code_type: 3,
        no_in: 1
    },
    {
        title: "değilse",
        code: "}else{\n",
        input: "cond",
        code_type: 3,
        no_in: 0
    },
    {
        title: "tekrarla",
        code: "for(let i = 0; i < {0}; i++){\n",
        input: "cond",
        code_type: 3,
        no_in: 1
    },
    {
        title: "sürekli tekrarı aç/kapat",
        code: "",
        input: "loop",
        code_type: 0,
        no_in: 0
    },
    {
        title: "rastgele sayı",
        code: "let {0} = random({1});\n",
        input: "variable",
        code_type: 1,
        no_in: 2
    },
    {
        title: "cihazı sallayınca",
        code: "deviceShaken = function() {\n",
        input: "cond",
        code_type: 2,
        no_in: 0
    },
    {
        title: "bekle",
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