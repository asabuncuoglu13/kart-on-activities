class CodeP5 {
    constructor() {
        this.p5_obj = {};
    }

    runCode() {
        try {
            let code = p5code.format(drawBlocks.join(' '));
            let s = new Function("p", code);
            if (debug) console.log(code);
            this.p5_obj = new p5(s);
        } catch (e) {
            alert(e);
        }
    }

}