"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var User = (function (Component) {
    function User() {
        _classCallCheck(this, User);

        _get(Object.getPrototypeOf(User.prototype), "constructor", this).call(this);
        this.state = {
            userName: "",
            password: "" };
    }

    _inherits(User, Component);

    _prototypeProperties(User, null, {
        onUserUpdate: {
            value: function onUserUpdate(event) {
                console.log("Siemak");
                console.log("onUserUpdate: " + event.target.value);
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                console.log("Elo");

                return React.createElement(
                    "div",
                    { style: { paddingLeft: 24 } },
                    "There is User container!!",
                    React.createElement("br", null),
                    React.createElement("input", { onChange: this.onUserUpdate.bind(this, "userName"),
                        type: "text",
                        placeholder: "userName"

                    }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("input", { type: "password",
                        placeholder: "password",
                        onChange: this.onUserUpdate.bind(this, "password")
                    }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        null,
                        "Add User"
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return User;
})(Component);

module.exports = User;