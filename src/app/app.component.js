var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2:
                return decorators.reduceRight(function (o, d) {
                    return (d && d(o)) || o;
                }, target);
            case 3:
                return decorators.reduceRight(function (o, d) {
                    return (d && d(target, key)), void 0;
                }, void 0);
            case 4:
                return decorators.reduceRight(function (o, d) {
                    return (d && d(target, key, o)) || o;
                }, desc);
        }
    };
var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var template = require('./app.component.html');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }

    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: template,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map