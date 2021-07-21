import Gtk from 'gtk3';

function gtk3_test1() {
    Gtk.init(null);

    var calcVal = '';

    function updateDisplay() {
        label.set_markup(`<span size='30000'>${calcVal}</span>`);

        if (calcVal === '')
            label.set_markup("<span size='30000'>0</span>");
    }

    function clear() {
        calcVal = '';
        updateDisplay();
    }

    function backspace() {
        calcVal = calcVal.substring(0, calcVal.length - 1);
        updateDisplay();
    }

    function pressedEquals() {
        label.set_markup(`<span size='30000'>${calcVal}</span>`);
    }

    function pressedOperator(button: Gtk.Button) {
        calcVal += button.label;
        updateDisplay();
    }

    function pressedNumber(button: Gtk.Button) {
        calcVal = calcVal + button.label;
        updateDisplay();
    }

    function swapSign() {
        calcVal = calcVal[0] === '-' ? calcVal.substring(1) : `-${calcVal}`;
        updateDisplay();
    }

    function randomNum() {
        calcVal = `${Math.floor(Math.random() * 1000)}`;
        updateDisplay();
    }

    function packButtons(buttons: Gtk.Button[], vbox: Gtk.Box) {
        var hbox = new Gtk.HBox();

        hbox.homogeneous = true;

        vbox.pack_start(hbox, true, true, 2);

        for (let i = 0; i <= 4; i++)
            hbox.pack_start(buttons[i], true, true, 1);
    }

    function createButton(str: string, func: (button: Gtk.Button) => void) {
        var btn = new Gtk.Button({ label: str });
        btn.connect('clicked', func);
        return btn;
    }

    function createButtons() {
        var vbox = new Gtk.VBox({ homogeneous: true });

        packButtons([
            createButton('(', pressedNumber),
            createButton('←', backspace),
            createButton('↻', randomNum),
            createButton('Clr', clear),
            createButton('±', swapSign),
        ], vbox);

        packButtons([
            createButton(')', pressedNumber),
            createButton('7', pressedNumber),
            createButton('8', pressedNumber),
            createButton('9', pressedNumber),
            createButton('/', pressedOperator),
        ], vbox);

        packButtons([
            createButton('sin(', pressedNumber),
            createButton('4', pressedNumber),
            createButton('5', pressedNumber),
            createButton('6', pressedNumber),
            createButton('*', pressedOperator),
        ], vbox);

        packButtons([
            createButton('cos(', pressedNumber),
            createButton('1', pressedNumber),
            createButton('2', pressedNumber),
            createButton('3', pressedNumber),
            createButton('-', pressedOperator),
        ], vbox);

        packButtons([
            createButton('tan(', pressedNumber),
            createButton('0', pressedNumber),
            createButton('.', pressedNumber),
            createButton('=', pressedEquals),
            createButton('+', pressedOperator),
        ], vbox);

        return vbox;
    }

    var win = new Gtk.Window({
        title: 'Calculator',
        resizable: false,
        opacity: 0.6,
    });

    win.resize(250, 250);
    win.connect('destroy', () => Gtk.main_quit());

    var label = new Gtk.Label({ label: '' });
    label.set_alignment(1, 0);
    updateDisplay();

    var mainvbox = new Gtk.VBox();
    mainvbox.pack_start(label, false, true, 1);
    mainvbox.pack_start(new Gtk.HSeparator(), false, true, 5);
    mainvbox.pack_start(createButtons(), true, true, 2);

    win.add(mainvbox);
    win.show_all();
    Gtk.main();

}
