var dice = [];
var btnCreate = $("#btn-create");
var btnRoll = $("#btn-roll");
var btnSum = $("#btn-sum");
$(btnCreate).click(function () {
    var die = new Die();
});
$(btnRoll).click(function () {
    for (var i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
});
$(btnSum).click(function () {
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        sum += dice[i].value;
    }
    alert("The sum of all dice on screen = ".concat(sum, "."));
});
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = $("<div></div>");
        this.roll();
        $(this.div).appendTo("#dice-container");
        dice.push(this);
        $(this.div).click(function () {
            _this.roll();
        });
        $(this.div).dblclick(function () {
            $(_this.div).remove();
            dice.splice($.inArray(_this, dice), 1);
        });
    }
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.getChar();
        $(this.div).text("" + this.char + "");
        $(this.div).addClass("die");
    };
    Die.prototype.getChar = function () {
        if (this.value === 1) {
            this.char = "⚀";
        }
        else if (this.value === 2) {
            this.char = "⚁";
        }
        else if (this.value === 3) {
            this.char = "⚂";
        }
        else if (this.value === 4) {
            this.char = "⚃";
        }
        else if (this.value === 5) {
            this.char = "⚄";
        }
        else {
            this.char = "⚅";
        }
    };
    return Die;
}());
