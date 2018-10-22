var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var Item = /** @class */ (function () {
    function Item(todo, price) {
        this.todo = todo;
        this.price = price;
        this.done = false;
    }
    return Item;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.items = [
            { todo: "Хлеб", done: false, price: 15.9 },
            { todo: "Масло", done: false, price: 60 },
            { todo: "Картофель", done: true, price: 22.6 },
            { todo: "Сыр", done: false, price: 310 }
        ];
    }
    AppComponent.prototype.addItem = function (text, price) {
        if (text == null || text.trim() == "" || price == null)
            return;
        this.items.push(new Item(text, price));
    };
    AppComponent = __decorate([
        Component({
            selector: 'todo',
            template: "<div class=\"page-header\">\n        <h1> \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A </h1>\n    </div>\n    <div class=\"panel\">\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" [(ngModel)]=\"text\" placeholder = \"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-6\">\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"price\" placeholder=\"\u0426\u0435\u043D\u0430\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <button class=\"btn btn-default\" (click)=\"addItem(text, price)\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n                </div>\n            </div>\n        </div>\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>\u041F\u0440\u0435\u0434\u043C\u0435\u0442</th>\n                    <th>\u0426\u0435\u043D\u0430</th>\n                    <th>\u041A\u0443\u043F\u043B\u0435\u043D\u043E</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of items\">\n                    <td>{{item.todo}}</td>\n                    <td>{{item.price}}</td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"item.done\" /></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>"
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=bla.component.js.map