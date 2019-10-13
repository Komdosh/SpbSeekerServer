(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        function webpackEmptyAsyncContext(req) {
            // Here Promise.resolve().then() is used instead of new Promise() to prevent
            // uncaught exception popping up in devtools
            return Promise.resolve().then(function () {
                var e = new Error("Cannot find module '" + req + "'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            });
        }

        webpackEmptyAsyncContext.keys = function () {
            return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/button/button.component.html":
    /*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/button/button.component.html ***!
  \*****************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<button\r\n    [class.accent]=\"type === 'accent'\"\r\n    [class.bordered]=\"type === 'bordered'\"\r\n    [title]=\"tooltip\"\r\n    [disabled]=\"disabled\"\r\n    (click)=\"handleClick($event)\"\r\n>\r\n    <ng-content></ng-content>\r\n</button>\r\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/checkbox/checkbox.component.html":
    /*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/checkbox/checkbox.component.html ***!
  \*********************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div\r\n    class=\"checkbox\"\r\n    [class.active]=\"checked\"\r\n    [class.disabled]=\"disabled\"\r\n    (click)=\"handleCheck($event, checked)\"\r\n>\r\n    <div class=\"checkbox-container\">\r\n        <input\r\n            type=\"checkbox\"\r\n            value=\"None\"\r\n            name=\"check\"\r\n            [id]=\"id\"\r\n            [checked]=\"checked\"\r\n            [disabled]=\"disabled\"\r\n        />\r\n        <label [for]=\"id\"></label>\r\n    </div>\r\n    <div class=\"title\" *ngIf=\"title\">{{ title }}</div>\r\n</div>\r\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/color-picker/color-picker.component.html":
    /*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/color-picker/color-picker.component.html ***!
  \*****************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div class=\"grid\">\r\n    <div\r\n        class=\"wrapper\"\r\n        *ngFor=\"let color of colors\"\r\n        [class.active]=\"color === selectedColor\"\r\n        (click)=\"selectColor(color)\"\r\n    >\r\n        <div class=\"item\" [style.backgroundColor]=\"color\"></div>\r\n        <div class=\"layer\"></div>\r\n    </div>\r\n</div>\r\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/select/select.component.html":
    /*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/select/select.component.html ***!
  \*****************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div class=\"select-container\" [ngClass]=\"class\">\r\n    <div\r\n        class=\"title\"\r\n        *ngIf=\"label\"\r\n        [title]=\"tooltip\"\r\n        [class.selected]=\"isSelect\"\r\n        [style.fontSize.rem]=\"labelFontSize\"\r\n    >\r\n        {{ label }}\r\n    </div>\r\n    <select\r\n        (change)=\"handleChange($event)\"\r\n        (focus)=\"toggleSelect()\"\r\n        (blur)=\"toggleSelect()\"\r\n        [class.filled]=\"filled\"\r\n        [disabled]=\"disabled\"\r\n        [title]=\"tooltip\"\r\n        [value]=\"value\"\r\n    >\r\n        <option\r\n            *ngFor=\"let option of options\"\r\n            [value]=\"option.value\"\r\n            [selected]=\"option.value === value\"\r\n            >{{ option.caption }}</option\r\n        >\r\n    </select>\r\n</div>\r\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/tab/tab.component.html":
    /*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/tab/tab.component.html ***!
  \***********************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div\r\n    class=\"tab\"\r\n    [class.active]=\"active\"\r\n    [class.disabled]=\"disabled\"\r\n    (click)=\"handleClick()\"\r\n>\r\n    <div class=\"content\"><ng-content></ng-content></div>\r\n    <div class=\"border\" *ngIf=\"active\"></div>\r\n</div>\r\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/toggle-button/toggle-button.component.html":
    /*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/toggle-button/toggle-button.component.html ***!
  \*******************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div class=\"toggle\" [class.disabled]=\"disabled\" (click)=\"handleClick()\">\r\n    <div class=\"states\">\r\n        <div class=\"state\" [class.active]=\"!pressed\" #state>\r\n            {{ firstState }}\r\n        </div>\r\n\r\n        <div class=\"state\" [class.active]=\"pressed\">{{ secondState }}</div>\r\n        <div\r\n            class=\"slider\"\r\n            [class.toggled]=\"pressed\"\r\n            [style.width.px]=\"stateElement.nativeElement.clientWidth\"\r\n            #slider\r\n        ></div>\r\n    </div>\r\n</div>\r\n");

        /***/
    }),

    /***/
    "./node_modules/tslib/tslib.es6.js":
    /*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__extends", function () {
            return __extends;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__assign", function () {
            return __assign;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__rest", function () {
            return __rest;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__decorate", function () {
            return __decorate;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__param", function () {
            return __param;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__metadata", function () {
            return __metadata;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
            return __awaiter;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__generator", function () {
            return __generator;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
            return __exportStar;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__values", function () {
            return __values;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__read", function () {
            return __read;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__spread", function () {
            return __spread;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
            return __spreadArrays;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__await", function () {
            return __await;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
            return __asyncGenerator;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
            return __asyncDelegator;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
            return __asyncValues;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
            return __makeTemplateObject;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__importStar", function () {
            return __importStar;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
            return __importDefault;
        });
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        /* global Reflect, Promise */

        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array && function (d, b) {
                    d.__proto__ = b;
                }) ||
                function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };

        function __extends(d, b) {
            extendStatics(d, b);

            function __() {
                this.constructor = d;
            }

            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }

        var __assign = function () {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };

        function __rest(s, e) {
            var t = {};
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function")
                for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                }
            return t;
        }

        function __decorate(decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }

        function __param(paramIndex, decorator) {
            return function (target, key) {
                decorator(target, key, paramIndex);
            }
        }

        function __metadata(metadataKey, metadataValue) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
        }

        function __awaiter(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function (resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function step(result) {
                    result.done ? resolve(result.value) : new P(function (resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
                }

                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        }

        function __generator(thisArg, body) {
            var _ = {
                label: 0, sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                }, trys: [], ops: []
            }, f, y, t, g;
            return g = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
            }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
                return this;
            }), g;

            function verb(n) {
                return function (v) {
                    return step([n, v]);
                };
            }

            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (_) try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return {value: op[1], done: false};
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return {value: op[0] ? op[1] : void 0, done: true};
            }
        }

        function __exportStar(m, exports) {
            for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }

        function __values(o) {
            var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
            if (m) return m.call(o);
            return {
                next: function () {
                    if (o && i >= o.length) o = void 0;
                    return {value: o && o[i++], done: !o};
                }
            };
        }

        function __read(o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o), r, ar = [], e;
            try {
                while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
            } catch (error) {
                e = {error: error};
            } finally {
                try {
                    if (r && !r.done && (m = i["return"])) m.call(i);
                } finally {
                    if (e) throw e.error;
                }
            }
            return ar;
        }

        function __spread() {
            for (var ar = [], i = 0; i < arguments.length; i++)
                ar = ar.concat(__read(arguments[i]));
            return ar;
        }

        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
                for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                    r[k] = a[j];
            return r;
        }

        function __await(v) {
            return this instanceof __await ? (this.v = v, this) : new __await(v);
        }

        function __asyncGenerator(thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var g = generator.apply(thisArg, _arguments || []), i, q = [];
            return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                return this;
            }, i;

            function verb(n) {
                if (g[n]) i[n] = function (v) {
                    return new Promise(function (a, b) {
                        q.push([n, v, a, b]) > 1 || resume(n, v);
                    });
                };
            }

            function resume(n, v) {
                try {
                    step(g[n](v));
                } catch (e) {
                    settle(q[0][3], e);
                }
            }

            function step(r) {
                r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
            }

            function fulfill(value) {
                resume("next", value);
            }

            function reject(value) {
                resume("throw", value);
            }

            function settle(f, v) {
                if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
            }
        }

        function __asyncDelegator(o) {
            var i, p;
            return i = {}, verb("next"), verb("throw", function (e) {
                throw e;
            }), verb("return"), i[Symbol.iterator] = function () {
                return this;
            }, i;

            function verb(n, f) {
                i[n] = o[n] ? function (v) {
                    return (p = !p) ? {value: __await(o[n](v)), done: n === "return"} : f ? f(v) : v;
                } : f;
            }
        }

        function __asyncValues(o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var m = o[Symbol.asyncIterator], i;
            return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                return this;
            }, i);

            function verb(n) {
                i[n] = o[n] && function (v) {
                    return new Promise(function (resolve, reject) {
                        v = o[n](v), settle(resolve, reject, v.done, v.value);
                    });
                };
            }

            function settle(resolve, reject, d, v) {
                Promise.resolve(v).then(function (v) {
                    resolve({value: v, done: d});
                }, reject);
            }
        }

        function __makeTemplateObject(cooked, raw) {
            if (Object.defineProperty) {
                Object.defineProperty(cooked, "raw", {value: raw});
            } else {
                cooked.raw = raw;
            }
            return cooked;
        }

        function __importStar(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            result.default = mod;
            return result;
        }

        function __importDefault(mod) {
            return (mod && mod.__esModule) ? mod : {default: mod};
        }


        /***/
    }),

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
    /*! exports provided: environment */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "environment", function () {
            return environment;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

        const environment = {
            production: false
        };
        /*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


        /***/
    }),

    /***/
    "./src/main.ts":
    /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
        /* harmony import */
        var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
        /* harmony import */
        var _modules_app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/app/app.module */ "./src/modules/app/app.module.ts");


        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
        }
        Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
            .bootstrapModule(_modules_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
            .catch(err = > console.error(err);
    )
        /***/
    }),

    /***/
    "./src/modules/api/services/api-category.service.ts":
    /*!**********************************************************!*\
  !*** ./src/modules/api/services/api-category.service.ts ***!
  \**********************************************************/
    /*! exports provided: ApiCategoryService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ApiCategoryService", function () {
            return ApiCategoryService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let ApiCategoryService = class ApiCategoryService {
            constructor(httpClient) {
                this.httpClient = httpClient;
                this.path = '/api/v1/category';
            }

            getHints() {
                return this.httpClient.get(this.path);
            }

            save(categoryParameters) {
                return this.httpClient.post(this.path, categoryParameters);
            }

            remove(id) {
                return this.httpClient.delete(`${this.path}/${id}`);
            }
        };
        ApiCategoryService.ctorParameters = () =;
    >
        [
            {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}
        ];
        ApiCategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root',
            })
        ], ApiCategoryService);


        /***/
    }),

    /***/
    "./src/modules/api/services/api-hint.service.ts":
    /*!******************************************************!*\
  !*** ./src/modules/api/services/api-hint.service.ts ***!
  \******************************************************/
    /*! exports provided: ApiHintService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ApiHintService", function () {
            return ApiHintService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let ApiHintService = class ApiHintService {
            constructor(httpClient) {
                this.httpClient = httpClient;
                this.path = '/api/v1/hint';
            }

            getHints() {
                return this.httpClient.get(this.path);
            }

            saveHint(hintParameters, imageUrl) {
                return this.httpClient.post(this.path, Object.assign({}, hintParameters, {imgUrl: imageUrl}));
            }

            remove(id) {
                return this.httpClient.delete(`${this.path}/${id}`);
            }
        };
        ApiHintService.ctorParameters = () =;
    >
        [
            {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}
        ];
        ApiHintService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root',
            })
        ], ApiHintService);


        /***/
    }),

    /***/
    "./src/modules/api/services/api-image.service.ts":
    /*!*******************************************************!*\
  !*** ./src/modules/api/services/api-image.service.ts ***!
  \*******************************************************/
    /*! exports provided: ApiImageService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ApiImageService", function () {
            return ApiImageService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let ApiImageService = class ApiImageService {
            constructor(httpClient) {
                this.httpClient = httpClient;
                this.path = '/api/v1/image';
            }

            uploadImage(file) {
                const uploadData = new FormData();
                uploadData.append('image', file[0]);
                return this.httpClient.post(this.path, uploadData, {
                    responseType: 'text',
                });
            }
        };
        ApiImageService.ctorParameters = () =;
    >
        [
            {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}
        ];
        ApiImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root',
            })
        ], ApiImageService);


        /***/
    }),

    /***/
    "./src/modules/api/services/api-point.service.ts":
    /*!*******************************************************!*\
  !*** ./src/modules/api/services/api-point.service.ts ***!
  \*******************************************************/
    /*! exports provided: ApiPointService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ApiPointService", function () {
            return ApiPointService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let ApiPointService = class ApiPointService {
            constructor(httpClient) {
                this.httpClient = httpClient;
                this.path = '/api/v1/point';
            }

            getPoints() {
                return this.httpClient.get(this.path);
            }

            save(pointParameters, imgUrl) {
                return this.httpClient.post(this.path, Object.assign({}, pointParameters, {imgUrlList: [imgUrl]}));
            }

            remove(id) {
                return this.httpClient.delete(`${this.path}/${id}`);
            }
        };
        ApiPointService.ctorParameters = () =;
    >
        [
            {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}
        ];
        ApiPointService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root',
            })
        ], ApiPointService);


        /***/
    }),

    /***/
    "./src/modules/api/services/api-travel.service.ts":
    /*!********************************************************!*\
  !*** ./src/modules/api/services/api-travel.service.ts ***!
  \********************************************************/
    /*! exports provided: ApiTravelService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ApiTravelService", function () {
            return ApiTravelService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let ApiTravelService = class ApiTravelService {
            constructor(httpClient) {
                this.httpClient = httpClient;
                this.path = '/api/v1/travel';
            }

            getTravels() {
                return this.httpClient.get(this.path);
            }

            save(travelParameters, imageUrl) {
                return this.httpClient.post(this.path, Object.assign({}, travelParameters, {imgUrl: imageUrl}));
            }

            remove(id) {
                return this.httpClient.delete(`${this.path}/${id}`);
            }
        };
        ApiTravelService.ctorParameters = () =;
    >
        [
            {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}
        ];
        ApiTravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root',
            })
        ], ApiTravelService);


        /***/
    }),

    /***/
    "./src/modules/app/app-routing.module.ts":
    /*!***********************************************!*\
  !*** ./src/modules/app/app-routing.module.ts ***!
  \***********************************************/
    /*! exports provided: AppRoutingModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
            return AppRoutingModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
        /* harmony import */
        var _authorization_containers_login_container_login_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authorization/containers/login-container/login-container.component */ "./src/modules/authorization/containers/login-container/login-container.component.ts");
        /* harmony import */
        var _authorization_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authorization/guard/auth.guard */ "./src/modules/authorization/guard/auth.guard.ts");
        /* harmony import */
        var _containers_admin_panel_layout_container_admin_panel_layout_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/admin-panel-layout-container/admin-panel-layout-container.component */ "./src/modules/app/containers/admin-panel-layout-container/admin-panel-layout-container.component.ts");


        const adminPanelRoutes = [
            {
                path: '**',
                component: _containers_admin_panel_layout_container_admin_panel_layout_container_component__WEBPACK_IMPORTED_MODULE_5__["AdminPanelLayoutContainerComponent"]
            },
        ];
        const routes = [
            {
                path: 'adminPanel',
                component: _containers_admin_panel_layout_container_admin_panel_layout_container_component__WEBPACK_IMPORTED_MODULE_5__["AdminPanelLayoutContainerComponent"],
                children: adminPanelRoutes,
                canActivate: [_authorization_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
            },
            {
                path: 'login',
                component: _authorization_containers_login_container_login_container_component__WEBPACK_IMPORTED_MODULE_3__["LoginContainerComponent"]
            },
            {
                path: '**',
                component: _authorization_containers_login_container_login_container_component__WEBPACK_IMPORTED_MODULE_3__["LoginContainerComponent"]
            },
        ];
        let AppRoutingModule = class AppRoutingModule {
        };
        AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            })
        ], AppRoutingModule);


        /***/
    }),

    /***/
    "./src/modules/app/app.module.ts":
    /*!***************************************!*\
  !*** ./src/modules/app/app.module.ts ***!
  \***************************************/
    /*! exports provided: AppModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
            return AppModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/modules/app/app-routing.module.ts");
        /* harmony import */
        var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/modules/ui-components/ui-components.module.ts");
        /* harmony import */
        var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/modules/app/components/layout/layout.component.ts");
        /* harmony import */
        var _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app/app.component */ "./src/modules/app/components/app/app.component.ts");
        /* harmony import */
        var _authorization_authorization_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../authorization/authorization.module */ "./src/modules/authorization/authorization.module.ts");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
        /* harmony import */
        var _reducers_globalReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers/globalReducer */ "./src/modules/app/reducers/globalReducer.ts");
        /* harmony import */
        var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
        /* harmony import */
        var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
        /* harmony import */
        var _travel_travel_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../travel/travel.module */ "./src/modules/travel/travel.module.ts");
        /* harmony import */
        var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../navigation/navigation.module */ "./src/modules/navigation/navigation.module.ts");
        /* harmony import */
        var _containers_admin_panel_layout_container_admin_panel_layout_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/admin-panel-layout-container/admin-panel-layout-container.component */ "./src/modules/app/containers/admin-panel-layout-container/admin-panel-layout-container.component.ts");
        /* harmony import */
        var _points_points_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../points/points.module */ "./src/modules/points/points.module.ts");
        /* harmony import */
        var _category_category_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../category/category.module */ "./src/modules/category/category.module.ts");
        /* harmony import */
        var _hints_hints_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../hints/hints.module */ "./src/modules/hints/hints.module.ts");
        /* harmony import */
        var _notification_notification_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../notification/notification.module */ "./src/modules/notification/notification.module.ts");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let AppModule = class AppModule {
        };
        AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducers_globalReducer__WEBPACK_IMPORTED_MODULE_10__["globalReducer"]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production,
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([]),
                    _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_4__["UiComponentsModule"],
                    _authorization_authorization_module__WEBPACK_IMPORTED_MODULE_7__["AuthorizationModule"],
                    _travel_travel_module__WEBPACK_IMPORTED_MODULE_13__["TravelModule"],
                    _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_14__["NavigationModule"],
                    _points_points_module__WEBPACK_IMPORTED_MODULE_16__["PointsModule"],
                    _category_category_module__WEBPACK_IMPORTED_MODULE_17__["CategoryModule"],
                    _hints_hints_module__WEBPACK_IMPORTED_MODULE_18__["HintsModule"],
                    _notification_notification_module__WEBPACK_IMPORTED_MODULE_19__["NotificationModule"],
                ],
                declarations: [
                    _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                    _containers_admin_panel_layout_container_admin_panel_layout_container_component__WEBPACK_IMPORTED_MODULE_15__["AdminPanelLayoutContainerComponent"],
                ],
                providers: [],
                bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            })
        ], AppModule);


        /***/
    }),

    /***/
    "./src/modules/app/common/initialState.ts":
    /*!************************************************!*\
  !*** ./src/modules/app/common/initialState.ts ***!
  \************************************************/
    /*! exports provided: initialState */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "initialState", function () {
            return initialState;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _navigation_enums_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navigation/enums/Tab */ "./src/modules/navigation/enums/Tab.ts");
        /* harmony import */
        var _hints_enums_HintAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hints/enums/HintAction */ "./src/modules/hints/enums/HintAction.ts");


        function generateMockTravelList(numberOfItems) {
            return Array.from(Array(numberOfItems), (value, index) = > ({
                id: index,
                name: `Travel ${index + 1}`,
                adminId: 1,
                imgUrl: '',
                description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis, consequatur dignissimos dolor dolorum eligendi eos et excepturi facilis iste maiores necessitatibus nihil, obcaecati porro provident quae repudiandae, similique unde!`,
                categoryName: `category ${index + 1}`,
                createdDate: new Date(),
                updatedDate: new Date(),
            });
        )
        }

        function generateMockPointList(numberOfItems) {
            return Array.from(Array(numberOfItems), (value, index) = > ({
                adminId: 1,
                createdDate: Date.now(),
                description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis, consequatur dignissimos dolor dolorum eligendi eos et excepturi facilis iste maiores necessitatibus nihil, obcaecati porro provident quae repudiandae, similique unde!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur cumque dolorem dolores dolorum ducimus eveniet excepturi facere fugit id itaque mollitia nesciunt placeat quas quidem quos temporibus, vel voluptas?`,
                id: index,
                imgUrlList: [],
                latitude: 0,
                longitude: 0,
                name: `Point ${index + 1}`,
                shortDescription: 'string',
                orderNum: 0,
                travelId: 0,
                updatedDate: Date.now(),
            });
        )
        }

        function generateMockHintList(numberOfItems) {
            return Array.from(Array(numberOfItems), (value, index) = > ({
                id: index,
                name: `Hint ${index + 1}`,
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis, consequatur dignissimos dolor dolorum eligendi',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis, consequatur dignissimos dolor dolorum eligendi eos et excepturi facilis iste maiores necessitatibus nihil, obcaecati porro provident quae repudiandae, similique unde!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur cumque dolorem dolores dolorum ducimus eveniet excepturi facere fugit id itaque mollitia nesciunt placeat quas quidem quos temporibus, vel voluptas?',
                hintAction: _hints_enums_HintAction__WEBPACK_IMPORTED_MODULE_2__["HintAction"].COMPASS,
                imgUrl: '',
            });
        )
        }

        const initialState = {
            activeTab: _navigation_enums_Tab__WEBPACK_IMPORTED_MODULE_1__["Tab"].TRAVEL,
            travels: generateMockTravelList(10),
            points: generateMockPointList(10),
            hints: generateMockHintList(10),
            categories: [
                {
                    id: 1,
                    name: 'Architecture',
                    adminId: 1,
                    createdDate: '2019-10-12T19:08:55.449Z',
                    imgUrl: 'string',
                    updatedDate: '2019-10-12T19:08:55.449Z',
                },
                {
                    id: 2,
                    name: 'Eat',
                    adminId: 1,
                    createdDate: '2019-10-12T19:08:55.449Z',
                    imgUrl: 'string',
                    updatedDate: '2019-10-12T19:08:55.449Z',
                },
            ],
            user: null,
        };


        /***/
    }),

    /***/
    "./src/modules/app/components/app/app.component.ts":
    /*!*********************************************************!*\
  !*** ./src/modules/app/components/app/app.component.ts ***!
  \*********************************************************/
    /*! exports provided: AppComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
            return AppComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let AppComponent = class AppComponent {
        };
        AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-root',
                template: `
        <skr-color-scheme [theme]="'blue'">
            <skr-notification-container>
                <skr-layout></skr-layout>
            </skr-notification-container>
        </skr-color-scheme>
    `,
                styles: [""]
            })
        ], AppComponent);


        /***/
    }),

    /***/
    "./src/modules/app/components/layout/layout.component.ts":
    /*!***************************************************************!*\
  !*** ./src/modules/app/components/layout/layout.component.ts ***!
  \***************************************************************/
    /*! exports provided: LayoutComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
            return LayoutComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let LayoutComponent = class LayoutComponent {
        };
        LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-layout',
                template: `
        <div class="layout">
            <router-outlet></router-outlet>
        </div>
    `,
                styles: ["\n            .layout {\n                display: grid;\n                grid-template-rows: auto 1fr;\n                background-color: var(--color-background);\n                height: 100%;\n            }\n        "]
            })
        ], LayoutComponent);


        /***/
    }),

    /***/
    "./src/modules/app/containers/admin-panel-layout-container/admin-panel-layout-container.component.ts":
    /*!***********************************************************************************************************!*\
  !*** ./src/modules/app/containers/admin-panel-layout-container/admin-panel-layout-container.component.ts ***!
  \***********************************************************************************************************/
    /*! exports provided: AdminPanelLayoutContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AdminPanelLayoutContainerComponent", function () {
            return AdminPanelLayoutContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _navigation_enums_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../navigation/enums/Tab */ "./src/modules/navigation/enums/Tab.ts");
        /* harmony import */
        var _navigation_selectors_getActiveTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../navigation/selectors/getActiveTab */ "./src/modules/navigation/selectors/getActiveTab.ts");


        let AdminPanelLayoutContainerComponent = class AdminPanelLayoutContainerComponent {
            constructor(store) {
                this.store = store;
                this.tab = _navigation_enums_Tab__WEBPACK_IMPORTED_MODULE_3__["Tab"];
                this.activeTab$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_navigation_selectors_getActiveTab__WEBPACK_IMPORTED_MODULE_4__["getActiveTab"]));
            }
        };
        AdminPanelLayoutContainerComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]}
        ];
        AdminPanelLayoutContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-admin-panel-layout-container',
                template: `
        <skr-block class="content">
            <div [ngSwitch]="activeTab$ | async">
                <skr-navigation-container></skr-navigation-container>
                <div *ngSwitchCase="tab.TRAVEL">
                    <skr-add-travel-container></skr-add-travel-container>
                    <skr-travel-list-containers></skr-travel-list-containers>
                </div>
                <div *ngSwitchCase="tab.POINTS">
                    <skr-add-point-container></skr-add-point-container>
                    <skr-point-list-container></skr-point-list-container>
                </div>
                <div *ngSwitchCase="tab.HINTS">
                    <skr-add-hint-parameters-container></skr-add-hint-parameters-container>
                    <skr-hint-list-container></skr-hint-list-container>
                </div>
                <div *ngSwitchCase="tab.CATEGORIES">
                    <skr-add-category-container></skr-add-category-container>
                    <skr-category-list-container></skr-category-list-container>
                </div>
            </div>
        </skr-block>
    `,
                styles: ["\n            .content {\n                height: 100%;\n                width: 100%;\n            }\n        "]
            })
        ], AdminPanelLayoutContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/app/reducers/globalReducer.ts":
    /*!***************************************************!*\
  !*** ./src/modules/app/reducers/globalReducer.ts ***!
  \***************************************************/
    /*! exports provided: globalReducer */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "globalReducer", function () {
            return globalReducer;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var reduce_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reduce-reducers */ "./node_modules/reduce-reducers/es/index.js");
        /* harmony import */
        var _authorization_reducers_authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authorization/reducers/authReducer */ "./src/modules/authorization/reducers/authReducer.ts");
        /* harmony import */
        var _travel_reducers_traverlReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../travel/reducers/traverlReducer */ "./src/modules/travel/reducers/traverlReducer.ts");
        /* harmony import */
        var _navigation_reducers_navigationReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navigation/reducers/navigationReducer */ "./src/modules/navigation/reducers/navigationReducer.ts");
        /* harmony import */
        var _points_reducers_pointReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../points/reducers/pointReducer */ "./src/modules/points/reducers/pointReducer.ts");
        /* harmony import */
        var _category_reducers_categoryReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../category/reducers/categoryReducer */ "./src/modules/category/reducers/categoryReducer.ts");
        /* harmony import */
        var _hints_reducers_hintReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hints/reducers/hintReducer */ "./src/modules/hints/reducers/hintReducer.ts");


        const reducers = [
            _authorization_reducers_authReducer__WEBPACK_IMPORTED_MODULE_2__["authReducer"],
            _travel_reducers_traverlReducer__WEBPACK_IMPORTED_MODULE_3__["travelReducer"],
            _navigation_reducers_navigationReducer__WEBPACK_IMPORTED_MODULE_4__["navigationReducer"],
            _points_reducers_pointReducer__WEBPACK_IMPORTED_MODULE_5__["pointReducer"],
            _category_reducers_categoryReducer__WEBPACK_IMPORTED_MODULE_6__["categoryReducer"],
            _hints_reducers_hintReducer__WEBPACK_IMPORTED_MODULE_7__["hintReducer"],
        ];
        const globalReducer = {
            app: Object(reduce_reducers__WEBPACK_IMPORTED_MODULE_1__["default"])(...reducers;
    ),
    }
        /***/
    }),

    /***/
    "./src/modules/app/selectors/getAppState.ts":
    /*!**************************************************!*\
  !*** ./src/modules/app/selectors/getAppState.ts ***!
  \**************************************************/
    /*! exports provided: getAppState */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getAppState", function () {
            return getAppState;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        const getAppState = (state) =;
    >
        state.app;


        /***/
    }),

    /***/
    "./src/modules/authorization/actions/ResetUserAction.ts":
    /*!**************************************************************!*\
  !*** ./src/modules/authorization/actions/ResetUserAction.ts ***!
  \**************************************************************/
    /*! exports provided: ResetUserAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ResetUserAction", function () {
            return ResetUserAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class ResetUserAction {
            constructor() {
                this.type = ResetUserAction.type;
            }
        }

        ResetUserAction.type = '[Authorization] Reset user';


        /***/
    }),

    /***/
    "./src/modules/authorization/actions/SetUserAction.ts":
    /*!************************************************************!*\
  !*** ./src/modules/authorization/actions/SetUserAction.ts ***!
  \************************************************************/
    /*! exports provided: SetUserAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SetUserAction", function () {
            return SetUserAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SetUserAction {
            constructor(user) {
                this.user = user;
                this.type = SetUserAction.type;
            }
        }

        SetUserAction.type = '[Authorization] Set user';


        /***/
    }),

    /***/
    "./src/modules/authorization/authorization.module.ts":
    /*!***********************************************************!*\
  !*** ./src/modules/authorization/authorization.module.ts ***!
  \***********************************************************/
    /*! exports provided: AuthorizationModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AuthorizationModule", function () {
            return AuthorizationModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
        /* harmony import */
        var _containers_login_container_login_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/login-container/login-container.component */ "./src/modules/authorization/containers/login-container/login-container.component.ts");
        /* harmony import */
        var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/modules/authorization/components/login/login.component.ts");
        /* harmony import */
        var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/modules/ui-components/ui-components.module.ts");


        let AuthorizationModule = class AuthorizationModule {
        };
        AuthorizationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_5__["UiComponentsModule"]],
                declarations: [_containers_login_container_login_container_component__WEBPACK_IMPORTED_MODULE_3__["LoginContainerComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
                exports: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _containers_login_container_login_container_component__WEBPACK_IMPORTED_MODULE_3__["LoginContainerComponent"]],
            })
        ], AuthorizationModule);


        /***/
    }),

    /***/
    "./src/modules/authorization/components/login/login.component.ts":
    /*!***********************************************************************!*\
  !*** ./src/modules/authorization/components/login/login.component.ts ***!
  \***********************************************************************/
    /*! exports provided: LoginComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
            return LoginComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let LoginComponent = class LoginComponent {
            constructor() {
                this.changeLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.changePassword = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleChangeLogin(value) {
                this.changeLogin.emit(value);
            }

            handleChangePassword(value) {
                this.changePassword.emit(value);
            }

            handleLogin() {
                this.login.emit();
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], LoginComponent.prototype, "loginParameters", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], LoginComponent.prototype, "changeLogin", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], LoginComponent.prototype, "changePassword", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], LoginComponent.prototype, "login", void 0);
        LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-login',
                template: `
        <div class="page">
            <skr-block class="block">
                <div class="grid">
                    <div class="title">SpbSeeker Admin Panel</div>
                    <skr-input
                        [label]="'Login:'"
                        [value]="loginParameters.login"
                        (onchange)="handleChangeLogin($event)"
                    ></skr-input>
                    <skr-input
                        [label]="'Password:'"
                        [value]="loginParameters.password"
                        (onchange)="handleChangePassword($event)"
                    ></skr-input>
                    <skr-button
                        type="accent"
                        class="login-button"
                        (click)="handleLogin()"
                    >
                        Login
                    </skr-button>
                </div>
            </skr-block>
        </div>
    `,
                styles: ["\n            .page {\n                display: grid;\n                align-items: center;\n                justify-items: center;\n                height: 100%;\n            }\n\n            .block {\n                width: 40rem;\n            }\n\n            .grid {\n                display: grid;\n                grid-gap: 1rem;\n                padding: 1.5rem;\n            }\n\n            .title {\n                text-align: center;\n            }\n\n            .login-button {\n                width: 100%;\n                height: 3.2rem;\n            }\n        "]
            })
        ], LoginComponent);


        /***/
    }),

    /***/
    "./src/modules/authorization/containers/login-container/login-container.component.ts":
    /*!*******************************************************************************************!*\
  !*** ./src/modules/authorization/containers/login-container/login-container.component.ts ***!
  \*******************************************************************************************/
    /*! exports provided: LoginContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LoginContainerComponent", function () {
            return LoginContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _actions_SetUserAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/SetUserAction */ "./src/modules/authorization/actions/SetUserAction.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


        let LoginContainerComponent = class LoginContainerComponent {
            constructor(store, router) {
                this.store = store;
                this.router = router;
                this.loginParameters = {
                    login: '',
                    password: '',
                };
            }

            handleChangeLogin(value) {
                this.loginParameters = Object.assign({}, this.loginParameters, {login: value});
            }

            handleChangePassword(value) {
                this.loginParameters = Object.assign({}, this.loginParameters, {password: value});
            }

            login() {
                if (this.loginParameters.login.trim().length === 0 ||
                    this.loginParameters.password.trim().length === 0) {
                    console.log('Invalid login or password');
                }
                this.store.dispatch(new _actions_SetUserAction__WEBPACK_IMPORTED_MODULE_3__["SetUserAction"](this.loginParameters));
                this.router.navigate(['/adminPanel']);
            }
        };
        LoginContainerComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]},
            {type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]}
        ];
        LoginContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-login-container',
                template: `
        <skr-login
            [loginParameters]="loginParameters"
            (changeLogin)="handleChangeLogin($event)"
            (changePassword)="handleChangePassword($event)"
            (login)="login()"
        ></skr-login>
    `,
            })
        ], LoginContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/authorization/guard/auth.guard.ts":
    /*!*******************************************************!*\
  !*** ./src/modules/authorization/guard/auth.guard.ts ***!
  \*******************************************************/
    /*! exports provided: AuthGuard */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
            return AuthGuard;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _selectors_getLoginUserStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectors/getLoginUserStatus */ "./src/modules/authorization/selectors/getLoginUserStatus.ts");


        let AuthGuard = class AuthGuard {
            constructor(store) {
                this.store = store;
                this.isUserExist$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_getLoginUserStatus__WEBPACK_IMPORTED_MODULE_3__["getLoginUserState"]));
            }

            canActivate(next, state) {
                return this.isUserExist$;
            }
        };
        AuthGuard.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]}
        ];
        AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root',
            })
        ], AuthGuard);


        /***/
    }),

    /***/
    "./src/modules/authorization/reducers/authReducer.ts":
    /*!***********************************************************!*\
  !*** ./src/modules/authorization/reducers/authReducer.ts ***!
  \***********************************************************/
    /*! exports provided: authReducer */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "authReducer", function () {
            return authReducer;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _app_common_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/common/initialState */ "./src/modules/app/common/initialState.ts");
        /* harmony import */
        var _actions_SetUserAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/SetUserAction */ "./src/modules/authorization/actions/SetUserAction.ts");
        /* harmony import */
        var _actions_ResetUserAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/ResetUserAction */ "./src/modules/authorization/actions/ResetUserAction.ts");


        function authReducer(state = _app_common_initialState__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
            switch (action.type) {
                case _actions_SetUserAction__WEBPACK_IMPORTED_MODULE_2__["SetUserAction"].type: {
                    return Object.assign({}, state, {user: action.user});
                }
                case _actions_ResetUserAction__WEBPACK_IMPORTED_MODULE_3__["ResetUserAction"].type: {
                    return Object.assign({}, state, {user: null});
                }
                default:
                    return state;
            }
        }


        /***/
    }),

    /***/
    "./src/modules/authorization/selectors/getLoginUserStatus.ts":
    /*!*******************************************************************!*\
  !*** ./src/modules/authorization/selectors/getLoginUserStatus.ts ***!
  \*******************************************************************/
    /*! exports provided: getLoginUserState */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getLoginUserState", function () {
            return getLoginUserState;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _getUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getUser */ "./src/modules/authorization/selectors/getUser.ts");


        const getLoginUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_getUser__WEBPACK_IMPORTED_MODULE_2__["getUser"], user = > Boolean(user);
    )
        /***/
    }),

    /***/
    "./src/modules/authorization/selectors/getUser.ts":
    /*!********************************************************!*\
  !*** ./src/modules/authorization/selectors/getUser.ts ***!
  \********************************************************/
    /*! exports provided: getUser */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getUser", function () {
            return getUser;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/selectors/getAppState */ "./src/modules/app/selectors/getAppState.ts");


        const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__["getAppState"], state = > state.user;
    )
        /***/
    }),

    /***/
    "./src/modules/category/actions/AddCategoryAction.ts":
    /*!***********************************************************!*\
  !*** ./src/modules/category/actions/AddCategoryAction.ts ***!
  \***********************************************************/
    /*! exports provided: AddCategoryAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddCategoryAction", function () {
            return AddCategoryAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class AddCategoryAction {
            constructor(category) {
                this.category = category;
                this.type = AddCategoryAction.type;
            }
        }

        AddCategoryAction.type = '[Category] Add category';


        /***/
    }),

    /***/
    "./src/modules/category/actions/LoadCategoriesAction.ts":
    /*!**************************************************************!*\
  !*** ./src/modules/category/actions/LoadCategoriesAction.ts ***!
  \**************************************************************/
    /*! exports provided: LoadCategoriesAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LoadCategoriesAction", function () {
            return LoadCategoriesAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class LoadCategoriesAction {
            constructor() {
                this.type = LoadCategoriesAction.type;
            }
        }

        LoadCategoriesAction.type = '[Category] Load categories';


        /***/
    }),

    /***/
    "./src/modules/category/actions/RejectLoadCategoriesAction.ts":
    /*!********************************************************************!*\
  !*** ./src/modules/category/actions/RejectLoadCategoriesAction.ts ***!
  \********************************************************************/
    /*! exports provided: RejectLoadCategoriesAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectLoadCategoriesAction", function () {
            return RejectLoadCategoriesAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectLoadCategoriesAction {
            constructor() {
                this.type = RejectLoadCategoriesAction.type;
            }
        }

        RejectLoadCategoriesAction.type = '[Category] Load category rejected';


        /***/
    }),

    /***/
    "./src/modules/category/actions/RejectRemoveCategoryAction.ts":
    /*!********************************************************************!*\
  !*** ./src/modules/category/actions/RejectRemoveCategoryAction.ts ***!
  \********************************************************************/
    /*! exports provided: RejectRemoveCategoryAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectRemoveCategoryAction", function () {
            return RejectRemoveCategoryAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectRemoveCategoryAction {
            constructor() {
                this.type = RejectRemoveCategoryAction.type;
            }
        }

        RejectRemoveCategoryAction.type = '[Category] Remove category rejected';


        /***/
    }),

    /***/
    "./src/modules/category/actions/RejectSaveCategoryAction.ts":
    /*!******************************************************************!*\
  !*** ./src/modules/category/actions/RejectSaveCategoryAction.ts ***!
  \******************************************************************/
    /*! exports provided: RejectSaveCategoryAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectSaveCategoryAction", function () {
            return RejectSaveCategoryAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectSaveCategoryAction {
            constructor() {
                this.type = RejectSaveCategoryAction.type;
            }
        }

        RejectSaveCategoryAction.type = '[Category] Save category rejected';


        /***/
    }),

    /***/
    "./src/modules/category/actions/RemoveCategoryAction.ts":
    /*!**************************************************************!*\
  !*** ./src/modules/category/actions/RemoveCategoryAction.ts ***!
  \**************************************************************/
    /*! exports provided: RemoveCategoryAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RemoveCategoryAction", function () {
            return RemoveCategoryAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RemoveCategoryAction {
            constructor(id) {
                this.id = id;
                this.type = RemoveCategoryAction.type;
            }
        }

        RemoveCategoryAction.type = '[Category] Remove';


        /***/
    }),

    /***/
    "./src/modules/category/actions/SaveCategoryAction.ts":
    /*!************************************************************!*\
  !*** ./src/modules/category/actions/SaveCategoryAction.ts ***!
  \************************************************************/
    /*! exports provided: SaveCategoryAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SaveCategoryAction", function () {
            return SaveCategoryAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SaveCategoryAction {
            constructor(parameters) {
                this.parameters = parameters;
                this.type = SaveCategoryAction.type;
            }
        }

        SaveCategoryAction.type = '[Category] Save category';


        /***/
    }),

    /***/
    "./src/modules/category/actions/SetCategoriesAction.ts":
    /*!*************************************************************!*\
  !*** ./src/modules/category/actions/SetCategoriesAction.ts ***!
  \*************************************************************/
    /*! exports provided: SetCategoriesAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SetCategoriesAction", function () {
            return SetCategoriesAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SetCategoriesAction {
            constructor(categories) {
                this.categories = categories;
                this.type = SetCategoriesAction.type;
            }
        }

        SetCategoriesAction.type = '[Category] Set categories';


        /***/
    }),

    /***/
    "./src/modules/category/actions/TryToRemoveCategoryAction.ts":
    /*!*******************************************************************!*\
  !*** ./src/modules/category/actions/TryToRemoveCategoryAction.ts ***!
  \*******************************************************************/
    /*! exports provided: TryToRemoveCategoryAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TryToRemoveCategoryAction", function () {
            return TryToRemoveCategoryAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class TryToRemoveCategoryAction {
            constructor(id) {
                this.id = id;
                this.type = TryToRemoveCategoryAction.type;
            }
        }

        TryToRemoveCategoryAction.type = '[Category] Try to remove';


        /***/
    }),

    /***/
    "./src/modules/category/category.module.ts":
    /*!*************************************************!*\
  !*** ./src/modules/category/category.module.ts ***!
  \*************************************************/
    /*! exports provided: CategoryModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CategoryModule", function () {
            return CategoryModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
        /* harmony import */
        var _containers_category_list_container_category_list_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/category-list-container/category-list-container.component */ "./src/modules/category/containers/category-list-container/category-list-container.component.ts");
        /* harmony import */
        var _components_category_list_item_category_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/category-list-item/category-list-item.component */ "./src/modules/category/components/category-list-item/category-list-item.component.ts");
        /* harmony import */
        var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/modules/ui-components/ui-components.module.ts");
        /* harmony import */
        var _containers_add_category_container_add_category_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/add-category-container/add-category-container.component */ "./src/modules/category/containers/add-category-container/add-category-container.component.ts");
        /* harmony import */
        var _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-category/add-category.component */ "./src/modules/category/components/add-category/add-category.component.ts");
        /* harmony import */
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
        /* harmony import */
        var _effects_category_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/category.effects */ "./src/modules/category/effects/category.effects.ts");


        let CategoryModule = class CategoryModule {
        };
        CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_5__["UiComponentsModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_effects_category_effects__WEBPACK_IMPORTED_MODULE_9__["CategoryEffects"]]),
                ],
                declarations: [
                    _containers_category_list_container_category_list_container_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListContainerComponent"],
                    _components_category_list_item_category_list_item_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListItemComponent"],
                    _containers_add_category_container_add_category_container_component__WEBPACK_IMPORTED_MODULE_6__["AddCategoryContainerComponent"],
                    _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"],
                ],
                exports: [_containers_category_list_container_category_list_container_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListContainerComponent"], _containers_add_category_container_add_category_container_component__WEBPACK_IMPORTED_MODULE_6__["AddCategoryContainerComponent"]],
            })
        ], CategoryModule);


        /***/
    }),

    /***/
    "./src/modules/category/components/add-category/add-category.component.ts":
    /*!********************************************************************************!*\
  !*** ./src/modules/category/components/add-category/add-category.component.ts ***!
  \********************************************************************************/
    /*! exports provided: AddCategoryComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function () {
            return AddCategoryComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let AddCategoryComponent = class AddCategoryComponent {
            constructor() {
                this.changePointParameters = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleChangeName(value) {
                this.changePointParameters.emit(Object.assign({}, this.addCategoryParameters, {name: value}));
            }

            handleChangeFile(file) {
                this.changePointParameters.emit(Object.assign({}, this.addCategoryParameters, {imgUrl: file.name}));
            }

            handleCreate() {
                this.create.emit();
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], AddCategoryComponent.prototype, "addCategoryParameters", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], AddCategoryComponent.prototype, "changePointParameters", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], AddCategoryComponent.prototype, "create", void 0);
        AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-add-category',
                template: `
        <div class="grid">
            <div class="title">Create category</div>
            <skr-input
                class="name"
                [label]="'Name'"
                [value]="addCategoryParameters.name"
                (onchange)="handleChangeName($event)"
            ></skr-input>
            <skr-file-upload
                class="uploader"
                (changeFile)="handleChangeFile($event)"
            ></skr-file-upload>
            <div class="actions">
                <skr-button type="accent" (onclick)="handleCreate()">
                    Create
                </skr-button>
            </div>
        </div>
    `,
                styles: ["\n            .grid {\n                display: grid;\n                grid-gap: 1rem;\n                grid-template-columns: 2fr 1fr;\n                grid-template-areas:\n                    'title .'\n                    'name uploader'\n                    'actions uploader';\n                height: 20rem;\n                padding: 2rem;\n                border-bottom: 0.1rem solid var(--color-border);\n            }\n\n            .title {\n                grid-area: title;\n                font-weight: bold;\n            }\n\n            .name {\n                grid-area: name;\n            }\n\n            .description {\n                grid-area: description;\n            }\n\n            .category {\n                grid-area: category;\n            }\n\n            .uploader {\n                grid-area: uploader;\n            }\n\n            .actions {\n                grid-area: actions;\n            }\n        "]
            })
        ], AddCategoryComponent);


        /***/
    }),

    /***/
    "./src/modules/category/components/category-list-item/category-list-item.component.ts":
    /*!********************************************************************************************!*\
  !*** ./src/modules/category/components/category-list-item/category-list-item.component.ts ***!
  \********************************************************************************************/
    /*! exports provided: CategoryListItemComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CategoryListItemComponent", function () {
            return CategoryListItemComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let CategoryListItemComponent = class CategoryListItemComponent {
            constructor() {
                this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleRemove() {
                this.remove.emit();
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], CategoryListItemComponent.prototype, "category", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], CategoryListItemComponent.prototype, "remove", void 0);
        CategoryListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-category-list-item',
                template: `
        <div class="item">
            <div class="image-wrapper">
                <img class="image" [src]="category.imgUrl" />
            </div>
            <div class="content">
                <div class="title">{{ category.name }}</div>
            </div>
            <div class="actions">
                <skr-button type="accent" (onclick)="handleRemove()">
                    Remove
                </skr-button>
            </div>
        </div>
    `,
                styles: ["\n            .item {\n                display: grid;\n                grid-template-columns: auto 1fr auto;\n                grid-gap: 2rem;\n                padding: 2rem;\n                border-bottom: 1px solid var(--color-border);\n            }\n\n            .image {\n                height: 5rem;\n                width: 5rem;\n                background-color: var(--color-on-surface-secondary);\n            }\n\n            .content {\n                display: grid;\n                grid-gap: 1rem;\n                align-items: center;\n            }\n\n            .title {\n                font-weight: bold;\n            }\n\n            .actions {\n                display: grid;\n                align-items: end;\n                align-content: center;\n            }\n        "]
            })
        ], CategoryListItemComponent);


        /***/
    }),

    /***/
    "./src/modules/category/containers/add-category-container/add-category-container.component.ts":
    /*!****************************************************************************************************!*\
  !*** ./src/modules/category/containers/add-category-container/add-category-container.component.ts ***!
  \****************************************************************************************************/
    /*! exports provided: AddCategoryContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddCategoryContainerComponent", function () {
            return AddCategoryContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _actions_SaveCategoryAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/SaveCategoryAction */ "./src/modules/category/actions/SaveCategoryAction.ts");


        let AddCategoryContainerComponent = class AddCategoryContainerComponent {
            constructor(store) {
                this.store = store;
                this.addCategoryParameters = {
                    adminId: 1,
                    name: '',
                    imgUrl: '',
                };
            }

            handleChangeCategoryParameters(value) {
                this.addCategoryParameters = value;
            }

            handleCreate() {
                this.store.dispatch(new _actions_SaveCategoryAction__WEBPACK_IMPORTED_MODULE_3__["SaveCategoryAction"](this.addCategoryParameters));
            }
        };
        AddCategoryContainerComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]}
        ];
        AddCategoryContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-add-category-container',
                template: `
        <skr-add-category
            [addCategoryParameters]="addCategoryParameters"
            (changePointParameters)="handleChangeCategoryParameters($event)"
            (create)="handleCreate()"
        ></skr-add-category>
    `,
            })
        ], AddCategoryContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/category/containers/category-list-container/category-list-container.component.ts":
    /*!******************************************************************************************************!*\
  !*** ./src/modules/category/containers/category-list-container/category-list-container.component.ts ***!
  \******************************************************************************************************/
    /*! exports provided: CategoryListContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CategoryListContainerComponent", function () {
            return CategoryListContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _selectors_getCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/getCategories */ "./src/modules/category/selectors/getCategories.ts");
        /* harmony import */
        var _actions_LoadCategoriesAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/LoadCategoriesAction */ "./src/modules/category/actions/LoadCategoriesAction.ts");
        /* harmony import */
        var _actions_TryToRemoveCategoryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/TryToRemoveCategoryAction */ "./src/modules/category/actions/TryToRemoveCategoryAction.ts");


        let CategoryListContainerComponent = class CategoryListContainerComponent {
            constructor(store) {
                this.store = store;
                this.categories$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_getCategories__WEBPACK_IMPORTED_MODULE_3__["getCategories"]));
                this.store.dispatch(new _actions_LoadCategoriesAction__WEBPACK_IMPORTED_MODULE_4__["LoadCategoriesAction"]());
            }

            handleRemove(id) {
                this.store.dispatch(new _actions_TryToRemoveCategoryAction__WEBPACK_IMPORTED_MODULE_5__["TryToRemoveCategoryAction"](id));
            }
        };
        CategoryListContainerComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]}
        ];
        CategoryListContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-category-list-container',
                template: `
        <skr-category-list-item
            *ngFor="let category of categories$ | async"
            [category]="category"
            (remove)="handleRemove(category.id)"
        ></skr-category-list-item>
    `,
            })
        ], CategoryListContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/category/effects/category.effects.ts":
    /*!**********************************************************!*\
  !*** ./src/modules/category/effects/category.effects.ts ***!
  \**********************************************************/
    /*! exports provided: CategoryEffects */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CategoryEffects", function () {
            return CategoryEffects;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
        /* harmony import */
        var _api_services_api_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/services/api-category.service */ "./src/modules/api/services/api-category.service.ts");
        /* harmony import */
        var _notification_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notification/services/notification.service */ "./src/modules/notification/services/notification.service.ts");
        /* harmony import */
        var _actions_LoadCategoriesAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/LoadCategoriesAction */ "./src/modules/category/actions/LoadCategoriesAction.ts");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
        /* harmony import */
        var _actions_SetCategoriesAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/SetCategoriesAction */ "./src/modules/category/actions/SetCategoriesAction.ts");
        /* harmony import */
        var _actions_RejectLoadCategoriesAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/RejectLoadCategoriesAction */ "./src/modules/category/actions/RejectLoadCategoriesAction.ts");
        /* harmony import */
        var _actions_TryToRemoveCategoryAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/TryToRemoveCategoryAction */ "./src/modules/category/actions/TryToRemoveCategoryAction.ts");
        /* harmony import */
        var _actions_RemoveCategoryAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/RemoveCategoryAction */ "./src/modules/category/actions/RemoveCategoryAction.ts");
        /* harmony import */
        var _actions_RejectRemoveCategoryAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/RejectRemoveCategoryAction */ "./src/modules/category/actions/RejectRemoveCategoryAction.ts");
        /* harmony import */
        var _actions_SaveCategoryAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/SaveCategoryAction */ "./src/modules/category/actions/SaveCategoryAction.ts");
        /* harmony import */
        var _actions_AddCategoryAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions/AddCategoryAction */ "./src/modules/category/actions/AddCategoryAction.ts");
        /* harmony import */
        var _actions_RejectSaveCategoryAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/RejectSaveCategoryAction */ "./src/modules/category/actions/RejectSaveCategoryAction.ts");


        let CategoryEffects = class CategoryEffects {
            constructor(actions$, apiEndpointCategoryService, notificationService) {
                this.actions$ = actions$;
                this.apiEndpointCategoryService = apiEndpointCategoryService;
                this.notificationService = notificationService;
                this.loadCategories$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_LoadCategoriesAction__WEBPACK_IMPORTED_MODULE_5__["LoadCategoriesAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() = > this.apiEndpointCategoryService.getHints().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(categories = > new _actions_SetCategoriesAction__WEBPACK_IMPORTED_MODULE_8__["SetCategoriesAction"](categories)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(() = > {
                    this.notificationService.error('Failed to load categories');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_RejectLoadCategoriesAction__WEBPACK_IMPORTED_MODULE_9__["RejectLoadCategoriesAction"]());
            })))))
                this.saveCategory$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_SaveCategoryAction__WEBPACK_IMPORTED_MODULE_13__["SaveCategoryAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(action = > this.apiEndpointCategoryService.save(action.parameters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(category = > {
                    this.notificationService.success('Category successfully added');
                return new _actions_AddCategoryAction__WEBPACK_IMPORTED_MODULE_14__["AddCategoryAction"](category);
            }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(() = > {
                    this.notificationService.error('Failed to save category');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_RejectSaveCategoryAction__WEBPACK_IMPORTED_MODULE_15__["RejectSaveCategoryAction"]());
            })))))
                this.removeCategories$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_TryToRemoveCategoryAction__WEBPACK_IMPORTED_MODULE_10__["TryToRemoveCategoryAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(action = > this.apiEndpointCategoryService.remove(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() = > new _actions_RemoveCategoryAction__WEBPACK_IMPORTED_MODULE_11__["RemoveCategoryAction"](action.id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(() = > {
                    this.notificationService.error('Failed to remove category');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_RejectRemoveCategoryAction__WEBPACK_IMPORTED_MODULE_12__["RejectRemoveCategoryAction"]());
            })))))
            }
        };
        CategoryEffects.ctorParameters = () =;
    >
        [
            {type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]},
            {type: _api_services_api_category_service__WEBPACK_IMPORTED_MODULE_3__["ApiCategoryService"]},
            {type: _notification_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]}
        ];
        CategoryEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        ], CategoryEffects);


        /***/
    }),

    /***/
    "./src/modules/category/reducers/categoryReducer.ts":
    /*!**********************************************************!*\
  !*** ./src/modules/category/reducers/categoryReducer.ts ***!
  \**********************************************************/
    /*! exports provided: categoryReducer */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "categoryReducer", function () {
            return categoryReducer;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _app_common_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/common/initialState */ "./src/modules/app/common/initialState.ts");
        /* harmony import */
        var _actions_SetCategoriesAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/SetCategoriesAction */ "./src/modules/category/actions/SetCategoriesAction.ts");
        /* harmony import */
        var _actions_RemoveCategoryAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/RemoveCategoryAction */ "./src/modules/category/actions/RemoveCategoryAction.ts");
        /* harmony import */
        var _actions_AddCategoryAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/AddCategoryAction */ "./src/modules/category/actions/AddCategoryAction.ts");


        function categoryReducer(state = _app_common_initialState__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
            switch (action.type) {
                case _actions_SetCategoriesAction__WEBPACK_IMPORTED_MODULE_2__["SetCategoriesAction"].type:
                    return Object.assign({}, state, {categories: action.categories});
                case _actions_AddCategoryAction__WEBPACK_IMPORTED_MODULE_4__["AddCategoryAction"].type:
                    return Object.assign({}, state, {categories: [...state.categories, action.category;
                ]
            }
        )
        case
            _actions_RemoveCategoryAction__WEBPACK_IMPORTED_MODULE_3__["RemoveCategoryAction"].type;
        :
            return Object.assign({}, state, {categories: state.categories.filter(category = > category.id !== action.id)
        })
        default:
            return state;
        }
        }


        /***/
    }),

    /***/
    "./src/modules/category/selectors/getCategories.ts":
    /*!*********************************************************!*\
  !*** ./src/modules/category/selectors/getCategories.ts ***!
  \*********************************************************/
    /*! exports provided: getCategories */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getCategories", function () {
            return getCategories;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/selectors/getAppState */ "./src/modules/app/selectors/getAppState.ts");


        const getCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__["getAppState"], state = > state.categories;
    )
        /***/
    }),

    /***/
    "./src/modules/hints/actions/AddHintAction.ts":
    /*!****************************************************!*\
  !*** ./src/modules/hints/actions/AddHintAction.ts ***!
  \****************************************************/
    /*! exports provided: AddHintAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddHintAction", function () {
            return AddHintAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class AddHintAction {
            constructor(hint) {
                this.hint = hint;
                this.type = AddHintAction.type;
            }
        }

        AddHintAction.type = '[Hint] Add hint';


        /***/
    }),

    /***/
    "./src/modules/hints/actions/LoadHintsAction.ts":
    /*!******************************************************!*\
  !*** ./src/modules/hints/actions/LoadHintsAction.ts ***!
  \******************************************************/
    /*! exports provided: LoadHintsAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LoadHintsAction", function () {
            return LoadHintsAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class LoadHintsAction {
            constructor() {
                this.type = LoadHintsAction.type;
            }
        }

        LoadHintsAction.type = '[Hint] Load hints';


        /***/
    }),

    /***/
    "./src/modules/hints/actions/RejectLoadHintsAction.ts":
    /*!************************************************************!*\
  !*** ./src/modules/hints/actions/RejectLoadHintsAction.ts ***!
  \************************************************************/
    /*! exports provided: RejectLoadHintsAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectLoadHintsAction", function () {
            return RejectLoadHintsAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectLoadHintsAction {
            constructor() {
                this.type = RejectLoadHintsAction.type;
            }
        }

        RejectLoadHintsAction.type = '[Hint] Load hints rejected';


        /***/
    }),

    /***/
    "./src/modules/hints/actions/RejectRemoveHintAction.ts":
    /*!*************************************************************!*\
  !*** ./src/modules/hints/actions/RejectRemoveHintAction.ts ***!
  \*************************************************************/
    /*! exports provided: RejectRemoveHintAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectRemoveHintAction", function () {
            return RejectRemoveHintAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectRemoveHintAction {
            constructor() {
                this.type = RejectRemoveHintAction.type;
            }
        }

        RejectRemoveHintAction.type = '[Hint] Remove hint rejected';


        /***/
    }),

    /***/
    "./src/modules/hints/actions/RejectSaveHintAction.ts":
    /*!***********************************************************!*\
  !*** ./src/modules/hints/actions/RejectSaveHintAction.ts ***!
  \***********************************************************/
    /*! exports provided: RejectSaveHintAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectSaveHintAction", function () {
            return RejectSaveHintAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectSaveHintAction {
            constructor() {
                this.type = RejectSaveHintAction.type;
            }
        }

        RejectSaveHintAction.type = '[Hint] Save hint rejected';


        /***/
    }),

    /***/
    "./src/modules/hints/actions/RemoveHintAction.ts":
    /*!*******************************************************!*\
  !*** ./src/modules/hints/actions/RemoveHintAction.ts ***!
  \*******************************************************/
    /*! exports provided: RemoveHintAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RemoveHintAction", function () {
            return RemoveHintAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RemoveHintAction {
            constructor(id) {
                this.id = id;
                this.type = RemoveHintAction.type;
            }
        }

        RemoveHintAction.type = '[Hint] Remove';


        /***/
    }),

    /***/
    "./src/modules/hints/actions/SaveHintAction.ts":
    /*!*****************************************************!*\
  !*** ./src/modules/hints/actions/SaveHintAction.ts ***!
  \*****************************************************/
    /*! exports provided: SaveHintAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SaveHintAction", function () {
            return SaveHintAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SaveHintAction {
            constructor(parameters) {
                this.parameters = parameters;
                this.type = SaveHintAction.type;
            }
        }

        SaveHintAction.type = '[Hint] Save hint';


        /***/
    }),

    /***/
    "./src/modules/hints/actions/SetHintsAction.ts":
    /*!*****************************************************!*\
  !*** ./src/modules/hints/actions/SetHintsAction.ts ***!
  \*****************************************************/
    /*! exports provided: SetHintsAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SetHintsAction", function () {
            return SetHintsAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SetHintsAction {
            constructor(hints) {
                this.hints = hints;
                this.type = SetHintsAction.type;
            }
        }

        SetHintsAction.type = '[Hint] Set hints';


        /***/
    }),

    /***/
    "./src/modules/hints/actions/TryToRemoveHintAction.ts":
    /*!************************************************************!*\
  !*** ./src/modules/hints/actions/TryToRemoveHintAction.ts ***!
  \************************************************************/
    /*! exports provided: TryToRemoveHintAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TryToRemoveHintAction", function () {
            return TryToRemoveHintAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class TryToRemoveHintAction {
            constructor(id) {
                this.id = id;
                this.type = TryToRemoveHintAction.type;
            }
        }

        TryToRemoveHintAction.type = '[Hint] Try to remove';


        /***/
    }),

    /***/
    "./src/modules/hints/components/add-hint/add-hint.component.ts":
    /*!*********************************************************************!*\
  !*** ./src/modules/hints/components/add-hint/add-hint.component.ts ***!
  \*********************************************************************/
    /*! exports provided: AddHintComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddHintComponent", function () {
            return AddHintComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let AddHintComponent = class AddHintComponent {
            constructor() {
                this.changePointParameters = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleChangeName(value) {
                this.changePointParameters.emit(Object.assign({}, this.hintParameters, {name: value}));
            }

            handleChangeShortDescription(event) {
                const element = event.target;
                this.changePointParameters.emit(Object.assign({}, this.hintParameters, {shortDescription: element.value}));
            }

            handleChangeDescription(event) {
                const element = event.target;
                this.changePointParameters.emit(Object.assign({}, this.hintParameters, {description: element.value}));
            }

            handleChangeFile(file) {
                this.changePointParameters.emit(Object.assign({}, this.hintParameters, {imgFiles: [file]}));
            }

            handleCreate() {
                this.create.emit();
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], AddHintComponent.prototype, "hintParameters", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], AddHintComponent.prototype, "changePointParameters", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], AddHintComponent.prototype, "create", void 0);
        AddHintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-add-hint',
                template: `
        <div class="grid">
            <div class="title">Create hint</div>
            <skr-input
                class="name"
                [label]="'Name'"
                [value]="hintParameters.name"
                (onchange)="handleChangeName($event)"
            ></skr-input>
            <skr-textarea
                class="short-description"
                [label]="'Short description'"
                [value]="hintParameters.shortDescription"
                [rows]="5"
                (onchange)="handleChangeShortDescription($event)"
            ></skr-textarea>
            <skr-textarea
                class="description"
                [label]="'Description'"
                [value]="hintParameters.description"
                [rows]="5"
                (onchange)="handleChangeDescription($event)"
            ></skr-textarea>
            <skr-file-upload
                class="uploader"
                (changeFile)="handleChangeFile($event)"
            ></skr-file-upload>
            <div class="actions">
                <skr-button type="accent" (onclick)="handleCreate()">
                    Create
                </skr-button>
            </div>
        </div>
    `,
                styles: ["\n            .grid {\n                display: grid;\n                grid-gap: 1rem;\n                grid-template-columns: 2fr 1fr;\n                grid-template-areas:\n                    'title .'\n                    'name uploader'\n                    'short-description uploader'\n                    'description uploader'\n                    'actions actions';\n                padding: 2rem;\n                border-bottom: 0.1rem solid var(--color-border);\n            }\n\n            .title {\n                grid-area: title;\n                font-weight: bold;\n            }\n\n            .name {\n                grid-area: name;\n            }\n\n            .short-description {\n                grid-area: short-description;\n            }\n\n            .description {\n                grid-area: description;\n            }\n\n            .uploader {\n                grid-area: uploader;\n            }\n\n            .actions {\n                grid-area: actions;\n            }\n        "]
            })
        ], AddHintComponent);


        /***/
    }),

    /***/
    "./src/modules/hints/components/hint-list-item/hint-list-item.component.ts":
    /*!*********************************************************************************!*\
  !*** ./src/modules/hints/components/hint-list-item/hint-list-item.component.ts ***!
  \*********************************************************************************/
    /*! exports provided: HintListItemComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HintListItemComponent", function () {
            return HintListItemComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let HintListItemComponent = class HintListItemComponent {
            constructor() {
                this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleRemove() {
                this.remove.emit();
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], HintListItemComponent.prototype, "hint", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], HintListItemComponent.prototype, "remove", void 0);
        HintListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-hint-list-item',
                template: `
        <div class="item">
            <div class="image-wrapper">
                <img class="image" [src]="hint.imgUrl" />
            </div>
            <div class="content">
                <div class="title">{{ hint.name }}</div>
                <div>Short description: {{ hint.shortDescription }}</div>
                <div>Description: {{ hint.description }}</div>
            </div>
            <div class="actions">
                <skr-button type="accent" (onclick)="handleRemove()">
                    Remove
                </skr-button>
            </div>
        </div>
    `,
                styles: ["\n            .item {\n                display: grid;\n                grid-template-columns: auto 1fr auto;\n                grid-gap: 2rem;\n                padding: 2rem;\n                border-bottom: 1px solid var(--color-border);\n            }\n\n            .image {\n                height: 100px;\n                width: 100px;\n                background-color: var(--color-on-surface-secondary);\n            }\n\n            .content {\n                display: grid;\n                grid-gap: 1rem;\n                grid-template-rows: auto auto 1fr;\n            }\n\n            .title {\n                font-weight: bold;\n            }\n\n            .actions {\n                display: grid;\n                align-items: end;\n            }\n        "]
            })
        ], HintListItemComponent);


        /***/
    }),

    /***/
    "./src/modules/hints/containers/add-hint-parameters/add-hint-parameters-container.component.ts":
    /*!*****************************************************************************************************!*\
  !*** ./src/modules/hints/containers/add-hint-parameters/add-hint-parameters-container.component.ts ***!
  \*****************************************************************************************************/
    /*! exports provided: AddHintParametersContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddHintParametersContainerComponent", function () {
            return AddHintParametersContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _enums_HintAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/HintAction */ "./src/modules/hints/enums/HintAction.ts");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _actions_SaveHintAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/SaveHintAction */ "./src/modules/hints/actions/SaveHintAction.ts");


        let AddHintParametersContainerComponent = class AddHintParametersContainerComponent {
            constructor(store) {
                this.store = store;
                this.hintParameters = {
                    name: '',
                    description: '',
                    shortDescription: '',
                    hintAction: _enums_HintAction__WEBPACK_IMPORTED_MODULE_2__["HintAction"].COMPASS,
                    imgFiles: [],
                };
            }

            handleChangePointParameters(value) {
                this.hintParameters = value;
            }

            handleCreate() {
                this.store.dispatch(new _actions_SaveHintAction__WEBPACK_IMPORTED_MODULE_4__["SaveHintAction"](this.hintParameters));
            }
        };
        AddHintParametersContainerComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]}
        ];
        AddHintParametersContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-add-hint-parameters-container',
                template: `
        <skr-add-hint
            [hintParameters]="hintParameters"
            (changePointParameters)="handleChangePointParameters($event)"
            (create)="handleCreate()"
        ></skr-add-hint>
    `,
            })
        ], AddHintParametersContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/hints/containers/hint-list-container/hint-list-container.component.ts":
    /*!*******************************************************************************************!*\
  !*** ./src/modules/hints/containers/hint-list-container/hint-list-container.component.ts ***!
  \*******************************************************************************************/
    /*! exports provided: HintListContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HintListContainerComponent", function () {
            return HintListContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _selectors_getHints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/getHints */ "./src/modules/hints/selectors/getHints.ts");
        /* harmony import */
        var _actions_LoadHintsAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/LoadHintsAction */ "./src/modules/hints/actions/LoadHintsAction.ts");
        /* harmony import */
        var _actions_TryToRemoveHintAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/TryToRemoveHintAction */ "./src/modules/hints/actions/TryToRemoveHintAction.ts");


        let HintListContainerComponent = class HintListContainerComponent {
            constructor(store) {
                this.store = store;
                this.hints$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_getHints__WEBPACK_IMPORTED_MODULE_3__["getHints"]));
                this.store.dispatch(new _actions_LoadHintsAction__WEBPACK_IMPORTED_MODULE_4__["LoadHintsAction"]());
            }

            handleRemove(id) {
                this.store.dispatch(new _actions_TryToRemoveHintAction__WEBPACK_IMPORTED_MODULE_5__["TryToRemoveHintAction"](id));
            }
        };
        HintListContainerComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]}
        ];
        HintListContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-hint-list-container',
                template: `
        <skr-hint-list-item
            *ngFor="let hint of hints$ | async"
            [hint]="hint"
            (remove)="handleRemove(hint.id)"
        ></skr-hint-list-item>
    `,
            })
        ], HintListContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/hints/effects/hint.effects.ts":
    /*!***************************************************!*\
  !*** ./src/modules/hints/effects/hint.effects.ts ***!
  \***************************************************/
    /*! exports provided: HintEffects */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HintEffects", function () {
            return HintEffects;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
        /* harmony import */
        var _api_services_api_hint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/services/api-hint.service */ "./src/modules/api/services/api-hint.service.ts");
        /* harmony import */
        var _actions_LoadHintsAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/LoadHintsAction */ "./src/modules/hints/actions/LoadHintsAction.ts");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
        /* harmony import */
        var _actions_SetHintsAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/SetHintsAction */ "./src/modules/hints/actions/SetHintsAction.ts");
        /* harmony import */
        var _actions_RejectLoadHintsAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/RejectLoadHintsAction */ "./src/modules/hints/actions/RejectLoadHintsAction.ts");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
        /* harmony import */
        var _notification_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../notification/services/notification.service */ "./src/modules/notification/services/notification.service.ts");
        /* harmony import */
        var _actions_TryToRemoveHintAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/TryToRemoveHintAction */ "./src/modules/hints/actions/TryToRemoveHintAction.ts");
        /* harmony import */
        var _actions_RemoveHintAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/RemoveHintAction */ "./src/modules/hints/actions/RemoveHintAction.ts");
        /* harmony import */
        var _actions_RejectRemoveHintAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/RejectRemoveHintAction */ "./src/modules/hints/actions/RejectRemoveHintAction.ts");
        /* harmony import */
        var _actions_SaveHintAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/SaveHintAction */ "./src/modules/hints/actions/SaveHintAction.ts");
        /* harmony import */
        var _actions_AddHintAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions/AddHintAction */ "./src/modules/hints/actions/AddHintAction.ts");
        /* harmony import */
        var _actions_RejectSaveHintAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/RejectSaveHintAction */ "./src/modules/hints/actions/RejectSaveHintAction.ts");


        let HintEffects = class HintEffects {
            constructor(actions$, apiHintEndpointService, notifivationService) {
                this.actions$ = actions$;
                this.apiHintEndpointService = apiHintEndpointService;
                this.notifivationService = notifivationService;
                this.loadHints$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_LoadHintsAction__WEBPACK_IMPORTED_MODULE_4__["LoadHintsAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() = > this.apiHintEndpointService.getHints().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(hints = > new _actions_SetHintsAction__WEBPACK_IMPORTED_MODULE_6__["SetHintsAction"](hints)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() = > {
                    this.notifivationService.error('Failed to load hints');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(new _actions_RejectLoadHintsAction__WEBPACK_IMPORTED_MODULE_7__["RejectLoadHintsAction"]());
            })))))
                this.addHint$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_SaveHintAction__WEBPACK_IMPORTED_MODULE_13__["SaveHintAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action = > this.apiHintEndpointService
                    .saveHint(action.parameters, '')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(hint = > {
                        this.notifivationService.success('Hint successfully added');
                return new _actions_AddHintAction__WEBPACK_IMPORTED_MODULE_14__["AddHintAction"](hint);
            }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() = > {
                    this.notifivationService.error('Failed to add hint');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(new _actions_RejectSaveHintAction__WEBPACK_IMPORTED_MODULE_15__["RejectSaveHintAction"]());
            })))))
                this.removeHint$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_TryToRemoveHintAction__WEBPACK_IMPORTED_MODULE_10__["TryToRemoveHintAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action = > this.apiHintEndpointService.remove(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() = > new _actions_RemoveHintAction__WEBPACK_IMPORTED_MODULE_11__["RemoveHintAction"](action.id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() = > {
                    this.notifivationService.error('Failed to remove hint');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(new _actions_RejectRemoveHintAction__WEBPACK_IMPORTED_MODULE_12__["RejectRemoveHintAction"]());
            })))))
            }
        };
        HintEffects.ctorParameters = () =;
    >
        [
            {type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]},
            {type: _api_services_api_hint_service__WEBPACK_IMPORTED_MODULE_3__["ApiHintService"]},
            {type: _notification_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]}
        ];
        HintEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        ], HintEffects);


        /***/
    }),

    /***/
    "./src/modules/hints/enums/HintAction.ts":
    /*!***********************************************!*\
  !*** ./src/modules/hints/enums/HintAction.ts ***!
  \***********************************************/
    /*! exports provided: HintAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HintAction", function () {
            return HintAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        var HintAction;
        (function (HintAction) {
            HintAction["COMPASS"] = "COMPASS";
        })(HintAction || (HintAction = {}));


        /***/
    }),

    /***/
    "./src/modules/hints/hints.module.ts":
    /*!*******************************************!*\
  !*** ./src/modules/hints/hints.module.ts ***!
  \*******************************************/
    /*! exports provided: HintsModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HintsModule", function () {
            return HintsModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
        /* harmony import */
        var _containers_hint_list_container_hint_list_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/hint-list-container/hint-list-container.component */ "./src/modules/hints/containers/hint-list-container/hint-list-container.component.ts");
        /* harmony import */
        var _components_hint_list_item_hint_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hint-list-item/hint-list-item.component */ "./src/modules/hints/components/hint-list-item/hint-list-item.component.ts");
        /* harmony import */
        var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/modules/ui-components/ui-components.module.ts");
        /* harmony import */
        var _containers_add_hint_parameters_add_hint_parameters_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/add-hint-parameters/add-hint-parameters-container.component */ "./src/modules/hints/containers/add-hint-parameters/add-hint-parameters-container.component.ts");
        /* harmony import */
        var _components_add_hint_add_hint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-hint/add-hint.component */ "./src/modules/hints/components/add-hint/add-hint.component.ts");
        /* harmony import */
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
        /* harmony import */
        var _effects_hint_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/hint.effects */ "./src/modules/hints/effects/hint.effects.ts");


        let HintsModule = class HintsModule {
        };
        HintsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_5__["UiComponentsModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_effects_hint_effects__WEBPACK_IMPORTED_MODULE_9__["HintEffects"]]),
                ],
                declarations: [
                    _containers_hint_list_container_hint_list_container_component__WEBPACK_IMPORTED_MODULE_3__["HintListContainerComponent"],
                    _components_hint_list_item_hint_list_item_component__WEBPACK_IMPORTED_MODULE_4__["HintListItemComponent"],
                    _containers_add_hint_parameters_add_hint_parameters_container_component__WEBPACK_IMPORTED_MODULE_6__["AddHintParametersContainerComponent"],
                    _components_add_hint_add_hint_component__WEBPACK_IMPORTED_MODULE_7__["AddHintComponent"],
                ],
                exports: [_containers_hint_list_container_hint_list_container_component__WEBPACK_IMPORTED_MODULE_3__["HintListContainerComponent"], _containers_add_hint_parameters_add_hint_parameters_container_component__WEBPACK_IMPORTED_MODULE_6__["AddHintParametersContainerComponent"]],
            })
        ], HintsModule);


        /***/
    }),

    /***/
    "./src/modules/hints/reducers/hintReducer.ts":
    /*!***************************************************!*\
  !*** ./src/modules/hints/reducers/hintReducer.ts ***!
  \***************************************************/
    /*! exports provided: hintReducer */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "hintReducer", function () {
            return hintReducer;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _app_common_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/common/initialState */ "./src/modules/app/common/initialState.ts");
        /* harmony import */
        var _actions_RemoveHintAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/RemoveHintAction */ "./src/modules/hints/actions/RemoveHintAction.ts");
        /* harmony import */
        var _actions_SetHintsAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/SetHintsAction */ "./src/modules/hints/actions/SetHintsAction.ts");
        /* harmony import */
        var _actions_AddHintAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/AddHintAction */ "./src/modules/hints/actions/AddHintAction.ts");


        function hintReducer(state = _app_common_initialState__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
            switch (action.type) {
                case _actions_SetHintsAction__WEBPACK_IMPORTED_MODULE_3__["SetHintsAction"].type:
                    return Object.assign({}, state, {hints: action.hints});
                case _actions_AddHintAction__WEBPACK_IMPORTED_MODULE_4__["AddHintAction"].type:
                    return Object.assign({}, state, {hints: [...state.hints, action.hint;
                ]
            }
        )
        case
            _actions_RemoveHintAction__WEBPACK_IMPORTED_MODULE_2__["RemoveHintAction"].type;
        :
            return Object.assign({}, state, {hints: state.hints.filter(hint = > hint.id !== action.id)
        })
        default:
            return state;
        }
        }


        /***/
    }),

    /***/
    "./src/modules/hints/selectors/getHints.ts":
    /*!*************************************************!*\
  !*** ./src/modules/hints/selectors/getHints.ts ***!
  \*************************************************/
    /*! exports provided: getHints */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getHints", function () {
            return getHints;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/selectors/getAppState */ "./src/modules/app/selectors/getAppState.ts");


        const getHints = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__["getAppState"], state = > state.hints;
    )
        /***/
    }),

    /***/
    "./src/modules/icons/components/close-icon/close-icon.component.ts":
    /*!*************************************************************************!*\
  !*** ./src/modules/icons/components/close-icon/close-icon.component.ts ***!
  \*************************************************************************/
    /*! exports provided: CloseIconComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CloseIconComponent", function () {
            return CloseIconComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let CloseIconComponent = class CloseIconComponent {
        };
        CloseIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-close-icon',
                template: `
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.90203 2.9489C8.60913 2.65601 8.13426 2.65601 7.84137 2.9489L5.95312 4.83715L4.06488 2.94891C3.77199 2.65601 3.29711 2.65601 3.00422 2.94891L2.94861 3.00451C2.65572 3.29741 2.65572 3.77228 2.94861 4.06517L4.83685 5.95341L2.9486 7.84166C2.65571 8.13456 2.65571 8.60943 2.9486 8.90232L3.00421 8.95793C3.2971 9.25082 3.77198 9.25082 4.06487 8.95793L5.95312 7.06968L7.84137 8.95794C8.13427 9.25083 8.60914 9.25083 8.90203 8.95794L8.95764 8.90233C9.25053 8.60944 9.25053 8.13456 8.95764 7.84167L7.06939 5.95341L8.95763 4.06517C9.25053 3.77227 9.25053 3.2974 8.95763 3.00451L8.90203 2.9489Z"
            ></path>
        </svg>
    `,
                styles: ["\n            svg {\n                fill: currentColor;\n                vertical-align: text-bottom;\n            }\n        "]
            })
        ], CloseIconComponent);


        /***/
    }),

    /***/
    "./src/modules/icons/components/upload-icon/upload-icon.component.ts":
    /*!***************************************************************************!*\
  !*** ./src/modules/icons/components/upload-icon/upload-icon.component.ts ***!
  \***************************************************************************/
    /*! exports provided: UploadIconComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "UploadIconComponent", function () {
            return UploadIconComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let UploadIconComponent = class UploadIconComponent {
        };
        UploadIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-upload-icon',
                template: `
        <svg width="100%" height="100%" viewBox="0 0 512 512">
            <path
                d="M498.966,339.946c-7.197,0-13.034,5.837-13.034,13.034v49.804c0,28.747-23.388,52.135-52.135,52.135H78.203
			c-28.747,0-52.135-23.388-52.135-52.135V352.98c0-7.197-5.835-13.034-13.034-13.034C5.835,339.946,0,345.782,0,352.98v49.804
			c0,43.121,35.082,78.203,78.203,78.203h355.594c43.121,0,78.203-35.082,78.203-78.203V352.98
			C512,345.782,506.165,339.946,498.966,339.946z"
            />
            <path
                d="M419.833,391.3H92.167c-7.197,0-13.034,5.837-13.034,13.034s5.835,13.034,13.034,13.034h327.665
			c7.199,0,13.034-5.835,13.034-13.034C432.866,397.137,427.031,391.3,419.833,391.3z"
            />
            <path
                d="M387.919,207.93c-4.795-5.367-13.034-5.834-18.404-1.038l-100.482,89.765V44.048c0-7.197-5.835-13.034-13.034-13.034
			c-7.197,0-13.034,5.835-13.034,13.034v252.609l-100.482-89.764c-5.367-4.796-13.607-4.328-18.404,1.038
			c-4.794,5.369-4.331,13.609,1.037,18.404l109.174,97.527c6.187,5.529,13.946,8.292,21.708,8.292
			c7.759,0,15.519-2.763,21.708-8.289l109.174-97.53C392.25,221.537,392.714,213.297,387.919,207.93z"
            />
        </svg>
    `,
                styles: ["\n            path {\n                fill: currentColor;\n            }\n        "]
            })
        ], UploadIconComponent);


        /***/
    }),

    /***/
    "./src/modules/icons/icons.module.ts":
    /*!*******************************************!*\
  !*** ./src/modules/icons/icons.module.ts ***!
  \*******************************************/
    /*! exports provided: IconsModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "IconsModule", function () {
            return IconsModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
        /* harmony import */
        var _components_close_icon_close_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/close-icon/close-icon.component */ "./src/modules/icons/components/close-icon/close-icon.component.ts");
        /* harmony import */
        var _components_upload_icon_upload_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/upload-icon/upload-icon.component */ "./src/modules/icons/components/upload-icon/upload-icon.component.ts");


        let IconsModule = class IconsModule {
        };
        IconsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [_components_close_icon_close_icon_component__WEBPACK_IMPORTED_MODULE_3__["CloseIconComponent"], _components_upload_icon_upload_icon_component__WEBPACK_IMPORTED_MODULE_4__["UploadIconComponent"]],
                exports: [_components_close_icon_close_icon_component__WEBPACK_IMPORTED_MODULE_3__["CloseIconComponent"], _components_upload_icon_upload_icon_component__WEBPACK_IMPORTED_MODULE_4__["UploadIconComponent"]],
            })
        ], IconsModule);


        /***/
    }),

    /***/
    "./src/modules/navigation/actions/SetActiveTab.ts":
    /*!********************************************************!*\
  !*** ./src/modules/navigation/actions/SetActiveTab.ts ***!
  \********************************************************/
    /*! exports provided: SetActiveTab */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SetActiveTab", function () {
            return SetActiveTab;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SetActiveTab {
            constructor(tab) {
                this.tab = tab;
                this.type = SetActiveTab.type;
            }
        }

        SetActiveTab.type = '[Tab] Set active tab';


        /***/
    }),

    /***/
    "./src/modules/navigation/components/navigation/navigation.component.ts":
    /*!******************************************************************************!*\
  !*** ./src/modules/navigation/components/navigation/navigation.component.ts ***!
  \******************************************************************************/
    /*! exports provided: NavigationComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
            return NavigationComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _enums_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/Tab */ "./src/modules/navigation/enums/Tab.ts");


        let NavigationComponent = class NavigationComponent {
            constructor() {
                this.tab = _enums_Tab__WEBPACK_IMPORTED_MODULE_2__["Tab"];
                this.changeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleSelect(tab) {
                this.changeTab.emit(tab);
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], NavigationComponent.prototype, "activeTab", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], NavigationComponent.prototype, "changeTab", void 0);
        NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-navigation',
                template: `
        <div class="navigation">
            <div class="grid">
                <skr-tab
                    [active]="activeTab === tab.TRAVEL"
                    (onselect)="handleSelect(tab.TRAVEL)"
                >
                    Travels
                </skr-tab>
                <skr-tab
                    [active]="activeTab === tab.POINTS"
                    (onselect)="handleSelect(tab.POINTS)"
                >
                    Points
                </skr-tab>
                <skr-tab
                    [active]="activeTab === tab.HINTS"
                    (onselect)="handleSelect(tab.HINTS)"
                >
                    Hints
                </skr-tab>
                <skr-tab
                    [active]="activeTab === tab.CATEGORIES"
                    (onselect)="handleSelect(tab.CATEGORIES)"
                >
                    Categories
                </skr-tab>
            </div>
        </div>
    `,
                styles: ["\n            .navigation {\n                border-bottom: 0.1rem solid var(--color-border);\n            }\n\n            .grid {\n                display: grid;\n                grid-auto-flow: column;\n                justify-content: left;\n                height: 5rem;\n            }\n        "]
            })
        ], NavigationComponent);


        /***/
    }),

    /***/
    "./src/modules/navigation/containers/navigation-container/navigation-container.component.ts":
    /*!**************************************************************************************************!*\
  !*** ./src/modules/navigation/containers/navigation-container/navigation-container.component.ts ***!
  \**************************************************************************************************/
    /*! exports provided: NavigationContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NavigationContainerComponent", function () {
            return NavigationContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _selectors_getActiveTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/getActiveTab */ "./src/modules/navigation/selectors/getActiveTab.ts");
        /* harmony import */
        var _actions_SetActiveTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/SetActiveTab */ "./src/modules/navigation/actions/SetActiveTab.ts");


        let NavigationContainerComponent = class NavigationContainerComponent {
            constructor(store) {
                this.store = store;
                this.activeTab$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_getActiveTab__WEBPACK_IMPORTED_MODULE_3__["getActiveTab"]));
            }

            handleChangeTab(tab) {
                this.store.dispatch(new _actions_SetActiveTab__WEBPACK_IMPORTED_MODULE_4__["SetActiveTab"](tab));
            }
        };
        NavigationContainerComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]}
        ];
        NavigationContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-navigation-container',
                template: `
        <skr-navigation
            [activeTab]="activeTab$ | async"
            (changeTab)="handleChangeTab($event)"
        ></skr-navigation>
    `,
            })
        ], NavigationContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/navigation/enums/Tab.ts":
    /*!*********************************************!*\
  !*** ./src/modules/navigation/enums/Tab.ts ***!
  \*********************************************/
    /*! exports provided: Tab */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Tab", function () {
            return Tab;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        var Tab;
        (function (Tab) {
            Tab["TRAVEL"] = "travel";
            Tab["POINTS"] = "points";
            Tab["HINTS"] = "hints";
            Tab["CATEGORIES"] = "categories";
        })(Tab || (Tab = {}));


        /***/
    }),

    /***/
    "./src/modules/navigation/navigation.module.ts":
    /*!*****************************************************!*\
  !*** ./src/modules/navigation/navigation.module.ts ***!
  \*****************************************************/
    /*! exports provided: NavigationModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
            return NavigationModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
        /* harmony import */
        var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/modules/ui-components/ui-components.module.ts");
        /* harmony import */
        var _containers_navigation_container_navigation_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/navigation-container/navigation-container.component */ "./src/modules/navigation/containers/navigation-container/navigation-container.component.ts");
        /* harmony import */
        var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/modules/navigation/components/navigation/navigation.component.ts");


        let NavigationModule = class NavigationModule {
        };
        NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_3__["UiComponentsModule"]],
                declarations: [_containers_navigation_container_navigation_container_component__WEBPACK_IMPORTED_MODULE_4__["NavigationContainerComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]],
                exports: [_containers_navigation_container_navigation_container_component__WEBPACK_IMPORTED_MODULE_4__["NavigationContainerComponent"]],
            })
        ], NavigationModule);


        /***/
    }),

    /***/
    "./src/modules/navigation/reducers/navigationReducer.ts":
    /*!**************************************************************!*\
  !*** ./src/modules/navigation/reducers/navigationReducer.ts ***!
  \**************************************************************/
    /*! exports provided: navigationReducer */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "navigationReducer", function () {
            return navigationReducer;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _app_common_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/common/initialState */ "./src/modules/app/common/initialState.ts");
        /* harmony import */
        var _actions_SetActiveTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/SetActiveTab */ "./src/modules/navigation/actions/SetActiveTab.ts");


        function navigationReducer(state = _app_common_initialState__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
            switch (action.type) {
                case _actions_SetActiveTab__WEBPACK_IMPORTED_MODULE_2__["SetActiveTab"].type: {
                    return Object.assign({}, state, {activeTab: action.tab});
                }
                default:
                    return state;
            }
        }


        /***/
    }),

    /***/
    "./src/modules/navigation/selectors/getActiveTab.ts":
    /*!**********************************************************!*\
  !*** ./src/modules/navigation/selectors/getActiveTab.ts ***!
  \**********************************************************/
    /*! exports provided: getActiveTab */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getActiveTab", function () {
            return getActiveTab;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/selectors/getAppState */ "./src/modules/app/selectors/getAppState.ts");


        const getActiveTab = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__["getAppState"], state = > state.activeTab;
    )
        /***/
    }),

    /***/
    "./src/modules/notification/common/notificationConfig.ts":
    /*!***************************************************************!*\
  !*** ./src/modules/notification/common/notificationConfig.ts ***!
  \***************************************************************/
    /*! exports provided: notificationConfig */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "notificationConfig", function () {
            return notificationConfig;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        const notificationConfig = {
            lifetime: 3000,
            appearanceTime: 1000,
            disappearanceTime: 400,
        };


        /***/
    }),

    /***/
    "./src/modules/notification/components/error-notification/error-notification.component.ts":
    /*!************************************************************************************************!*\
  !*** ./src/modules/notification/components/error-notification/error-notification.component.ts ***!
  \************************************************************************************************/
    /*! exports provided: ErrorNotificationComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ErrorNotificationComponent", function () {
            return ErrorNotificationComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _common_notificationConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/notificationConfig */ "./src/modules/notification/common/notificationConfig.ts");
        /* harmony import */
        var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


        let ErrorNotificationComponent = class ErrorNotificationComponent {
            constructor() {
                this.message = '';
                this.hidden = false;
            }

            handleClose() {
                this.notificationService.detachComponent(this);
            }
        };
        ErrorNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-error-notification',
                template: `
        <div class="notification" [@openClose]="hidden ? 'void' : 'open'">
            <div class="icon-container">
                <skr-close-icon></skr-close-icon>
            </div>
            <div>{{ message }}</div>
            <div class="close-icon-container" (click)="handleClose()">
                <skr-close-icon></skr-close-icon>
            </div>
        </div>
    `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('openClose', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 0,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 1,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(`${_common_notificationConfig__WEBPACK_IMPORTED_MODULE_2__["notificationConfig"].appearanceTime}ms ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
                                opacity: 0,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'skewX(20deg)',
                                opacity: 0.5,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'skewX(-5deg)',
                                opacity: 0.5,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'none',
                                opacity: 1,
                            }),
                        ]))),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('open => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(`${_common_notificationConfig__WEBPACK_IMPORTED_MODULE_2__["notificationConfig"].disappearanceTime}ms ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                opacity: 1,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'translate3d(100%, 0, 0) skewX(30deg)',
                                opacity: 0,
                            }),
                        ]))),
                    ]),
                ],
                styles: ["\n            .notification {\n                position: relative;\n\n                display: grid;\n                grid-gap: 1rem;\n                grid-template-columns: auto 1fr;\n                background-color: var(--color-surface);\n                padding: 1.5rem 3.5rem 1.5rem 1.5rem;\n                width: 25rem;\n                align-items: center;\n                border-radius: 0.8rem;\n                border-left: 0.4rem solid var(--color-remove-text);\n                box-shadow: 0 0.8rem 2rem var(--color-big-shadow);\n            }\n\n            .icon-container {\n                display: grid;\n                border: 0.1rem solid currentColor;\n                color: var(--color-remove-text);\n                border-radius: 50%;\n                width: 1.6rem;\n                height: 1.6rem;\n                align-content: end;\n                justify-content: center;\n            }\n\n            .close-icon-container {\n                position: absolute;\n                top: 0.5rem;\n                right: 1rem;\n                width: 20px;\n                color: var(--color-on-surface-secondary);\n            }\n        "]
            })
        ], ErrorNotificationComponent);


        /***/
    }),

    /***/
    "./src/modules/notification/components/success-notification/success-notification.component.ts":
    /*!****************************************************************************************************!*\
  !*** ./src/modules/notification/components/success-notification/success-notification.component.ts ***!
  \****************************************************************************************************/
    /*! exports provided: SuccessNotificationComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SuccessNotificationComponent", function () {
            return SuccessNotificationComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _common_notificationConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/notificationConfig */ "./src/modules/notification/common/notificationConfig.ts");
        /* harmony import */
        var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


        let SuccessNotificationComponent = class SuccessNotificationComponent {
            constructor() {
                this.message = '';
                this.hidden = false;
            }

            handleClose() {
                this.notificationService.detachComponent(this);
            }
        };
        SuccessNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-success-notification',
                template: `
        <div class="notification" [@openClose]="hidden ? 'void' : 'open'">
            <div class="icon-container">
                <skr-close-icon></skr-close-icon>
            </div>
            <div>{{ message }}</div>
            <div class="close-icon-container" (click)="handleClose()">
                <skr-close-icon></skr-close-icon>
            </div>
        </div>
    `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('openClose', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 0,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 1,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(`${_common_notificationConfig__WEBPACK_IMPORTED_MODULE_2__["notificationConfig"].appearanceTime}ms ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
                                opacity: 0,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'skewX(20deg)',
                                opacity: 0.5,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'skewX(-5deg)',
                                opacity: 0.5,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'none',
                                opacity: 1,
                            }),
                        ]))),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('open => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(`${_common_notificationConfig__WEBPACK_IMPORTED_MODULE_2__["notificationConfig"].disappearanceTime}ms ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                opacity: 1,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'translate3d(100%, 0, 0) skewX(30deg)',
                                opacity: 0,
                            }),
                        ]))),
                    ]),
                ],
                styles: ["\n            .notification {\n                position: relative;\n\n                display: grid;\n                grid-gap: 1rem;\n                grid-template-columns: auto 1fr;\n                background-color: var(--color-surface);\n                padding: 1.5rem 3.5rem 1.5rem 1.5rem;\n                width: 25rem;\n                align-items: center;\n                border-radius: 0.8rem;\n                border-left: 0.4rem solid var(--color-accent-2);\n                box-shadow: 0 0.8rem 2rem var(--color-big-shadow);\n            }\n\n            .icon-container {\n                display: grid;\n                border: 0.1rem solid currentColor;\n                color: var(--color-accent-2);\n                border-radius: 50%;\n                width: 1.6rem;\n                height: 1.6rem;\n                align-content: end;\n                justify-content: center;\n            }\n\n            .close-icon-container {\n                position: absolute;\n                top: 0.5rem;\n                right: 1rem;\n                width: 20px;\n                color: var(--color-on-surface-secondary);\n            }\n        "]
            })
        ], SuccessNotificationComponent);


        /***/
    }),

    /***/
    "./src/modules/notification/containers/notification-container/notification-container.component.ts":
    /*!********************************************************************************************************!*\
  !*** ./src/modules/notification/containers/notification-container/notification-container.component.ts ***!
  \********************************************************************************************************/
    /*! exports provided: NotificationContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NotificationContainerComponent", function () {
            return NotificationContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _directives_notification_host_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/notification-host.directive */ "./src/modules/notification/directives/notification-host.directive.ts");
        /* harmony import */
        var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "./src/modules/notification/services/notification.service.ts");


        let NotificationContainerComponent = class NotificationContainerComponent {
            constructor(notificationService) {
                this.notificationService = notificationService;
            }

            ngAfterContentInit() {
                this.notificationService.setElementRef(this.notificationContainer);
            }
        };
        NotificationContainerComponent.ctorParameters = () =;
    >
        [
            {type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]}
        ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directives_notification_host_directive__WEBPACK_IMPORTED_MODULE_2__["NotificationHostDirective"], {static: true})
        ], NotificationContainerComponent.prototype, "notificationContainer", void 0);
        NotificationContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-notification-container',
                template: `
        <div class="wrapper">
            <ng-content></ng-content>
            <div class="notification-container">
                <div skrNotificationHost></div>
            </div>
        </div>
    `,
                styles: ["\n            .wrapper {\n                position: relative;\n                height: 100%;\n            }\n\n            .notification-container {\n                position: absolute;\n                right: 0;\n                bottom: 0;\n\n                display: grid;\n                grid-gap: 5px;\n                width: max-content;\n                padding-bottom: 25px;\n                padding-right: 10px;\n            }\n        "]
            })
        ], NotificationContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/notification/directives/notification-host.directive.ts":
    /*!****************************************************************************!*\
  !*** ./src/modules/notification/directives/notification-host.directive.ts ***!
  \****************************************************************************/
    /*! exports provided: NotificationHostDirective */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NotificationHostDirective", function () {
            return NotificationHostDirective;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let NotificationHostDirective = class NotificationHostDirective {
            constructor(viewContainerRef) {
                this.viewContainerRef = viewContainerRef;
            }
        };
        NotificationHostDirective.ctorParameters = () =;
    >
        [
            {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]}
        ];
        NotificationHostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                selector: '[skrNotificationHost]',
            })
        ], NotificationHostDirective);


        /***/
    }),

    /***/
    "./src/modules/notification/notification.module.ts":
    /*!*********************************************************!*\
  !*** ./src/modules/notification/notification.module.ts ***!
  \*********************************************************/
    /*! exports provided: NotificationModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NotificationModule", function () {
            return NotificationModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
        /* harmony import */
        var _containers_notification_container_notification_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/notification-container/notification-container.component */ "./src/modules/notification/containers/notification-container/notification-container.component.ts");
        /* harmony import */
        var _components_success_notification_success_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/success-notification/success-notification.component */ "./src/modules/notification/components/success-notification/success-notification.component.ts");
        /* harmony import */
        var _components_error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/error-notification/error-notification.component */ "./src/modules/notification/components/error-notification/error-notification.component.ts");
        /* harmony import */
        var _directives_notification_host_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/notification-host.directive */ "./src/modules/notification/directives/notification-host.directive.ts");
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
        /* harmony import */
        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
        /* harmony import */
        var _icons_icons_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/icons.module */ "./src/modules/icons/icons.module.ts");


        let NotificationModule = class NotificationModule {
        };
        NotificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                declarations: [
                    _containers_notification_container_notification_container_component__WEBPACK_IMPORTED_MODULE_3__["NotificationContainerComponent"],
                    _components_success_notification_success_notification_component__WEBPACK_IMPORTED_MODULE_4__["SuccessNotificationComponent"],
                    _components_error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_5__["ErrorNotificationComponent"],
                    _directives_notification_host_directive__WEBPACK_IMPORTED_MODULE_6__["NotificationHostDirective"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _icons_icons_module__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
                ],
                entryComponents: [_components_success_notification_success_notification_component__WEBPACK_IMPORTED_MODULE_4__["SuccessNotificationComponent"], _components_error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_5__["ErrorNotificationComponent"]],
                exports: [_containers_notification_container_notification_container_component__WEBPACK_IMPORTED_MODULE_3__["NotificationContainerComponent"]],
            })
        ], NotificationModule);


        /***/
    }),

    /***/
    "./src/modules/notification/services/notification.service.ts":
    /*!*******************************************************************!*\
  !*** ./src/modules/notification/services/notification.service.ts ***!
  \*******************************************************************/
    /*! exports provided: NotificationService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
            return NotificationService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _components_success_notification_success_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/success-notification/success-notification.component */ "./src/modules/notification/components/success-notification/success-notification.component.ts");
        /* harmony import */
        var _components_error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/error-notification/error-notification.component */ "./src/modules/notification/components/error-notification/error-notification.component.ts");
        /* harmony import */
        var _common_notificationConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/notificationConfig */ "./src/modules/notification/common/notificationConfig.ts");


        let NotificationService = class NotificationService {
            constructor(componentFactoryResolver) {
                this.componentFactoryResolver = componentFactoryResolver;
                this.notifications = [];
            }

            success(message) {
                this.attachComponent(_components_success_notification_success_notification_component__WEBPACK_IMPORTED_MODULE_2__["SuccessNotificationComponent"], message);
            }

            error(message) {
                this.attachComponent(_components_error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_3__["ErrorNotificationComponent"], message);
            }

            attachComponent(component, message) {
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
                const viewContainerRef = this.notificationContainer.viewContainerRef;
                const componentRef = viewContainerRef.createComponent(componentFactory);
                const notificationComponent = componentRef.instance;
                notificationComponent.message = message;
                notificationComponent.notificationService = this;
                this.notifications = [...this.notifications, notificationComponent;
            ]
                setTimeout(() = > {
                    notificationComponent.hidden = true;
            },
                _common_notificationConfig__WEBPACK_IMPORTED_MODULE_4__["notificationConfig"].lifetime - _common_notificationConfig__WEBPACK_IMPORTED_MODULE_4__["notificationConfig"].disappearanceTime;
            )
                setTimeout(() = > this.detachComponent(notificationComponent), _common_notificationConfig__WEBPACK_IMPORTED_MODULE_4__["notificationConfig"].lifetime;
            )
            }

            detachComponent(notification) {
                const notificationIndex = this.notifications.indexOf(notification);
                this.notificationContainer.viewContainerRef.remove(notificationIndex);
                this.notifications = this.notifications.filter(item = > item !== notification;
            )
            }

            setElementRef(hostElement) {
                this.notificationContainer = hostElement;
            }
        };
        NotificationService.ctorParameters = () =;
    >
        [
            {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]}
        ];
        NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root',
            })
        ], NotificationService);


        /***/
    }),

    /***/
    "./src/modules/points/actions/AddPointAction.ts":
    /*!******************************************************!*\
  !*** ./src/modules/points/actions/AddPointAction.ts ***!
  \******************************************************/
    /*! exports provided: AddPointAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddPointAction", function () {
            return AddPointAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class AddPointAction {
            constructor(point) {
                this.point = point;
                this.type = AddPointAction.type;
            }
        }

        AddPointAction.type = '[Point] Add point';


        /***/
    }),

    /***/
    "./src/modules/points/actions/LoadPointsAction.ts":
    /*!********************************************************!*\
  !*** ./src/modules/points/actions/LoadPointsAction.ts ***!
  \********************************************************/
    /*! exports provided: LoadPointsAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LoadPointsAction", function () {
            return LoadPointsAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class LoadPointsAction {
            constructor() {
                this.type = LoadPointsAction.type;
            }
        }

        LoadPointsAction.type = '[Point] Load points';


        /***/
    }),

    /***/
    "./src/modules/points/actions/RejectLoadPointsAction.ts":
    /*!**************************************************************!*\
  !*** ./src/modules/points/actions/RejectLoadPointsAction.ts ***!
  \**************************************************************/
    /*! exports provided: RejectLoadPointsAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectLoadPointsAction", function () {
            return RejectLoadPointsAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectLoadPointsAction {
            constructor() {
                this.type = RejectLoadPointsAction.type;
            }
        }

        RejectLoadPointsAction.type = '[Point] Load points rejected';


        /***/
    }),

    /***/
    "./src/modules/points/actions/RejectRemovePointAction.ts":
    /*!***************************************************************!*\
  !*** ./src/modules/points/actions/RejectRemovePointAction.ts ***!
  \***************************************************************/
    /*! exports provided: RejectRemovePointAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectRemovePointAction", function () {
            return RejectRemovePointAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectRemovePointAction {
            constructor() {
                this.type = RejectRemovePointAction.type;
            }
        }

        RejectRemovePointAction.type = '[Point] Remove rejected';


        /***/
    }),

    /***/
    "./src/modules/points/actions/RejectSavePointAction.ts":
    /*!*************************************************************!*\
  !*** ./src/modules/points/actions/RejectSavePointAction.ts ***!
  \*************************************************************/
    /*! exports provided: RejectSavePointAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectSavePointAction", function () {
            return RejectSavePointAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectSavePointAction {
            constructor() {
                this.type = RejectSavePointAction.type;
            }
        }

        RejectSavePointAction.type = '[Point] Save point rejected';


        /***/
    }),

    /***/
    "./src/modules/points/actions/RemovePointAction.ts":
    /*!*********************************************************!*\
  !*** ./src/modules/points/actions/RemovePointAction.ts ***!
  \*********************************************************/
    /*! exports provided: RemovePointAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RemovePointAction", function () {
            return RemovePointAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RemovePointAction {
            constructor(id) {
                this.id = id;
                this.type = RemovePointAction.type;
            }
        }

        RemovePointAction.type = '[Point] Remove';


        /***/
    }),

    /***/
    "./src/modules/points/actions/SavePointAction.ts":
    /*!*******************************************************!*\
  !*** ./src/modules/points/actions/SavePointAction.ts ***!
  \*******************************************************/
    /*! exports provided: SavePointAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SavePointAction", function () {
            return SavePointAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SavePointAction {
            constructor(point) {
                this.point = point;
                this.type = SavePointAction.type;
            }
        }

        SavePointAction.type = '[Point] Save point';


        /***/
    }),

    /***/
    "./src/modules/points/actions/SavePointImageFulFillAction.ts":
    /*!*******************************************************************!*\
  !*** ./src/modules/points/actions/SavePointImageFulFillAction.ts ***!
  \*******************************************************************/
    /*! exports provided: SavePointImageFulFillAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SavePointImageFulFillAction", function () {
            return SavePointImageFulFillAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SavePointImageFulFillAction {
            constructor(payload) {
                this.payload = payload;
                this.type = SavePointImageFulFillAction.type;
            }
        }

        SavePointImageFulFillAction.type = '[Point] Save point image fulfilled';


        /***/
    }),

    /***/
    "./src/modules/points/actions/SetPointsAction.ts":
    /*!*******************************************************!*\
  !*** ./src/modules/points/actions/SetPointsAction.ts ***!
  \*******************************************************/
    /*! exports provided: SetPointsAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SetPointsAction", function () {
            return SetPointsAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SetPointsAction {
            constructor(points) {
                this.points = points;
                this.type = SetPointsAction.type;
            }
        }

        SetPointsAction.type = '[Point] Set points';


        /***/
    }),

    /***/
    "./src/modules/points/actions/TryToRemovePointAction.ts":
    /*!**************************************************************!*\
  !*** ./src/modules/points/actions/TryToRemovePointAction.ts ***!
  \**************************************************************/
    /*! exports provided: TryToRemovePointAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TryToRemovePointAction", function () {
            return TryToRemovePointAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class TryToRemovePointAction {
            constructor(id) {
                this.id = id;
                this.type = TryToRemovePointAction.type;
            }
        }

        TryToRemovePointAction.type = '[Point] Try to remove';


        /***/
    }),

    /***/
    "./src/modules/points/components/add-point/add-point.component.ts":
    /*!************************************************************************!*\
  !*** ./src/modules/points/components/add-point/add-point.component.ts ***!
  \************************************************************************/
    /*! exports provided: AddPointComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddPointComponent", function () {
            return AddPointComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let AddPointComponent = class AddPointComponent {
            constructor() {
                this.changePointParameters = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleChangeName(value) {
                this.changePointParameters.emit(Object.assign({}, this.pointParameters, {name: value}));
            }

            handleChangeShortDescription(event) {
                const element = event.target;
                this.changePointParameters.emit(Object.assign({}, this.pointParameters, {shortDescription: element.value}));
            }

            handleChangeDescription(event) {
                const element = event.target;
                this.changePointParameters.emit(Object.assign({}, this.pointParameters, {description: element.value}));
            }

            handleChangeFile(file) {
                this.changePointParameters.emit(Object.assign({}, this.pointParameters, {imgFile: [file]}));
            }

            handleChangeLatitude(value) {
                this.changePointParameters.emit(Object.assign({}, this.pointParameters, {latitude: Number(value)}));
            }

            handleChangeLongitude(value) {
                this.changePointParameters.emit(Object.assign({}, this.pointParameters, {longitude: Number(value)}));
            }

            handleChangeOrderNum(value) {
                this.changePointParameters.emit(Object.assign({}, this.pointParameters, {orderNum: Number(value)}));
            }

            handleCreate() {
                this.create.emit();
            }

            get latitude() {
                return String(this.pointParameters.latitude);
            }

            get longitude() {
                return String(this.pointParameters.longitude);
            }

            get order() {
                return String(this.pointParameters.orderNum);
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], AddPointComponent.prototype, "pointParameters", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], AddPointComponent.prototype, "changePointParameters", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], AddPointComponent.prototype, "create", void 0);
        AddPointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-add-point',
                template: `
        <div class="grid">
            <div class="title">Create point</div>
            <skr-input
                class="name"
                [label]="'Name'"
                [value]="pointParameters.name"
                (onchange)="handleChangeName($event)"
            ></skr-input>
            <skr-textarea
                class="short-description"
                [label]="'Short description'"
                [value]="pointParameters.shortDescription"
                [rows]="5"
                (onchange)="handleChangeShortDescription($event)"
            ></skr-textarea>
            <skr-textarea
                class="description"
                [label]="'Description'"
                [value]="pointParameters.description"
                [rows]="5"
                (onchange)="handleChangeDescription($event)"
            ></skr-textarea>
            <skr-input
                class="latitude"
                label="Latitude"
                [value]="latitude"
                (onchange)="handleChangeLatitude($event)"
            ></skr-input>
            <skr-input
                class="longitude"
                label="Longitude"
                [value]="longitude"
                (onchange)="handleChangeLongitude($event)"
            ></skr-input>
            <skr-input
                class="order"
                label="Order"
                [value]="order"
                (onchange)="handleChangeOrderNum($event)"
            ></skr-input>
            <skr-file-upload
                class="uploader"
                (changeFile)="handleChangeFile($event)"
            ></skr-file-upload>
            <div class="actions">
                <skr-button type="accent" (onclick)="handleCreate()">
                    Create
                </skr-button>
            </div>
        </div>
    `,
                styles: ["\n            .grid {\n                display: grid;\n                grid-gap: 1rem;\n                grid-template-columns: 2fr 1fr 1fr 1fr;\n                grid-template-areas:\n                    'title . . .'\n                    'name name name uploader'\n                    'short-description short-description short-description uploader'\n                    'description description description uploader'\n                    'latitude longitude order .'\n                    'actions actions actions actions';\n                padding: 2rem;\n                border-bottom: 0.1rem solid var(--color-border);\n            }\n\n            .title {\n                grid-area: title;\n                font-weight: bold;\n            }\n\n            .name {\n                grid-area: name;\n            }\n\n            .short-description {\n                grid-area: short-description;\n            }\n\n            .description {\n                grid-area: description;\n            }\n\n            .latitude {\n                grid-area: latitude;\n            }\n\n            .longitude {\n                grid-area: longitude;\n            }\n\n            .order {\n                grid-area: order;\n            }\n\n            .uploader {\n                grid-area: uploader;\n            }\n\n            .actions {\n                grid-area: actions;\n            }\n        "]
            })
        ], AddPointComponent);


        /***/
    }),

    /***/
    "./src/modules/points/components/point-list-item/point-list-item.component.ts":
    /*!************************************************************************************!*\
  !*** ./src/modules/points/components/point-list-item/point-list-item.component.ts ***!
  \************************************************************************************/
    /*! exports provided: PointListItemComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PointListItemComponent", function () {
            return PointListItemComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let PointListItemComponent = class PointListItemComponent {
            constructor() {
                this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleRemove() {
                this.remove.emit();
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], PointListItemComponent.prototype, "point", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], PointListItemComponent.prototype, "remove", void 0);
        PointListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-point-list-item',
                template: `
        <div class="item">
            <div class="image-wrapper">
                <img class="image" [src]="point.imgUrlList[0]" />
            </div>
            <div class="content">
                <div class="title">{{ point.name }}</div>
                <div>Short description: {{ point.shortDescription }}</div>
                <div>Description: {{ point.description }}</div>
                <div class="coordinates">
                    <div>Latitude: {{ point.latitude }}</div>
                    <div>Longitude: {{ point.longitude }}</div>
                    <div>Order: {{ point.orderNum }}</div>
                </div>
                <div class="content-footer">
                    <div class="created-date">
                        Created: {{ point.createdDate | date: 'medium' }}
                    </div>
                </div>
            </div>
            <div class="actions">
                <skr-button type="accent" (onclick)="handleRemove()">
                    Remove
                </skr-button>
            </div>
        </div>
    `,
                styles: ["\n            .item {\n                display: grid;\n                grid-template-columns: auto 1fr auto;\n                grid-gap: 2rem;\n                padding: 2rem;\n                border-bottom: 1px solid var(--color-border);\n            }\n\n            .image {\n                height: 100px;\n                width: 100px;\n                background-color: var(--color-on-surface-secondary);\n            }\n\n            .content {\n                display: grid;\n                grid-gap: 1rem;\n                grid-template-rows: auto 1fr auto;\n            }\n\n            .title {\n                font-weight: bold;\n            }\n\n            .created-date {\n                font-size: 1.2rem;\n                color: var(--color-on-surface-secondary);\n            }\n\n            .actions {\n                display: grid;\n                align-items: end;\n            }\n\n            .content-footer {\n                display: grid;\n                grid-template-columns: 1fr auto;\n                grid-gap: 1rem;\n                align-items: center;\n            }\n\n            .coordinates {\n                display: grid;\n                grid-auto-flow: column;\n                justify-content: left;\n                grid-gap: 2rem;\n            }\n        "]
            })
        ], PointListItemComponent);


        /***/
    }),

    /***/
    "./src/modules/points/containers/add-point-container/add-point-container.component.ts":
    /*!********************************************************************************************!*\
  !*** ./src/modules/points/containers/add-point-container/add-point-container.component.ts ***!
  \********************************************************************************************/
    /*! exports provided: AddPointContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddPointContainerComponent", function () {
            return AddPointContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _actions_SavePointAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/SavePointAction */ "./src/modules/points/actions/SavePointAction.ts");


        let AddPointContainerComponent = class AddPointContainerComponent {
            constructor(store) {
                this.store = store;
                this.addPointParameters = {
                    adminId: 1,
                    description: '',
                    latitude: 0,
                    longitude: 0,
                    name: '',
                    imgFile: [],
                    orderNum: 0,
                    shortDescription: '',
                };
            }

            handleChangePointParameters(value) {
                this.addPointParameters = value;
            }

            handleCreate() {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.store.dispatch(new _actions_SavePointAction__WEBPACK_IMPORTED_MODULE_3__["SavePointAction"](this.addPointParameters));
                });
            }
        };
        AddPointContainerComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]}
        ];
        AddPointContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-add-point-container',
                template: `
        <skr-add-point
            [pointParameters]="addPointParameters"
            (changePointParameters)="handleChangePointParameters($event)"
            (create)="handleCreate()"
        ></skr-add-point>
    `,
            })
        ], AddPointContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/points/containers/point-list-container/point-list-container.component.ts":
    /*!**********************************************************************************************!*\
  !*** ./src/modules/points/containers/point-list-container/point-list-container.component.ts ***!
  \**********************************************************************************************/
    /*! exports provided: PointListContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PointListContainerComponent", function () {
            return PointListContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _selectors_getPoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/getPoints */ "./src/modules/points/selectors/getPoints.ts");
        /* harmony import */
        var _actions_LoadPointsAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/LoadPointsAction */ "./src/modules/points/actions/LoadPointsAction.ts");
        /* harmony import */
        var _actions_TryToRemovePointAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/TryToRemovePointAction */ "./src/modules/points/actions/TryToRemovePointAction.ts");


        let PointListContainerComponent = class PointListContainerComponent {
            constructor(store) {
                this.store = store;
                this.points$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_getPoints__WEBPACK_IMPORTED_MODULE_3__["getPoints"]));
                this.store.dispatch(new _actions_LoadPointsAction__WEBPACK_IMPORTED_MODULE_4__["LoadPointsAction"]());
            }

            handleRemove(id) {
                this.store.dispatch(new _actions_TryToRemovePointAction__WEBPACK_IMPORTED_MODULE_5__["TryToRemovePointAction"](id));
            }
        };
        PointListContainerComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]}
        ];
        PointListContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-point-list-container',
                template: `
        <skr-point-list-item
            *ngFor="let point of points$ | async"
            [point]="point"
            (remove)="handleRemove(point.id)"
        ></skr-point-list-item>
    `,
            })
        ], PointListContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/points/effects/point.effects.ts":
    /*!*****************************************************!*\
  !*** ./src/modules/points/effects/point.effects.ts ***!
  \*****************************************************/
    /*! exports provided: PointEffects */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PointEffects", function () {
            return PointEffects;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
        /* harmony import */
        var _actions_LoadPointsAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/LoadPointsAction */ "./src/modules/points/actions/LoadPointsAction.ts");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
        /* harmony import */
        var _api_services_api_point_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/services/api-point.service */ "./src/modules/api/services/api-point.service.ts");
        /* harmony import */
        var _actions_SetPointsAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/SetPointsAction */ "./src/modules/points/actions/SetPointsAction.ts");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
        /* harmony import */
        var _notification_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../notification/services/notification.service */ "./src/modules/notification/services/notification.service.ts");
        /* harmony import */
        var _actions_TryToRemovePointAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/TryToRemovePointAction */ "./src/modules/points/actions/TryToRemovePointAction.ts");
        /* harmony import */
        var _actions_RemovePointAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/RemovePointAction */ "./src/modules/points/actions/RemovePointAction.ts");
        /* harmony import */
        var _actions_RejectLoadPointsAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/RejectLoadPointsAction */ "./src/modules/points/actions/RejectLoadPointsAction.ts");
        /* harmony import */
        var _actions_RejectRemovePointAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/RejectRemovePointAction */ "./src/modules/points/actions/RejectRemovePointAction.ts");
        /* harmony import */
        var _actions_AddPointAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/AddPointAction */ "./src/modules/points/actions/AddPointAction.ts");
        /* harmony import */
        var _actions_SavePointAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions/SavePointAction */ "./src/modules/points/actions/SavePointAction.ts");
        /* harmony import */
        var _actions_RejectSavePointAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/RejectSavePointAction */ "./src/modules/points/actions/RejectSavePointAction.ts");
        /* harmony import */
        var _api_services_api_image_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../api/services/api-image.service */ "./src/modules/api/services/api-image.service.ts");
        /* harmony import */
        var _actions_SavePointImageFulFillAction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/SavePointImageFulFillAction */ "./src/modules/points/actions/SavePointImageFulFillAction.ts");


        let PointEffects = class PointEffects {
            constructor(actions$, apiEndpointPointService, apiEndpointImageService, notificationService) {
                this.actions$ = actions$;
                this.apiEndpointPointService = apiEndpointPointService;
                this.apiEndpointImageService = apiEndpointImageService;
                this.notificationService = notificationService;
                this.loadPoints$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_LoadPointsAction__WEBPACK_IMPORTED_MODULE_3__["LoadPointsAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() = > this.apiEndpointPointService.getPoints().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(points = > new _actions_SetPointsAction__WEBPACK_IMPORTED_MODULE_6__["SetPointsAction"](points)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() = > {
                    this.notificationService.error('Failed to load points');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_RejectLoadPointsAction__WEBPACK_IMPORTED_MODULE_11__["RejectLoadPointsAction"]());
            })))))
                this.saveImage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_SavePointAction__WEBPACK_IMPORTED_MODULE_14__["SavePointAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action = > this.apiEndpointImageService
                    .uploadImage(action.point.imgFile)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(imageUrl = > new _actions_SavePointImageFulFillAction__WEBPACK_IMPORTED_MODULE_17__["SavePointImageFulFillAction"]({
                        pointParameters: action.point,
                        imageUrl,
                    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() = > {
                    this.notificationService.error('Failed to upload image');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_RejectSavePointAction__WEBPACK_IMPORTED_MODULE_15__["RejectSavePointAction"]());
            })))))
                this.savePoint$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_SavePointImageFulFillAction__WEBPACK_IMPORTED_MODULE_17__["SavePointImageFulFillAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action = > this.apiEndpointPointService
                    .save(action.payload.pointParameters, action.payload.imageUrl)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(point = > new _actions_AddPointAction__WEBPACK_IMPORTED_MODULE_13__["AddPointAction"](point)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() = > {
                    this.notificationService.success('Failed to add point');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_RejectSavePointAction__WEBPACK_IMPORTED_MODULE_15__["RejectSavePointAction"]());
            })))))
                this.removePoint$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_TryToRemovePointAction__WEBPACK_IMPORTED_MODULE_9__["TryToRemovePointAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action = > this.apiEndpointPointService.remove(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() = > new _actions_RemovePointAction__WEBPACK_IMPORTED_MODULE_10__["RemovePointAction"](action.id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() = > {
                    this.notificationService.error('Failed to remove point');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_RejectRemovePointAction__WEBPACK_IMPORTED_MODULE_12__["RejectRemovePointAction"]());
            })))))
            }
        };
        PointEffects.ctorParameters = () =;
    >
        [
            {type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]},
            {type: _api_services_api_point_service__WEBPACK_IMPORTED_MODULE_5__["ApiPointService"]},
            {type: _api_services_api_image_service__WEBPACK_IMPORTED_MODULE_16__["ApiImageService"]},
            {type: _notification_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]}
        ];
        PointEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        ], PointEffects);


        /***/
    }),

    /***/
    "./src/modules/points/points.module.ts":
    /*!*********************************************!*\
  !*** ./src/modules/points/points.module.ts ***!
  \*********************************************/
    /*! exports provided: PointsModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PointsModule", function () {
            return PointsModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
        /* harmony import */
        var _containers_point_list_container_point_list_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/point-list-container/point-list-container.component */ "./src/modules/points/containers/point-list-container/point-list-container.component.ts");
        /* harmony import */
        var _components_point_list_item_point_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/point-list-item/point-list-item.component */ "./src/modules/points/components/point-list-item/point-list-item.component.ts");
        /* harmony import */
        var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/modules/ui-components/ui-components.module.ts");
        /* harmony import */
        var _components_add_point_add_point_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-point/add-point.component */ "./src/modules/points/components/add-point/add-point.component.ts");
        /* harmony import */
        var _containers_add_point_container_add_point_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/add-point-container/add-point-container.component */ "./src/modules/points/containers/add-point-container/add-point-container.component.ts");
        /* harmony import */
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
        /* harmony import */
        var _effects_point_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/point.effects */ "./src/modules/points/effects/point.effects.ts");


        let PointsModule = class PointsModule {
        };
        PointsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                declarations: [
                    _containers_point_list_container_point_list_container_component__WEBPACK_IMPORTED_MODULE_3__["PointListContainerComponent"],
                    _components_point_list_item_point_list_item_component__WEBPACK_IMPORTED_MODULE_4__["PointListItemComponent"],
                    _components_add_point_add_point_component__WEBPACK_IMPORTED_MODULE_6__["AddPointComponent"],
                    _containers_add_point_container_add_point_container_component__WEBPACK_IMPORTED_MODULE_7__["AddPointContainerComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_5__["UiComponentsModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_effects_point_effects__WEBPACK_IMPORTED_MODULE_9__["PointEffects"]]),
                ],
                exports: [_containers_point_list_container_point_list_container_component__WEBPACK_IMPORTED_MODULE_3__["PointListContainerComponent"], _containers_add_point_container_add_point_container_component__WEBPACK_IMPORTED_MODULE_7__["AddPointContainerComponent"]],
            })
        ], PointsModule);


        /***/
    }),

    /***/
    "./src/modules/points/reducers/pointReducer.ts":
    /*!*****************************************************!*\
  !*** ./src/modules/points/reducers/pointReducer.ts ***!
  \*****************************************************/
    /*! exports provided: pointReducer */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "pointReducer", function () {
            return pointReducer;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _actions_RemovePointAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/RemovePointAction */ "./src/modules/points/actions/RemovePointAction.ts");
        /* harmony import */
        var _app_common_initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/common/initialState */ "./src/modules/app/common/initialState.ts");
        /* harmony import */
        var _actions_SetPointsAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/SetPointsAction */ "./src/modules/points/actions/SetPointsAction.ts");
        /* harmony import */
        var _actions_AddPointAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/AddPointAction */ "./src/modules/points/actions/AddPointAction.ts");


        function pointReducer(state = _app_common_initialState__WEBPACK_IMPORTED_MODULE_2__["initialState"], action) {
            switch (action.type) {
                case _actions_SetPointsAction__WEBPACK_IMPORTED_MODULE_3__["SetPointsAction"].type:
                    return Object.assign({}, state, {points: action.points});
                case _actions_AddPointAction__WEBPACK_IMPORTED_MODULE_4__["AddPointAction"].type:
                    return Object.assign({}, state, {points: [...state.points, action.point;
                ]
            }
        )
        case
            _actions_RemovePointAction__WEBPACK_IMPORTED_MODULE_1__["RemovePointAction"].type;
        :
            return Object.assign({}, state, {points: state.points.filter(point = > point.id !== action.id)
        })
        default:
            return state;
        }
        }


        /***/
    }),

    /***/
    "./src/modules/points/selectors/getPoints.ts":
    /*!***************************************************!*\
  !*** ./src/modules/points/selectors/getPoints.ts ***!
  \***************************************************/
    /*! exports provided: getPoints */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getPoints", function () {
            return getPoints;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/selectors/getAppState */ "./src/modules/app/selectors/getAppState.ts");


        const getPoints = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__["getAppState"], state = > state.points;
    )
        /***/
    }),

    /***/
    "./src/modules/travel/actions/AddTravelAction.ts":
    /*!*******************************************************!*\
  !*** ./src/modules/travel/actions/AddTravelAction.ts ***!
  \*******************************************************/
    /*! exports provided: AddTravelAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddTravelAction", function () {
            return AddTravelAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class AddTravelAction {
            constructor(travel) {
                this.travel = travel;
                this.type = AddTravelAction.type;
            }
        }

        AddTravelAction.type = '[Travel] Add travel';


        /***/
    }),

    /***/
    "./src/modules/travel/actions/LoadTravelsAction.ts":
    /*!*********************************************************!*\
  !*** ./src/modules/travel/actions/LoadTravelsAction.ts ***!
  \*********************************************************/
    /*! exports provided: LoadTravelsAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LoadTravelsAction", function () {
            return LoadTravelsAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class LoadTravelsAction {
            constructor() {
                this.type = LoadTravelsAction.type;
            }
        }

        LoadTravelsAction.type = '[Travel] Load travels';


        /***/
    }),

    /***/
    "./src/modules/travel/actions/RejectLoadTravelsAction.ts":
    /*!***************************************************************!*\
  !*** ./src/modules/travel/actions/RejectLoadTravelsAction.ts ***!
  \***************************************************************/
    /*! exports provided: RejectLoadTravelsAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectLoadTravelsAction", function () {
            return RejectLoadTravelsAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectLoadTravelsAction {
            constructor() {
                this.type = RejectLoadTravelsAction.type;
            }
        }

        RejectLoadTravelsAction.type = '[Point] Load travels rejected';


        /***/
    }),

    /***/
    "./src/modules/travel/actions/RejectRemoveTravel.ts":
    /*!**********************************************************!*\
  !*** ./src/modules/travel/actions/RejectRemoveTravel.ts ***!
  \**********************************************************/
    /*! exports provided: RejectRemoveTravel */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectRemoveTravel", function () {
            return RejectRemoveTravel;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectRemoveTravel {
            constructor() {
                this.type = RejectRemoveTravel.type;
            }
        }

        RejectRemoveTravel.type = '[Travel] Remove rejected';


        /***/
    }),

    /***/
    "./src/modules/travel/actions/RejectSaveTravelAction.ts":
    /*!**************************************************************!*\
  !*** ./src/modules/travel/actions/RejectSaveTravelAction.ts ***!
  \**************************************************************/
    /*! exports provided: RejectSaveTravelAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RejectSaveTravelAction", function () {
            return RejectSaveTravelAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RejectSaveTravelAction {
            constructor() {
                this.type = RejectSaveTravelAction.type;
            }
        }

        RejectSaveTravelAction.type = '[Travel] Save travel rejected';


        /***/
    }),

    /***/
    "./src/modules/travel/actions/RemoveTravelAction.ts":
    /*!**********************************************************!*\
  !*** ./src/modules/travel/actions/RemoveTravelAction.ts ***!
  \**********************************************************/
    /*! exports provided: RemoveTravelAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RemoveTravelAction", function () {
            return RemoveTravelAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class RemoveTravelAction {
            constructor(id) {
                this.id = id;
                this.type = RemoveTravelAction.type;
            }
        }

        RemoveTravelAction.type = '[Travel] Remove item';


        /***/
    }),

    /***/
    "./src/modules/travel/actions/SaveTravelAction.ts":
    /*!********************************************************!*\
  !*** ./src/modules/travel/actions/SaveTravelAction.ts ***!
  \********************************************************/
    /*! exports provided: SaveTravelAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SaveTravelAction", function () {
            return SaveTravelAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SaveTravelAction {
            constructor(parameters) {
                this.parameters = parameters;
                this.type = SaveTravelAction.type;
            }
        }

        SaveTravelAction.type = '[Travel] Save travel';


        /***/
    }),

    /***/
    "./src/modules/travel/actions/SaveTravelImageFulFilledAction.ts":
    /*!**********************************************************************!*\
  !*** ./src/modules/travel/actions/SaveTravelImageFulFilledAction.ts ***!
  \**********************************************************************/
    /*! exports provided: SaveTravelImageFulFilledAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SaveTravelImageFulFilledAction", function () {
            return SaveTravelImageFulFilledAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SaveTravelImageFulFilledAction {
            constructor(payload) {
                this.payload = payload;
                this.type = SaveTravelImageFulFilledAction.type;
            }
        }

        SaveTravelImageFulFilledAction.type = '[Travel] Save image fulfilled';


        /***/
    }),

    /***/
    "./src/modules/travel/actions/SetTravelsAction.ts":
    /*!********************************************************!*\
  !*** ./src/modules/travel/actions/SetTravelsAction.ts ***!
  \********************************************************/
    /*! exports provided: SetTravelsAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SetTravelsAction", function () {
            return SetTravelsAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class SetTravelsAction {
            constructor(travels) {
                this.travels = travels;
                this.type = SetTravelsAction.type;
            }
        }

        SetTravelsAction.type = '[Travel] Set travels';


        /***/
    }),

    /***/
    "./src/modules/travel/actions/TryToRemoveTravelAction.ts":
    /*!***************************************************************!*\
  !*** ./src/modules/travel/actions/TryToRemoveTravelAction.ts ***!
  \***************************************************************/
    /*! exports provided: TryToRemoveTravelAction */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TryToRemoveTravelAction", function () {
            return TryToRemoveTravelAction;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class TryToRemoveTravelAction {
            constructor(id) {
                this.id = id;
                this.type = TryToRemoveTravelAction.type;
            }
        }

        TryToRemoveTravelAction.type = '[Travel] Try ty remove';


        /***/
    }),

    /***/
    "./src/modules/travel/components/add-travel/add-travel.component.ts":
    /*!**************************************************************************!*\
  !*** ./src/modules/travel/components/add-travel/add-travel.component.ts ***!
  \**************************************************************************/
    /*! exports provided: AddTravelComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddTravelComponent", function () {
            return AddTravelComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let AddTravelComponent = class AddTravelComponent {
            constructor() {
                this.changeTravelParameters = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.categoryOptions = [];
            }

            ngOnChanges(changes) {
                if (changes.categories) {
                    this.categoryOptions = this.categories.map(category = > ({
                        caption: category.name,
                        value: String(category.id),
                    });
                )
                }
            }

            handleChangeName(value) {
                this.changeTravelParameters.emit(Object.assign({}, this.addTravelParameters, {name: value}));
            }

            handleChangeDescription(event) {
                const element = event.target;
                this.changeTravelParameters.emit(Object.assign({}, this.addTravelParameters, {description: element.value}));
            }

            handleChangeCategory(value) {
                this.changeTravelParameters.emit(Object.assign({}, this.addTravelParameters, {categoryId: value}));
            }

            handleChangeFile(file) {
                this.changeTravelParameters.emit(Object.assign({}, this.addTravelParameters, {imgUrl: [file]}));
            }

            handleCreate() {
                this.create.emit();
            }

            get category() {
                return String(this.addTravelParameters.categoryId);
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], AddTravelComponent.prototype, "addTravelParameters", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], AddTravelComponent.prototype, "categories", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], AddTravelComponent.prototype, "changeTravelParameters", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], AddTravelComponent.prototype, "create", void 0);
        AddTravelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-add-travel',
                template: `
        <div class="grid">
            <div class="title">Create travel</div>
            <skr-input
                class="name"
                [label]="'Name'"
                [value]="addTravelParameters.name"
                (onchange)="handleChangeName($event)"
            ></skr-input>
            <skr-textarea
                class="description"
                [label]="'Description'"
                [value]="addTravelParameters.description"
                [rows]="5"
                (onchange)="handleChangeDescription($event)"
            ></skr-textarea>
            <skr-select
                class="category"
                [value]="category"
                [options]="categoryOptions"
                [label]="'Category'"
                (onselect)="handleChangeCategory($event)"
            ></skr-select>
            <skr-file-upload
                class="uploader"
                (changeFile)="handleChangeFile($event)"
            ></skr-file-upload>
            <div class="actions">
                <skr-button type="accent" (onclick)="handleCreate()">
                    Create
                </skr-button>
            </div>
        </div>
    `,
                styles: ["\n            .grid {\n                display: grid;\n                grid-gap: 1rem;\n                grid-template-columns: 2fr 1fr;\n                grid-template-areas:\n                    'title .'\n                    'name uploader'\n                    'description uploader'\n                    'category uploader'\n                    'actions actions';\n                padding: 2rem;\n                border-bottom: 0.1rem solid var(--color-border);\n            }\n\n            .title {\n                grid-area: title;\n                font-weight: bold;\n            }\n\n            .name {\n                grid-area: name;\n            }\n\n            .description {\n                grid-area: description;\n            }\n\n            .category {\n                grid-area: category;\n            }\n\n            .uploader {\n                grid-area: uploader;\n            }\n\n            .actions {\n                grid-area: actions;\n            }\n        "]
            })
        ], AddTravelComponent);


        /***/
    }),

    /***/
    "./src/modules/travel/components/travel-list-item/travel-list-item.component.ts":
    /*!**************************************************************************************!*\
  !*** ./src/modules/travel/components/travel-list-item/travel-list-item.component.ts ***!
  \**************************************************************************************/
    /*! exports provided: TravelListItemComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TravelListItemComponent", function () {
            return TravelListItemComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let TravelListItemComponent = class TravelListItemComponent {
            constructor() {
                this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleRemove() {
                this.remove.emit();
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TravelListItemComponent.prototype, "travelItem", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], TravelListItemComponent.prototype, "remove", void 0);
        TravelListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-travel-list-item',
                template: `
        <div class="item">
            <div class="image-wrapper">
                <img class="image" [src]="travelItem.imgUrl" />
            </div>
            <div class="content">
                <div class="title">{{ travelItem.name }}</div>
                <div>Description: {{ travelItem.description }}</div>
                <div class="content-footer">
                    <div>Category: {{ travelItem.categoryName }}</div>
                    <div class="created-date">
                        Created: {{ travelItem.createdDate | date: 'medium' }}
                    </div>
                </div>
            </div>
            <div class="actions">
                <skr-button type="accent" (onclick)="handleRemove()">
                    Remove
                </skr-button>
            </div>
        </div>
    `,
                styles: ["\n            .item {\n                display: grid;\n                grid-template-columns: auto 1fr auto;\n                grid-gap: 2rem;\n                padding: 2rem;\n                border-bottom: 1px solid var(--color-border);\n            }\n\n            .image {\n                height: 100px;\n                width: 100px;\n                background-color: var(--color-on-surface-secondary);\n            }\n\n            .content {\n                display: grid;\n                grid-gap: 1rem;\n                grid-template-rows: auto 1fr auto;\n            }\n\n            .title {\n                font-weight: bold;\n            }\n\n            .created-date {\n                font-size: 1.2rem;\n                color: var(--color-on-surface-secondary);\n            }\n\n            .actions {\n                display: grid;\n                align-items: end;\n            }\n\n            .content-footer {\n                display: grid;\n                grid-template-columns: 1fr auto;\n                grid-gap: 1rem;\n                align-items: center;\n            }\n        "]
            })
        ], TravelListItemComponent);


        /***/
    }),

    /***/
    "./src/modules/travel/containers/add-travel-container/add-travel-container.component.ts":
    /*!**********************************************************************************************!*\
  !*** ./src/modules/travel/containers/add-travel-container/add-travel-container.component.ts ***!
  \**********************************************************************************************/
    /*! exports provided: AddTravelContainerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddTravelContainerComponent", function () {
            return AddTravelContainerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
        /* harmony import */
        var _category_selectors_getCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../category/selectors/getCategories */ "./src/modules/category/selectors/getCategories.ts");
        /* harmony import */
        var _actions_SaveTravelAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/SaveTravelAction */ "./src/modules/travel/actions/SaveTravelAction.ts");


        let AddTravelContainerComponent = class AddTravelContainerComponent {
            constructor(store) {
                this.store = store;
                this.categorySubscription = this.store
                    .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_category_selectors_getCategories__WEBPACK_IMPORTED_MODULE_4__["getCategories"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(categories = > {
                        this.categories = categories;
                this.addTravelParameters = {
                    name: '',
                    imgUrl: [],
                    description: '',
                    categoryId: String(categories[0].id),
                };
            }))
            .
                subscribe();
            }

            handleChangeTravelParameters(value) {
                this.addTravelParameters = value;
            }

            handleCreate() {
                this.store.dispatch(new _actions_SaveTravelAction__WEBPACK_IMPORTED_MODULE_5__["SaveTravelAction"](this.addTravelParameters));
            }

            ngOnDestroy() {
                this.categorySubscription.unsubscribe();
            }
        };
        AddTravelContainerComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]}
        ];
        AddTravelContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-add-travel-container',
                template: `
        <skr-add-travel
            [addTravelParameters]="addTravelParameters"
            [categories]="categories"
            (changeTravelParameters)="handleChangeTravelParameters($event)"
            (create)="handleCreate()"
        ></skr-add-travel>
    `,
            })
        ], AddTravelContainerComponent);


        /***/
    }),

    /***/
    "./src/modules/travel/containers/travel-list-containers/travel-list-containers.component.ts":
    /*!**************************************************************************************************!*\
  !*** ./src/modules/travel/containers/travel-list-containers/travel-list-containers.component.ts ***!
  \**************************************************************************************************/
    /*! exports provided: TravelListContainersComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TravelListContainersComponent", function () {
            return TravelListContainersComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _selectors_getTravels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors/getTravels */ "./src/modules/travel/selectors/getTravels.ts");
        /* harmony import */
        var _actions_TryToRemoveTravelAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/TryToRemoveTravelAction */ "./src/modules/travel/actions/TryToRemoveTravelAction.ts");
        /* harmony import */
        var _actions_LoadTravelsAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/LoadTravelsAction */ "./src/modules/travel/actions/LoadTravelsAction.ts");
        /* harmony import */
        var _category_actions_LoadCategoriesAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../category/actions/LoadCategoriesAction */ "./src/modules/category/actions/LoadCategoriesAction.ts");


        let TravelListContainersComponent = class TravelListContainersComponent {
            constructor(store) {
                this.store = store;
                this.travelList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_getTravels__WEBPACK_IMPORTED_MODULE_3__["getTravels"]));
            }

            ngOnInit() {
                this.store.dispatch(new _category_actions_LoadCategoriesAction__WEBPACK_IMPORTED_MODULE_6__["LoadCategoriesAction"]());
                this.store.dispatch(new _actions_LoadTravelsAction__WEBPACK_IMPORTED_MODULE_5__["LoadTravelsAction"]());
            }

            handleRemove(value) {
                this.store.dispatch(new _actions_TryToRemoveTravelAction__WEBPACK_IMPORTED_MODULE_4__["TryToRemoveTravelAction"](value));
            }
        };
        TravelListContainersComponent.ctorParameters = () =;
    >
        [
            {type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]}
        ];
        TravelListContainersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-travel-list-containers',
                template: `
        <skr-travel-list-item
            *ngFor="let travelItem of travelList$ | async"
            [travelItem]="travelItem"
            (remove)="handleRemove(travelItem.id)"
        ></skr-travel-list-item>
    `,
            })
        ], TravelListContainersComponent);


        /***/
    }),

    /***/
    "./src/modules/travel/effects/travel.effects.ts":
    /*!******************************************************!*\
  !*** ./src/modules/travel/effects/travel.effects.ts ***!
  \******************************************************/
    /*! exports provided: TravelEffects */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TravelEffects", function () {
            return TravelEffects;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
        /* harmony import */
        var _api_services_api_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/services/api-travel.service */ "./src/modules/api/services/api-travel.service.ts");
        /* harmony import */
        var _actions_LoadTravelsAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/LoadTravelsAction */ "./src/modules/travel/actions/LoadTravelsAction.ts");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
        /* harmony import */
        var _actions_SetTravelsAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/SetTravelsAction */ "./src/modules/travel/actions/SetTravelsAction.ts");
        /* harmony import */
        var _notification_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../notification/services/notification.service */ "./src/modules/notification/services/notification.service.ts");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
        /* harmony import */
        var _actions_RejectLoadTravelsAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/RejectLoadTravelsAction */ "./src/modules/travel/actions/RejectLoadTravelsAction.ts");
        /* harmony import */
        var _actions_TryToRemoveTravelAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/TryToRemoveTravelAction */ "./src/modules/travel/actions/TryToRemoveTravelAction.ts");
        /* harmony import */
        var _actions_RemoveTravelAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/RemoveTravelAction */ "./src/modules/travel/actions/RemoveTravelAction.ts");
        /* harmony import */
        var _actions_RejectRemoveTravel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/RejectRemoveTravel */ "./src/modules/travel/actions/RejectRemoveTravel.ts");
        /* harmony import */
        var _actions_SaveTravelAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/SaveTravelAction */ "./src/modules/travel/actions/SaveTravelAction.ts");
        /* harmony import */
        var _actions_RejectSaveTravelAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions/RejectSaveTravelAction */ "./src/modules/travel/actions/RejectSaveTravelAction.ts");
        /* harmony import */
        var _actions_AddTravelAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/AddTravelAction */ "./src/modules/travel/actions/AddTravelAction.ts");
        /* harmony import */
        var _actions_SaveTravelImageFulFilledAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/SaveTravelImageFulFilledAction */ "./src/modules/travel/actions/SaveTravelImageFulFilledAction.ts");
        /* harmony import */
        var _api_services_api_image_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../api/services/api-image.service */ "./src/modules/api/services/api-image.service.ts");


        let TravelEffects = class TravelEffects {
            constructor(actions$, apiTravelEndpointService, apiImageEndpointService, notificationService) {
                this.actions$ = actions$;
                this.apiTravelEndpointService = apiTravelEndpointService;
                this.apiImageEndpointService = apiImageEndpointService;
                this.notificationService = notificationService;
                this.loadTravels$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_LoadTravelsAction__WEBPACK_IMPORTED_MODULE_4__["LoadTravelsAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() = > this.apiTravelEndpointService.getTravels().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(travels = > new _actions_SetTravelsAction__WEBPACK_IMPORTED_MODULE_6__["SetTravelsAction"](travels)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() = > {
                    this.notificationService.error('Failed to load travels');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(new _actions_RejectLoadTravelsAction__WEBPACK_IMPORTED_MODULE_9__["RejectLoadTravelsAction"]());
            })))))
                this.removeTravel$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_TryToRemoveTravelAction__WEBPACK_IMPORTED_MODULE_10__["TryToRemoveTravelAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action = > this.apiTravelEndpointService.remove(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() = > new _actions_RemoveTravelAction__WEBPACK_IMPORTED_MODULE_11__["RemoveTravelAction"](action.id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() = > {
                    this.notificationService.error('Failed to remove travel');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(new _actions_RejectRemoveTravel__WEBPACK_IMPORTED_MODULE_12__["RejectRemoveTravel"]());
            })))))
                this.saveImage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_SaveTravelImageFulFilledAction__WEBPACK_IMPORTED_MODULE_16__["SaveTravelImageFulFilledAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action = > this.apiTravelEndpointService
                    .save(action.payload.travelParameters, action.payload.imageUrl)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(travel = > {
                        this.notificationService.success('Travel successfully added');
                return new _actions_AddTravelAction__WEBPACK_IMPORTED_MODULE_15__["AddTravelAction"](travel);
            }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() = > {
                    this.notificationService.error('Failed to save travel');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(new _actions_RejectSaveTravelAction__WEBPACK_IMPORTED_MODULE_14__["RejectSaveTravelAction"]());
            })))))
                this.saveTravel$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() = > this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_SaveTravelAction__WEBPACK_IMPORTED_MODULE_13__["SaveTravelAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action = > this.apiImageEndpointService
                    .uploadImage(action.parameters.imgUrl)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(url = > new _actions_SaveTravelImageFulFilledAction__WEBPACK_IMPORTED_MODULE_16__["SaveTravelImageFulFilledAction"]({
                        travelParameters: action.parameters,
                        imageUrl: url,
                    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() = > {
                    this.notificationService.error('Failed to remove point');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(new _actions_RejectSaveTravelAction__WEBPACK_IMPORTED_MODULE_14__["RejectSaveTravelAction"]());
            })))))
            }
        };
        TravelEffects.ctorParameters = () =;
    >
        [
            {type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]},
            {type: _api_services_api_travel_service__WEBPACK_IMPORTED_MODULE_3__["ApiTravelService"]},
            {type: _api_services_api_image_service__WEBPACK_IMPORTED_MODULE_17__["ApiImageService"]},
            {type: _notification_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]}
        ];
        TravelEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        ], TravelEffects);

        class TravelEffectsImpl extends TravelEffects {
        }


        /***/
    }),

    /***/
    "./src/modules/travel/reducers/traverlReducer.ts":
    /*!*******************************************************!*\
  !*** ./src/modules/travel/reducers/traverlReducer.ts ***!
  \*******************************************************/
    /*! exports provided: travelReducer */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "travelReducer", function () {
            return travelReducer;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _app_common_initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/common/initialState */ "./src/modules/app/common/initialState.ts");
        /* harmony import */
        var _actions_RemoveTravelAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/RemoveTravelAction */ "./src/modules/travel/actions/RemoveTravelAction.ts");
        /* harmony import */
        var _actions_SetTravelsAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/SetTravelsAction */ "./src/modules/travel/actions/SetTravelsAction.ts");
        /* harmony import */
        var _actions_AddTravelAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/AddTravelAction */ "./src/modules/travel/actions/AddTravelAction.ts");


        function travelReducer(state = _app_common_initialState__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
            switch (action.type) {
                case _actions_SetTravelsAction__WEBPACK_IMPORTED_MODULE_3__["SetTravelsAction"].type: {
                    return Object.assign({}, state, {travels: action.travels});
                }
                case _actions_AddTravelAction__WEBPACK_IMPORTED_MODULE_4__["AddTravelAction"].type: {
                    return Object.assign({}, state, {travels: [...state.travels, action.travel;
                ]
                })
                }
                case _actions_RemoveTravelAction__WEBPACK_IMPORTED_MODULE_2__["RemoveTravelAction"].type: {
                    return Object.assign({}, state, {travels: state.travels.filter(travel = > travel.id !== action.id)
                })
                }
                default:
                    return state;
            }
        }


        /***/
    }),

    /***/
    "./src/modules/travel/selectors/getTravels.ts":
    /*!****************************************************!*\
  !*** ./src/modules/travel/selectors/getTravels.ts ***!
  \****************************************************/
    /*! exports provided: getTravels */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getTravels", function () {
            return getTravels;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
        /* harmony import */
        var _app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/selectors/getAppState */ "./src/modules/app/selectors/getAppState.ts");


        const getTravels = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_app_selectors_getAppState__WEBPACK_IMPORTED_MODULE_2__["getAppState"], state = > state.travels;
    )
        /***/
    }),

    /***/
    "./src/modules/travel/travel.module.ts":
    /*!*********************************************!*\
  !*** ./src/modules/travel/travel.module.ts ***!
  \*********************************************/
    /*! exports provided: TravelModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TravelModule", function () {
            return TravelModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
        /* harmony import */
        var _containers_travel_list_containers_travel_list_containers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/travel-list-containers/travel-list-containers.component */ "./src/modules/travel/containers/travel-list-containers/travel-list-containers.component.ts");
        /* harmony import */
        var _components_travel_list_item_travel_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/travel-list-item/travel-list-item.component */ "./src/modules/travel/components/travel-list-item/travel-list-item.component.ts");
        /* harmony import */
        var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/modules/ui-components/ui-components.module.ts");
        /* harmony import */
        var _containers_add_travel_container_add_travel_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/add-travel-container/add-travel-container.component */ "./src/modules/travel/containers/add-travel-container/add-travel-container.component.ts");
        /* harmony import */
        var _components_add_travel_add_travel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-travel/add-travel.component */ "./src/modules/travel/components/add-travel/add-travel.component.ts");
        /* harmony import */
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
        /* harmony import */
        var _effects_travel_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/travel.effects */ "./src/modules/travel/effects/travel.effects.ts");


        let TravelModule = class TravelModule {
        };
        TravelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                declarations: [
                    _containers_travel_list_containers_travel_list_containers_component__WEBPACK_IMPORTED_MODULE_3__["TravelListContainersComponent"],
                    _components_travel_list_item_travel_list_item_component__WEBPACK_IMPORTED_MODULE_4__["TravelListItemComponent"],
                    _containers_add_travel_container_add_travel_container_component__WEBPACK_IMPORTED_MODULE_6__["AddTravelContainerComponent"],
                    _components_add_travel_add_travel_component__WEBPACK_IMPORTED_MODULE_7__["AddTravelComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_5__["UiComponentsModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_effects_travel_effects__WEBPACK_IMPORTED_MODULE_9__["TravelEffects"]]),
                ],
                exports: [_containers_travel_list_containers_travel_list_containers_component__WEBPACK_IMPORTED_MODULE_3__["TravelListContainersComponent"], _containers_add_travel_container_add_travel_container_component__WEBPACK_IMPORTED_MODULE_6__["AddTravelContainerComponent"]],
            })
        ], TravelModule);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/block-header/block-header.component.ts":
    /*!*************************************************************************************!*\
  !*** ./src/modules/ui-components/components/block-header/block-header.component.ts ***!
  \*************************************************************************************/
    /*! exports provided: BlockHeaderComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "BlockHeaderComponent", function () {
            return BlockHeaderComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let BlockHeaderComponent = class BlockHeaderComponent {
        };
        BlockHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-block-header',
                template: `
        <ng-content></ng-content>
    `,
                styles: ["\n            :host {\n                font-size: 1.4rem;\n                font-weight: bold;\n                line-height: 2.4rem;\n                color: var(--color-on-surface-secondary);\n            }\n        "]
            })
        ], BlockHeaderComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/block/block.component.ts":
    /*!***********************************************************************!*\
  !*** ./src/modules/ui-components/components/block/block.component.ts ***!
  \***********************************************************************/
    /*! exports provided: BlockComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "BlockComponent", function () {
            return BlockComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let BlockComponent = class BlockComponent {
        };
        BlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-block',
                template: `
        <div class="block"><ng-content></ng-content></div>
    `,
                styles: ["\n            .block {\n                background: var(--color-surface);\n                border: 0.1rem solid var(--color-border);\n                border-radius: 0.2rem;\n                width: inherit;\n                height: inherit;\n                position: relative;\n            }\n        "]
            })
        ], BlockComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/button/button.component.css":
    /*!**************************************************************************!*\
  !*** ./src/modules/ui-components/components/button/button.component.css ***!
  \**************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("button {\r\n    height: inherit;\r\n    width: inherit;\r\n    font-size: 1.4rem;\r\n    text-align: center;\r\n    background: none;\r\n    padding: 0.4rem 0.8rem;\r\n    border: none;\r\n    border-radius: 0.2rem;\r\n    color: var(--color-primary);\r\n    transition: background-color 0.2s ease, color 0.2s ease;\r\n    outline-color: var(--color-primary);\r\n    outline-width: 0.1rem;\r\n}\r\n\r\nbutton:hover {\r\n    background: var(--color-text-button-hover);\r\n    color: var(--color-primary);\r\n}\r\n\r\nbutton:active {\r\n    background: var(--color-text-button-focus);\r\n}\r\n\r\nbutton.bordered {\r\n    color: var(--color-on-bordered-button-text);\r\n    border: 0.1rem solid var(--color-primary);\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton.bordered:hover {\r\n    color: var(--color-primary);\r\n    background-color: var(--color-surface);\r\n    border: 0.1rem solid var(--color-primary-hover);\r\n    box-shadow: 0 0.3rem 0.6rem var(--color-primary-shadow-hover);\r\n}\r\n\r\nbutton.bordered:active {\r\n    color: var(--color-primary);\r\n    border: 0.1rem solid var(--color-primary);\r\n    background: none;\r\n    box-shadow: none;\r\n}\r\n\r\nbutton.accent {\r\n    color: var(--color-on-primary-text);\r\n    background-color: var(--color-primary);\r\n    border-radius: 0.2rem;\r\n    padding: 0.4rem 1rem;\r\n}\r\n\r\nbutton.accent:hover {\r\n    background: var(--color-primary-hover);\r\n}\r\n\r\nbutton.accent:active {\r\n    background: var(--color-primary-focus);\r\n    box-shadow: none;\r\n}\r\n\r\nbutton:disabled,\r\nbutton:disabled:hover,\r\nbutton:disabled:active {\r\n    color: var(--color-on-surface-secondary);\r\n    background: none;\r\n    border: none;\r\n    box-shadow: none;\r\n}\r\n\r\nbutton.accent:disabled,\r\nbutton.accent:disabled:hover,\r\nbutton.accent:disabled:active {\r\n    background: var(--color-disable);\r\n    box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQix1REFBdUQ7SUFDdkQsbUNBQW1DO0lBQ25DLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MseUNBQXlDO0lBQ3pDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixzQ0FBc0M7SUFDdEMsK0NBQStDO0lBQy9DLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUdJLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBR0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQiIsImZpbGUiOiIuLi91aS1jb21wb25lbnRzL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIG91dGxpbmUtd2lkdGg6IDAuMXJlbTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRleHQtYnV0dG9uLWhvdmVyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10ZXh0LWJ1dHRvbi1mb2N1cyk7XHJcbn1cclxuXHJcbmJ1dHRvbi5ib3JkZXJlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tYm9yZGVyZWQtYnV0dG9uLXRleHQpO1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5idXR0b24uYm9yZGVyZWQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VyZmFjZSk7XHJcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5LWhvdmVyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4zcmVtIDAuNnJlbSB2YXIoLS1jb2xvci1wcmltYXJ5LXNoYWRvdy1ob3Zlcik7XHJcbn1cclxuXHJcbmJ1dHRvbi5ib3JkZXJlZDphY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLmFjY2VudCB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tcHJpbWFyeS10ZXh0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgcGFkZGluZzogMC40cmVtIDFyZW07XHJcbn1cclxuXHJcbmJ1dHRvbi5hY2NlbnQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1ob3Zlcik7XHJcbn1cclxuXHJcbmJ1dHRvbi5hY2NlbnQ6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktZm9jdXMpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkLFxyXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIsXHJcbmJ1dHRvbjpkaXNhYmxlZDphY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW9uLXN1cmZhY2Utc2Vjb25kYXJ5KTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5idXR0b24uYWNjZW50OmRpc2FibGVkLFxyXG5idXR0b24uYWNjZW50OmRpc2FibGVkOmhvdmVyLFxyXG5idXR0b24uYWNjZW50OmRpc2FibGVkOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1kaXNhYmxlKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuIl19 */");

        /***/
    }),

    /***/
    "./src/modules/ui-components/components/button/button.component.ts":
    /*!*************************************************************************!*\
  !*** ./src/modules/ui-components/components/button/button.component.ts ***!
  \*************************************************************************/
    /*! exports provided: ButtonComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
            return ButtonComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let ButtonComponent = class ButtonComponent {
            constructor() {
                this.type = '';
                this.tooltip = '';
                this.onclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleClick(event) {
                this.onclick.emit(event);
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ButtonComponent.prototype, "disabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ButtonComponent.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ButtonComponent.prototype, "tooltip", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], ButtonComponent.prototype, "onclick", void 0);
        ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-button',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/button/button.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button.component.css */ "./src/modules/ui-components/components/button/button.component.css")).default]
            })
        ], ButtonComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/checkbox/checkbox.component.css":
    /*!******************************************************************************!*\
  !*** ./src/modules/ui-components/components/checkbox/checkbox.component.css ***!
  \******************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = (".checkbox {\r\n    border-radius: 0.2rem;\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: auto 1fr;\r\n}\r\n\r\n.checkbox-container {\r\n    height: 1.6rem;\r\n    width: 1.6rem;\r\n    position: relative;\r\n}\r\n\r\n.title {\r\n    padding-left: 0.6rem;\r\n    font-size: 1.4rem;\r\n    line-height: 1.7rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.checkbox.active label {\r\n    border: 0.1rem solid var(--color-primary);\r\n    background-color: var(--color-primary);\r\n}\r\n\r\n.checkbox.disabled label {\r\n    border: 0.1rem solid var(--color-checkbox-disable);\r\n}\r\n\r\n.checkbox.active.disabled label {\r\n    background-color: var(--color-checkbox-disable);\r\n}\r\n\r\n.checkbox.disabled .title {\r\n    color: var(--color-on-surface-secondary);\r\n}\r\n\r\nlabel {\r\n    width: 1.6rem;\r\n    height: 1.6rem;\r\n    position: absolute;\r\n    border: 0.1rem solid var(--color-checkbox);\r\n    border-radius: 0.2rem;\r\n}\r\n\r\nlabel:active {\r\n    background-color: var(--color-text-button-hover);\r\n}\r\n\r\nlabel:after {\r\n    content: '';\r\n    width: 0.8rem;\r\n    height: 0.5rem;\r\n    position: absolute;\r\n    top: 0.25rem;\r\n    left: 0.2rem;\r\n    border: 0.12rem solid var(--color-surface);\r\n    border-top: none;\r\n    border-right: none;\r\n    background: transparent;\r\n    opacity: 0;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\ninput {\r\n    display: none;\r\n}\r\n\r\ninput:checked + label:after {\r\n    opacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiIuLi91aS1jb21wb25lbnRzL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICB3aWR0aDogMS42cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmNoZWNrYm94LmFjdGl2ZSBsYWJlbCB7XHJcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4uY2hlY2tib3guZGlzYWJsZWQgbGFiZWwge1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tY29sb3ItY2hlY2tib3gtZGlzYWJsZSk7XHJcbn1cclxuXHJcbi5jaGVja2JveC5hY3RpdmUuZGlzYWJsZWQgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tib3gtZGlzYWJsZSk7XHJcbn1cclxuXHJcbi5jaGVja2JveC5kaXNhYmxlZCAudGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW9uLXN1cmZhY2Utc2Vjb25kYXJ5KTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgd2lkdGg6IDEuNnJlbTtcclxuICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tY29sb3ItY2hlY2tib3gpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG5sYWJlbDphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGV4dC1idXR0b24taG92ZXIpO1xyXG59XHJcblxyXG5sYWJlbDphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAwLjhyZW07XHJcbiAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMC4yNXJlbTtcclxuICAgIGxlZnQ6IDAuMnJlbTtcclxuICAgIGJvcmRlcjogMC4xMnJlbSBzb2xpZCB2YXIoLS1jb2xvci1zdXJmYWNlKTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */");

        /***/
    }),

    /***/
    "./src/modules/ui-components/components/checkbox/checkbox.component.ts":
    /*!*****************************************************************************!*\
  !*** ./src/modules/ui-components/components/checkbox/checkbox.component.ts ***!
  \*****************************************************************************/
    /*! exports provided: CheckboxComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
            return CheckboxComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let CheckboxComponent = class CheckboxComponent {
            constructor() {
                this.oncheck = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.id = Math.floor(Math.random() * 100000);
            }

            handleCheck(event, isChecked) {
                event.preventDefault();
                if (!this.disabled) {
                    this.checked = !isChecked;
                    this.oncheck.emit(this.checked);
                }
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], CheckboxComponent.prototype, "title", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], CheckboxComponent.prototype, "checked", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], CheckboxComponent.prototype, "disabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], CheckboxComponent.prototype, "oncheck", void 0);
        CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-checkbox',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/checkbox/checkbox.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkbox.component.css */ "./src/modules/ui-components/components/checkbox/checkbox.component.css")).default]
            })
        ], CheckboxComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/color-picker/color-picker.component.css":
    /*!**************************************************************************************!*\
  !*** ./src/modules/ui-components/components/color-picker/color-picker.component.css ***!
  \**************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = (".grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    grid-gap: 0.4rem;\r\n}\r\n\r\n.wrapper {\r\n    display: grid;\r\n    height: 1.8rem;\r\n    width: 1.8rem;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.item {\r\n    height: 1.6rem;\r\n    width: 1.6rem;\r\n    border-radius: 50%;\r\n    grid-column: 1;\r\n    grid-row: 1;\r\n    z-index: 1;\r\n}\r\n\r\n.wrapper:hover .item {\r\n    height: 1.4rem;\r\n    width: 1.4rem;\r\n    border: none;\r\n}\r\n\r\n.wrapper:hover .layer {\r\n    height: 1.8rem;\r\n    width: 1.8rem;\r\n    background-color: var(--color-text-button-hover);\r\n}\r\n\r\n.layer {\r\n    height: 1rem;\r\n    width: 1rem;\r\n    background-color: var(--color-text-button-hover);\r\n    border-radius: 50%;\r\n    grid-column: 1;\r\n    grid-row: 1;\r\n    z-index: 0;\r\n}\r\n\r\n.wrapper.active .item {\r\n    height: 1.4rem;\r\n    width: 1.4rem;\r\n}\r\n\r\n.wrapper.active .layer {\r\n    height: 1.8rem;\r\n    width: 1.8rem;\r\n    background-color: var(--color-primary);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnREFBZ0Q7SUFDaEQsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNDQUFzQztBQUMxQyIsImZpbGUiOiIuLi91aS1jb21wb25lbnRzL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZ3JpZC1nYXA6IDAuNHJlbTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMS44cmVtO1xyXG4gICAgd2lkdGg6IDEuOHJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgd2lkdGg6IDEuNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ud3JhcHBlcjpob3ZlciAuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDEuNHJlbTtcclxuICAgIHdpZHRoOiAxLjRyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi53cmFwcGVyOmhvdmVyIC5sYXllciB7XHJcbiAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgIHdpZHRoOiAxLjhyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWJ1dHRvbi1ob3Zlcik7XHJcbn1cclxuXHJcbi5sYXllciB7XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRleHQtYnV0dG9uLWhvdmVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4ud3JhcHBlci5hY3RpdmUgLml0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxLjRyZW07XHJcbiAgICB3aWR0aDogMS40cmVtO1xyXG59XHJcblxyXG4ud3JhcHBlci5hY3RpdmUgLmxheWVyIHtcclxuICAgIGhlaWdodDogMS44cmVtO1xyXG4gICAgd2lkdGg6IDEuOHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiJdfQ== */");

        /***/
    }),

    /***/
    "./src/modules/ui-components/components/color-picker/color-picker.component.ts":
    /*!*************************************************************************************!*\
  !*** ./src/modules/ui-components/components/color-picker/color-picker.component.ts ***!
  \*************************************************************************************/
    /*! exports provided: ColorPickerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function () {
            return ColorPickerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let ColorPickerComponent = class ColorPickerComponent {
            constructor() {
                this.onselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            selectColor(color) {
                this.selectedColor = color;
                this.onselect.emit(color);
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ColorPickerComponent.prototype, "colors", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ColorPickerComponent.prototype, "selectedColor", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], ColorPickerComponent.prototype, "onselect", void 0);
        ColorPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-color-picker',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./color-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/color-picker/color-picker.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./color-picker.component.css */ "./src/modules/ui-components/components/color-picker/color-picker.component.css")).default]
            })
        ], ColorPickerComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/color-scheme/color-scheme.component.css":
    /*!**************************************************************************************!*\
  !*** ./src/modules/ui-components/components/color-scheme/color-scheme.component.css ***!
  \**************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = (".color-scheme {\r\n    display: contents;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\r\n        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\r\n        'Helvetica Neue', sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n    --color-key-0: #000000;\r\n    --color-key-1: #111111;\r\n    --color-key-2: #222222;\r\n    --color-key-3: #333333;\r\n    --color-key-4: #444444;\r\n    --color-key-5: #555555;\r\n    --color-key-6: #666666;\r\n    --color-key-7: #777777;\r\n    --color-key-8: #888888;\r\n    --color-key-9: #999999;\r\n    --color-key-a: #aaaaaa;\r\n    --color-key-b: #bbbbbb;\r\n    --color-key-c: #cccccc;\r\n    --color-key-d: #dddddd;\r\n    --color-key-e: #eeeeee;\r\n    --color-key-f: #ffffff;\r\n\r\n    --color-accent-1: #1a98c0;\r\n    --color-accent-2: #18c198;\r\n\r\n    --color-on-surface-secondary: #82939a;\r\n    --color-on-bordered-button-text: var(--color-key-0);\r\n\r\n    --color-on-surface: rgba(204, 204, 204, 0.3);\r\n\r\n    --color-remove-text: #cc0000;\r\n\r\n    --color-scroll: #ebebeb;\r\n    --color-scroll-hover: #d6d6d6;\r\n\r\n    --color-big-shadow: rgba(0, 0, 0, 0.25);\r\n    --color-small-shadow: rgba(0, 0, 0, 0.1);\r\n    --color-button-shadow: rgba(0, 0, 0, 0.25);\r\n\r\n    --slider-button-border: var(--color-key-f);\r\n\r\n    --chart-grid-gap: 0.8rem;\r\n    --chart-axis-title-size: 1.6rem;\r\n    --chart-axis-size: 1.6rem;\r\n    --heatmap-legend-size: 2rem;\r\n    --heatmap-labels: 5rem;\r\n}\r\n\r\n.color-scheme__light {\r\n    --color-primary: #eb780a;\r\n    --color-primary-hover: #ff8934;\r\n    --color-primary-focus: #db6b00;\r\n\r\n    --color-disable: #ebebeb;\r\n\r\n    --color-primary-shadow-hover: rgba(210, 99, 0, 0.4);\r\n\r\n    --color-background: #e5e5e5;\r\n    --color-toggle-background: var(--color-key-e);\r\n\r\n    --color-surface: var(--color-key-f);\r\n\r\n    --color-on-primary-text: var(--color-key-f);\r\n    --color-on-surface-text: var(--color-key-0);\r\n\r\n    --color-border: #ebebeb;\r\n\r\n    --color-text-button-hover: #fbe4ce;\r\n    --color-text-button-focus: #fed4ac;\r\n\r\n    --color-checkbox: var(--color-key-0);\r\n    --color-checkbox-disable: var(--color-key-c);\r\n\r\n    --color-select-filled: #ebebeb;\r\n\r\n    --color-timestamp-panel-label: rgba(235, 120, 10, 0.1);\r\n    --color-timestamp-active: var(--color-key-f);\r\n\r\n    --color-timestamp-editor-head-text: var(--color-key-0);\r\n    --color-timestamp-header-shadow: #f0f0f0;\r\n    --color-timestamp-editor-header: #eff0f2;\r\n    --color-timestamp-editor-column-hover: rgba(235, 120, 10, 0.2);\r\n    --color-timeseries-editor-header-background: rgba(153, 153, 153, 0.2);\r\n\r\n    --color-dropdown-item: var(--color-key-f);\r\n    --color-dropdown-item-hover: var(--color-key-e);\r\n\r\n    --color-modal-header: #ebebeb;\r\n}\r\n\r\n.color-scheme__blue {\r\n    --color-primary: #109cf1;\r\n    --color-primary-hover: #34aff9;\r\n    --color-primary-focus: #098edf;\r\n\r\n    --color-disable: #ecf1f7;\r\n\r\n    --color-primary-shadow-hover: rgba(43, 105, 132, 0.4);\r\n\r\n    --color-background: #e5e5e5;\r\n    --color-toggle-background: #ecf1f7;\r\n\r\n    --color-surface: var(--color-key-f);\r\n\r\n    --color-on-primary-text: var(--color-key-f);\r\n    --color-on-surface-text: var(--color-key-0);\r\n\r\n    --color-border: #ebebeb;\r\n\r\n    --color-text-button-hover: #d7e8ef;\r\n    --color-text-button-focus: #afd1e0;\r\n\r\n    --color-checkbox: var(--color-primary);\r\n    --color-checkbox-disable: #82939a;\r\n\r\n    --color-select-filled: #ecf1f7;\r\n\r\n    --color-timestamp-panel-label: #d7e8ef;\r\n    --color-timestamp-active: var(--color-key-f);\r\n\r\n    --color-timestamp-editor-head-text: var(--color-key-0);\r\n    --color-timestamp-header-shadow: #f0f0f0;\r\n    --color-timestamp-editor-header: #eff0f2;\r\n    --color-timestamp-editor-column-hover: #d7e8ef;\r\n    --color-timeseries-editor-header-background: #f4f7fb;\r\n\r\n    --color-dropdown-item: var(--color-key-f);\r\n    --color-dropdown-item-hover: var(--color-key-e);\r\n\r\n    --color-modal-header: #ecf1f7;\r\n}\r\n\r\n.color-scheme__dark {\r\n    --color-primary: #eb780a;\r\n    --color-primary-hover: #ff8934;\r\n    --color-primary-focus: #db6b00;\r\n\r\n    --color-disable: #ebebeb;\r\n\r\n    --color-primary-shadow-hover: rgba(210, 99, 0, 0.4);\r\n\r\n    --color-background: #1d1d1d;\r\n    --color-toggle-background: rgba(153, 153, 153, 0.2);\r\n\r\n    --color-surface: var(--color-key-3);\r\n\r\n    --color-on-primary-text: var(--color-key-0);\r\n    --color-on-surface-text: var(--color-key-f);\r\n    --color-remove-text: var(--color-key-f);\r\n\r\n    --color-border: #616161;\r\n\r\n    --color-text-button-hover: #634223;\r\n    --color-text-button-focus: #7f4d1e;\r\n\r\n    --color-checkbox: var(--color-key-f);\r\n    --color-checkbox-disable: var(--color-key-9);\r\n\r\n    --color-select-filled: #616161;\r\n\r\n    --color-timestamp-panel-label: rgba(235, 120, 10, 0.1);\r\n    --color-timestamp-active: var(--color-key-f);\r\n\r\n    --color-timestamp-header-shadow: #4c4c54;\r\n    --color-timestamp-editor-header: #424242;\r\n    --color-timestamp-editor-head-text: var(--color-key-9);\r\n    --color-timestamp-editor-column-hover: #424242;\r\n    --color-timeseries-editor-header-background: rgba(153, 153, 153, 0.2);\r\n\r\n    --color-dropdown-item: #616161;\r\n    --color-dropdown-item-hover: rgba(153, 153, 153, 0.3);\r\n\r\n    --color-modal-header: #454545;\r\n}\r\n\r\n.color-scheme ::-webkit-scrollbar {\r\n    height: 1.4rem;\r\n    width: 1.4rem;\r\n}\r\n\r\n.color-scheme ::-webkit-scrollbar-thumb {\r\n    border: 0.4rem solid transparent;\r\n    border-radius: 1rem;\r\n    background-color: var(--color-scroll);\r\n    background-clip: content-box;\r\n}\r\n\r\n.color-scheme ::-webkit-scrollbar-thumb:hover {\r\n    background-color: var(--color-scroll-hover);\r\n}\r\n\r\n.tse-notification {\r\n    position: absolute;\r\n    right: 1.6rem;\r\n    bottom: 1.6rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy9jb2xvci1zY2hlbWUvY29sb3Itc2NoZW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakI7O29DQUVnQztJQUNoQyxtQ0FBbUM7SUFDbkMsa0NBQWtDOztJQUVsQyxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7O0lBRXRCLHlCQUF5QjtJQUN6Qix5QkFBeUI7O0lBRXpCLHFDQUFxQztJQUNyQyxtREFBbUQ7O0lBRW5ELDRDQUE0Qzs7SUFFNUMsNEJBQTRCOztJQUU1Qix1QkFBdUI7SUFDdkIsNkJBQTZCOztJQUU3Qix1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLDBDQUEwQzs7SUFFMUMsMENBQTBDOztJQUUxQyx3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7O0lBRTlCLHdCQUF3Qjs7SUFFeEIsbURBQW1EOztJQUVuRCwyQkFBMkI7SUFDM0IsNkNBQTZDOztJQUU3QyxtQ0FBbUM7O0lBRW5DLDJDQUEyQztJQUMzQywyQ0FBMkM7O0lBRTNDLHVCQUF1Qjs7SUFFdkIsa0NBQWtDO0lBQ2xDLGtDQUFrQzs7SUFFbEMsb0NBQW9DO0lBQ3BDLDRDQUE0Qzs7SUFFNUMsOEJBQThCOztJQUU5QixzREFBc0Q7SUFDdEQsNENBQTRDOztJQUU1QyxzREFBc0Q7SUFDdEQsd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4Qyw4REFBOEQ7SUFDOUQscUVBQXFFOztJQUVyRSx5Q0FBeUM7SUFDekMsK0NBQStDOztJQUUvQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLDhCQUE4Qjs7SUFFOUIsd0JBQXdCOztJQUV4QixxREFBcUQ7O0lBRXJELDJCQUEyQjtJQUMzQixrQ0FBa0M7O0lBRWxDLG1DQUFtQzs7SUFFbkMsMkNBQTJDO0lBQzNDLDJDQUEyQzs7SUFFM0MsdUJBQXVCOztJQUV2QixrQ0FBa0M7SUFDbEMsa0NBQWtDOztJQUVsQyxzQ0FBc0M7SUFDdEMsaUNBQWlDOztJQUVqQyw4QkFBOEI7O0lBRTlCLHNDQUFzQztJQUN0Qyw0Q0FBNEM7O0lBRTVDLHNEQUFzRDtJQUN0RCx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QyxvREFBb0Q7O0lBRXBELHlDQUF5QztJQUN6QywrQ0FBK0M7O0lBRS9DLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsOEJBQThCOztJQUU5Qix3QkFBd0I7O0lBRXhCLG1EQUFtRDs7SUFFbkQsMkJBQTJCO0lBQzNCLG1EQUFtRDs7SUFFbkQsbUNBQW1DOztJQUVuQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLHVDQUF1Qzs7SUFFdkMsdUJBQXVCOztJQUV2QixrQ0FBa0M7SUFDbEMsa0NBQWtDOztJQUVsQyxvQ0FBb0M7SUFDcEMsNENBQTRDOztJQUU1Qyw4QkFBOEI7O0lBRTlCLHNEQUFzRDtJQUN0RCw0Q0FBNEM7O0lBRTVDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsc0RBQXNEO0lBQ3RELDhDQUE4QztJQUM5QyxxRUFBcUU7O0lBRXJFLDhCQUE4QjtJQUM5QixxREFBcUQ7O0lBRXJELDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0FBQ2xCIiwiZmlsZSI6Ii4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy9jb2xvci1zY2hlbWUvY29sb3Itc2NoZW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Itc2NoZW1lIHtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXHJcbiAgICAgICAgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJyxcclxuICAgICAgICAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG5cclxuICAgIC0tY29sb3Ita2V5LTA6ICMwMDAwMDA7XHJcbiAgICAtLWNvbG9yLWtleS0xOiAjMTExMTExO1xyXG4gICAgLS1jb2xvci1rZXktMjogIzIyMjIyMjtcclxuICAgIC0tY29sb3Ita2V5LTM6ICMzMzMzMzM7XHJcbiAgICAtLWNvbG9yLWtleS00OiAjNDQ0NDQ0O1xyXG4gICAgLS1jb2xvci1rZXktNTogIzU1NTU1NTtcclxuICAgIC0tY29sb3Ita2V5LTY6ICM2NjY2NjY7XHJcbiAgICAtLWNvbG9yLWtleS03OiAjNzc3Nzc3O1xyXG4gICAgLS1jb2xvci1rZXktODogIzg4ODg4ODtcclxuICAgIC0tY29sb3Ita2V5LTk6ICM5OTk5OTk7XHJcbiAgICAtLWNvbG9yLWtleS1hOiAjYWFhYWFhO1xyXG4gICAgLS1jb2xvci1rZXktYjogI2JiYmJiYjtcclxuICAgIC0tY29sb3Ita2V5LWM6ICNjY2NjY2M7XHJcbiAgICAtLWNvbG9yLWtleS1kOiAjZGRkZGRkO1xyXG4gICAgLS1jb2xvci1rZXktZTogI2VlZWVlZTtcclxuICAgIC0tY29sb3Ita2V5LWY6ICNmZmZmZmY7XHJcblxyXG4gICAgLS1jb2xvci1hY2NlbnQtMTogIzFhOThjMDtcclxuICAgIC0tY29sb3ItYWNjZW50LTI6ICMxOGMxOTg7XHJcblxyXG4gICAgLS1jb2xvci1vbi1zdXJmYWNlLXNlY29uZGFyeTogIzgyOTM5YTtcclxuICAgIC0tY29sb3Itb24tYm9yZGVyZWQtYnV0dG9uLXRleHQ6IHZhcigtLWNvbG9yLWtleS0wKTtcclxuXHJcbiAgICAtLWNvbG9yLW9uLXN1cmZhY2U6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4zKTtcclxuXHJcbiAgICAtLWNvbG9yLXJlbW92ZS10ZXh0OiAjY2MwMDAwO1xyXG5cclxuICAgIC0tY29sb3Itc2Nyb2xsOiAjZWJlYmViO1xyXG4gICAgLS1jb2xvci1zY3JvbGwtaG92ZXI6ICNkNmQ2ZDY7XHJcblxyXG4gICAgLS1jb2xvci1iaWctc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgLS1jb2xvci1zbWFsbC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC0tY29sb3ItYnV0dG9uLXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHJcbiAgICAtLXNsaWRlci1idXR0b24tYm9yZGVyOiB2YXIoLS1jb2xvci1rZXktZik7XHJcblxyXG4gICAgLS1jaGFydC1ncmlkLWdhcDogMC44cmVtO1xyXG4gICAgLS1jaGFydC1heGlzLXRpdGxlLXNpemU6IDEuNnJlbTtcclxuICAgIC0tY2hhcnQtYXhpcy1zaXplOiAxLjZyZW07XHJcbiAgICAtLWhlYXRtYXAtbGVnZW5kLXNpemU6IDJyZW07XHJcbiAgICAtLWhlYXRtYXAtbGFiZWxzOiA1cmVtO1xyXG59XHJcblxyXG4uY29sb3Itc2NoZW1lX19saWdodCB7XHJcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNlYjc4MGE7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktaG92ZXI6ICNmZjg5MzQ7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktZm9jdXM6ICNkYjZiMDA7XHJcblxyXG4gICAgLS1jb2xvci1kaXNhYmxlOiAjZWJlYmViO1xyXG5cclxuICAgIC0tY29sb3ItcHJpbWFyeS1zaGFkb3ctaG92ZXI6IHJnYmEoMjEwLCA5OSwgMCwgMC40KTtcclxuXHJcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgICAtLWNvbG9yLXRvZ2dsZS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1rZXktZSk7XHJcblxyXG4gICAgLS1jb2xvci1zdXJmYWNlOiB2YXIoLS1jb2xvci1rZXktZik7XHJcblxyXG4gICAgLS1jb2xvci1vbi1wcmltYXJ5LXRleHQ6IHZhcigtLWNvbG9yLWtleS1mKTtcclxuICAgIC0tY29sb3Itb24tc3VyZmFjZS10ZXh0OiB2YXIoLS1jb2xvci1rZXktMCk7XHJcblxyXG4gICAgLS1jb2xvci1ib3JkZXI6ICNlYmViZWI7XHJcblxyXG4gICAgLS1jb2xvci10ZXh0LWJ1dHRvbi1ob3ZlcjogI2ZiZTRjZTtcclxuICAgIC0tY29sb3ItdGV4dC1idXR0b24tZm9jdXM6ICNmZWQ0YWM7XHJcblxyXG4gICAgLS1jb2xvci1jaGVja2JveDogdmFyKC0tY29sb3Ita2V5LTApO1xyXG4gICAgLS1jb2xvci1jaGVja2JveC1kaXNhYmxlOiB2YXIoLS1jb2xvci1rZXktYyk7XHJcblxyXG4gICAgLS1jb2xvci1zZWxlY3QtZmlsbGVkOiAjZWJlYmViO1xyXG5cclxuICAgIC0tY29sb3ItdGltZXN0YW1wLXBhbmVsLWxhYmVsOiByZ2JhKDIzNSwgMTIwLCAxMCwgMC4xKTtcclxuICAgIC0tY29sb3ItdGltZXN0YW1wLWFjdGl2ZTogdmFyKC0tY29sb3Ita2V5LWYpO1xyXG5cclxuICAgIC0tY29sb3ItdGltZXN0YW1wLWVkaXRvci1oZWFkLXRleHQ6IHZhcigtLWNvbG9yLWtleS0wKTtcclxuICAgIC0tY29sb3ItdGltZXN0YW1wLWhlYWRlci1zaGFkb3c6ICNmMGYwZjA7XHJcbiAgICAtLWNvbG9yLXRpbWVzdGFtcC1lZGl0b3ItaGVhZGVyOiAjZWZmMGYyO1xyXG4gICAgLS1jb2xvci10aW1lc3RhbXAtZWRpdG9yLWNvbHVtbi1ob3ZlcjogcmdiYSgyMzUsIDEyMCwgMTAsIDAuMik7XHJcbiAgICAtLWNvbG9yLXRpbWVzZXJpZXMtZWRpdG9yLWhlYWRlci1iYWNrZ3JvdW5kOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMik7XHJcblxyXG4gICAgLS1jb2xvci1kcm9wZG93bi1pdGVtOiB2YXIoLS1jb2xvci1rZXktZik7XHJcbiAgICAtLWNvbG9yLWRyb3Bkb3duLWl0ZW0taG92ZXI6IHZhcigtLWNvbG9yLWtleS1lKTtcclxuXHJcbiAgICAtLWNvbG9yLW1vZGFsLWhlYWRlcjogI2ViZWJlYjtcclxufVxyXG5cclxuLmNvbG9yLXNjaGVtZV9fYmx1ZSB7XHJcbiAgICAtLWNvbG9yLXByaW1hcnk6ICMxMDljZjE7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktaG92ZXI6ICMzNGFmZjk7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktZm9jdXM6ICMwOThlZGY7XHJcblxyXG4gICAgLS1jb2xvci1kaXNhYmxlOiAjZWNmMWY3O1xyXG5cclxuICAgIC0tY29sb3ItcHJpbWFyeS1zaGFkb3ctaG92ZXI6IHJnYmEoNDMsIDEwNSwgMTMyLCAwLjQpO1xyXG5cclxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuICAgIC0tY29sb3ItdG9nZ2xlLWJhY2tncm91bmQ6ICNlY2YxZjc7XHJcblxyXG4gICAgLS1jb2xvci1zdXJmYWNlOiB2YXIoLS1jb2xvci1rZXktZik7XHJcblxyXG4gICAgLS1jb2xvci1vbi1wcmltYXJ5LXRleHQ6IHZhcigtLWNvbG9yLWtleS1mKTtcclxuICAgIC0tY29sb3Itb24tc3VyZmFjZS10ZXh0OiB2YXIoLS1jb2xvci1rZXktMCk7XHJcblxyXG4gICAgLS1jb2xvci1ib3JkZXI6ICNlYmViZWI7XHJcblxyXG4gICAgLS1jb2xvci10ZXh0LWJ1dHRvbi1ob3ZlcjogI2Q3ZThlZjtcclxuICAgIC0tY29sb3ItdGV4dC1idXR0b24tZm9jdXM6ICNhZmQxZTA7XHJcblxyXG4gICAgLS1jb2xvci1jaGVja2JveDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWNvbG9yLWNoZWNrYm94LWRpc2FibGU6ICM4MjkzOWE7XHJcblxyXG4gICAgLS1jb2xvci1zZWxlY3QtZmlsbGVkOiAjZWNmMWY3O1xyXG5cclxuICAgIC0tY29sb3ItdGltZXN0YW1wLXBhbmVsLWxhYmVsOiAjZDdlOGVmO1xyXG4gICAgLS1jb2xvci10aW1lc3RhbXAtYWN0aXZlOiB2YXIoLS1jb2xvci1rZXktZik7XHJcblxyXG4gICAgLS1jb2xvci10aW1lc3RhbXAtZWRpdG9yLWhlYWQtdGV4dDogdmFyKC0tY29sb3Ita2V5LTApO1xyXG4gICAgLS1jb2xvci10aW1lc3RhbXAtaGVhZGVyLXNoYWRvdzogI2YwZjBmMDtcclxuICAgIC0tY29sb3ItdGltZXN0YW1wLWVkaXRvci1oZWFkZXI6ICNlZmYwZjI7XHJcbiAgICAtLWNvbG9yLXRpbWVzdGFtcC1lZGl0b3ItY29sdW1uLWhvdmVyOiAjZDdlOGVmO1xyXG4gICAgLS1jb2xvci10aW1lc2VyaWVzLWVkaXRvci1oZWFkZXItYmFja2dyb3VuZDogI2Y0ZjdmYjtcclxuXHJcbiAgICAtLWNvbG9yLWRyb3Bkb3duLWl0ZW06IHZhcigtLWNvbG9yLWtleS1mKTtcclxuICAgIC0tY29sb3ItZHJvcGRvd24taXRlbS1ob3ZlcjogdmFyKC0tY29sb3Ita2V5LWUpO1xyXG5cclxuICAgIC0tY29sb3ItbW9kYWwtaGVhZGVyOiAjZWNmMWY3O1xyXG59XHJcblxyXG4uY29sb3Itc2NoZW1lX19kYXJrIHtcclxuICAgIC0tY29sb3ItcHJpbWFyeTogI2ViNzgwYTtcclxuICAgIC0tY29sb3ItcHJpbWFyeS1ob3ZlcjogI2ZmODkzNDtcclxuICAgIC0tY29sb3ItcHJpbWFyeS1mb2N1czogI2RiNmIwMDtcclxuXHJcbiAgICAtLWNvbG9yLWRpc2FibGU6ICNlYmViZWI7XHJcblxyXG4gICAgLS1jb2xvci1wcmltYXJ5LXNoYWRvdy1ob3ZlcjogcmdiYSgyMTAsIDk5LCAwLCAwLjQpO1xyXG5cclxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogIzFkMWQxZDtcclxuICAgIC0tY29sb3ItdG9nZ2xlLWJhY2tncm91bmQ6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKTtcclxuXHJcbiAgICAtLWNvbG9yLXN1cmZhY2U6IHZhcigtLWNvbG9yLWtleS0zKTtcclxuXHJcbiAgICAtLWNvbG9yLW9uLXByaW1hcnktdGV4dDogdmFyKC0tY29sb3Ita2V5LTApO1xyXG4gICAgLS1jb2xvci1vbi1zdXJmYWNlLXRleHQ6IHZhcigtLWNvbG9yLWtleS1mKTtcclxuICAgIC0tY29sb3ItcmVtb3ZlLXRleHQ6IHZhcigtLWNvbG9yLWtleS1mKTtcclxuXHJcbiAgICAtLWNvbG9yLWJvcmRlcjogIzYxNjE2MTtcclxuXHJcbiAgICAtLWNvbG9yLXRleHQtYnV0dG9uLWhvdmVyOiAjNjM0MjIzO1xyXG4gICAgLS1jb2xvci10ZXh0LWJ1dHRvbi1mb2N1czogIzdmNGQxZTtcclxuXHJcbiAgICAtLWNvbG9yLWNoZWNrYm94OiB2YXIoLS1jb2xvci1rZXktZik7XHJcbiAgICAtLWNvbG9yLWNoZWNrYm94LWRpc2FibGU6IHZhcigtLWNvbG9yLWtleS05KTtcclxuXHJcbiAgICAtLWNvbG9yLXNlbGVjdC1maWxsZWQ6ICM2MTYxNjE7XHJcblxyXG4gICAgLS1jb2xvci10aW1lc3RhbXAtcGFuZWwtbGFiZWw6IHJnYmEoMjM1LCAxMjAsIDEwLCAwLjEpO1xyXG4gICAgLS1jb2xvci10aW1lc3RhbXAtYWN0aXZlOiB2YXIoLS1jb2xvci1rZXktZik7XHJcblxyXG4gICAgLS1jb2xvci10aW1lc3RhbXAtaGVhZGVyLXNoYWRvdzogIzRjNGM1NDtcclxuICAgIC0tY29sb3ItdGltZXN0YW1wLWVkaXRvci1oZWFkZXI6ICM0MjQyNDI7XHJcbiAgICAtLWNvbG9yLXRpbWVzdGFtcC1lZGl0b3ItaGVhZC10ZXh0OiB2YXIoLS1jb2xvci1rZXktOSk7XHJcbiAgICAtLWNvbG9yLXRpbWVzdGFtcC1lZGl0b3ItY29sdW1uLWhvdmVyOiAjNDI0MjQyO1xyXG4gICAgLS1jb2xvci10aW1lc2VyaWVzLWVkaXRvci1oZWFkZXItYmFja2dyb3VuZDogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpO1xyXG5cclxuICAgIC0tY29sb3ItZHJvcGRvd24taXRlbTogIzYxNjE2MTtcclxuICAgIC0tY29sb3ItZHJvcGRvd24taXRlbS1ob3ZlcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjMpO1xyXG5cclxuICAgIC0tY29sb3ItbW9kYWwtaGVhZGVyOiAjNDU0NTQ1O1xyXG59XHJcblxyXG4uY29sb3Itc2NoZW1lIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiAxLjRyZW07XHJcbiAgICB3aWR0aDogMS40cmVtO1xyXG59XHJcblxyXG4uY29sb3Itc2NoZW1lIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyOiAwLjRyZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Nyb2xsKTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbi5jb2xvci1zY2hlbWUgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zY3JvbGwtaG92ZXIpO1xyXG59XHJcblxyXG4udHNlLW5vdGlmaWNhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMS42cmVtO1xyXG4gICAgYm90dG9tOiAxLjZyZW07XHJcbn1cclxuIl19 */");

        /***/
    }),

    /***/
    "./src/modules/ui-components/components/color-scheme/color-scheme.component.ts":
    /*!*************************************************************************************!*\
  !*** ./src/modules/ui-components/components/color-scheme/color-scheme.component.ts ***!
  \*************************************************************************************/
    /*! exports provided: ColorSchemeComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ColorSchemeComponent", function () {
            return ColorSchemeComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _enums_ColorScheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/ColorScheme */ "./src/modules/ui-components/enums/ColorScheme.ts");


        let ColorSchemeComponent = class ColorSchemeComponent {
            constructor() {
                this.common = true;
            }

            ngOnInit() {
                this.light = this.theme === _enums_ColorScheme__WEBPACK_IMPORTED_MODULE_2__["ColorScheme"].light;
                this.dark = this.theme === _enums_ColorScheme__WEBPACK_IMPORTED_MODULE_2__["ColorScheme"].dark;
                this.blue = this.theme === _enums_ColorScheme__WEBPACK_IMPORTED_MODULE_2__["ColorScheme"].blue;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ColorSchemeComponent.prototype, "theme", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.color-scheme')
        ], ColorSchemeComponent.prototype, "common", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.color-scheme__light')
        ], ColorSchemeComponent.prototype, "light", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.color-scheme__dark')
        ], ColorSchemeComponent.prototype, "dark", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.color-scheme__blue')
        ], ColorSchemeComponent.prototype, "blue", void 0);
        ColorSchemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-color-scheme',
                template: `
        <ng-content></ng-content>
    `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./color-scheme.component.css */ "./src/modules/ui-components/components/color-scheme/color-scheme.component.css")).default]
            })
        ], ColorSchemeComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/dropdown/dropdown.component.ts":
    /*!*****************************************************************************!*\
  !*** ./src/modules/ui-components/components/dropdown/dropdown.component.ts ***!
  \*****************************************************************************/
    /*! exports provided: DropdownComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
            return DropdownComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var autobind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/esm/index.js");


        let DropdownComponent = class DropdownComponent {
            constructor() {
                this.onclose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            ngOnChanges(changes) {
                if (changes.x || changes.y) {
                    this.dropdownX = this.x;
                    this.dropdownY = this.y;
                    setTimeout(this.changeDrawingDirectionIfOverlap);
                }
            }

            handleClose() {
                this.onclose.emit(true);
            }

            changeDrawingDirectionIfOverlap() {
                const {documentElement} = document;
                const domRect = this.dropdownElement.nativeElement.getBoundingClientRect();
                const pageWidth = documentElement.clientWidth;
                if (this.dropdownX + domRect.width > pageWidth) {
                    this.dropdownX = this.dropdownX - domRect.width;
                }
            }

            get style() {
                return {
                    left: `${this.dropdownX}px`,
                    top: `${this.dropdownY}px`,
                };
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dropdown', {static: true})
        ], DropdownComponent.prototype, "dropdownElement", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], DropdownComponent.prototype, "x", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], DropdownComponent.prototype, "y", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], DropdownComponent.prototype, "onclose", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click'),
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:wheel'),
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:contextmenu')
        ], DropdownComponent.prototype, "handleClose", null);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            autobind_decorator__WEBPACK_IMPORTED_MODULE_2__["default"]
        ], DropdownComponent.prototype, "changeDrawingDirectionIfOverlap", null);
        DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-dropdown',
                template: `
        <div class="dropdown" [ngStyle]="style" #dropdown>
            <ng-content></ng-content>
        </div>
    `,
                styles: ["\n            .dropdown {\n                position: fixed;\n                background: var(--color-dropdown-item);\n                color: var(--color-on-surface-text);\n                box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);\n                border-radius: 0.2rem;\n                width: inherit;\n                height: inherit;\n                z-index: 2;\n                font-size: 1.4rem;\n                text-align: left;\n            }\n        "]
            })
        ], DropdownComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/file-upload/file-upload.component.ts":
    /*!***********************************************************************************!*\
  !*** ./src/modules/ui-components/components/file-upload/file-upload.component.ts ***!
  \***********************************************************************************/
    /*! exports provided: FileUploadComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
            return FileUploadComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _services_id_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/id-generator.service */ "./src/modules/ui-components/services/id-generator.service.ts");


        let FileUploadComponent = class FileUploadComponent {
            constructor(idGeneratorService) {
                this.idGeneratorService = idGeneratorService;
                this.changeFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.fileName = '';
                this.id = this.idGeneratorService.getID();
            }

            handleChange(event) {
                event.preventDefault();
                const element = event.target;
                const file = element.files[0];
                this.fileName = file.name;
                this.changeFile.emit(file);
            }

            preventOpening(event) {
                event.preventDefault();
            }
        };
        FileUploadComponent.ctorParameters = () =;
    >
        [
            {type: _services_id_generator_service__WEBPACK_IMPORTED_MODULE_2__["IdGeneratorService"]}
        ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], FileUploadComponent.prototype, "changeFile", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:drag', ['$event']),
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:dragover', ['$event']),
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:dragenter', ['$event'])
        ], FileUploadComponent.prototype, "preventOpening", null);
        FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-file-upload',
                template: `
        <label [for]="id" class="file-upload">
            <input
                type="file"
                class="input"
                [id]="id"
                (change)="handleChange($event)"
            />

            <div class="grid">
                <div class="icon-container">
                    <skr-upload-icon></skr-upload-icon>
                </div>
                <div>Choose a file or drag it here</div>
                <div *ngIf="fileName.length">Chosen file: {{ fileName }}</div>
            </div>
        </label>
    `,
                styles: ["\n            .file-upload {\n                display: block;\n                height: 100%;\n                border: 0.1rem solid var(--color-border);\n                border-radius: 0.2rem;\n            }\n\n            .input {\n                width: 0.01rem;\n                height: 0.01rem;\n                opacity: 0;\n                overflow: hidden;\n                position: absolute;\n                z-index: -1;\n            }\n\n            .grid {\n                display: grid;\n                grid-gap: 1rem;\n                justify-items: center;\n                align-content: center;\n                height: 100%;\n                color: var(--color-on-surface-secondary);\n            }\n\n            .icon-container {\n                width: 6rem;\n            }\n        "]
            })
        ], FileUploadComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/input/input.component.css":
    /*!************************************************************************!*\
  !*** ./src/modules/ui-components/components/input/input.component.css ***!
  \************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = (".title {\r\n    color: var(--color-on-surface-secondary);\r\n    font-size: 1.2rem;\r\n    margin: 0.4rem 0;\r\n    transition: color 0.2s ease;\r\n}\r\n\r\n.container {\r\n    position: relative;\r\n}\r\n\r\n.icon {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding-right: 0.8rem;\r\n    height: 100%;\r\n    width: 2.4rem;\r\n}\r\n\r\ninput {\r\n    height: 3.2rem;\r\n    width: 100%;\r\n    font-size: 1.4rem;\r\n    line-height: 1.7rem;\r\n    border: 0.1rem solid var(--color-border);\r\n    border-radius: 0.2rem;\r\n    padding: 0.8rem;\r\n    box-sizing: border-box;\r\n    outline-color: var(--color-primary);\r\n    transition: outline-color 0.2s ease;\r\n    background-color: var(--color-surface);\r\n    color: var(--color-on-surface-text);\r\n    outline-width: 0.1rem;\r\n}\r\n\r\ninput:disabled {\r\n    background-color: var(--color-disable);\r\n}\r\n\r\n.selected .title {\r\n    color: var(--color-primary);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6Ii4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLXNlY29uZGFyeSk7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbjogMC40cmVtIDA7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAyLjRyZW07XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGhlaWdodDogMy4ycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgcGFkZGluZzogMC44cmVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgdHJhbnNpdGlvbjogb3V0bGluZS1jb2xvciAwLjJzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLXRleHQpO1xyXG4gICAgb3V0bGluZS13aWR0aDogMC4xcmVtO1xyXG59XHJcblxyXG5pbnB1dDpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kaXNhYmxlKTtcclxufVxyXG5cclxuLnNlbGVjdGVkIC50aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuIl19 */");

        /***/
    }),

    /***/
    "./src/modules/ui-components/components/input/input.component.ts":
    /*!***********************************************************************!*\
  !*** ./src/modules/ui-components/components/input/input.component.ts ***!
  \***********************************************************************/
    /*! exports provided: InputComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
            return InputComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _enums_InputType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/InputType */ "./src/modules/ui-components/enums/InputType.ts");


        let InputComponent = class InputComponent {
            constructor() {
                this.tooltip = '';
                this.oninput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.onchange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.value = '';
                this.isSelect = false;
                this.type = _enums_InputType__WEBPACK_IMPORTED_MODULE_2__["InputType"].TEXT;
                this.step = 1;
            }

            toggleSelect() {
                this.isSelect = !this.isSelect;
            }

            handleInput(event) {
                this.oninput.emit(event.target.value);
            }

            handleChange(event) {
                this.onchange.emit(event.target.value);
                event.target.value = this.value;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], InputComponent.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], InputComponent.prototype, "min", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], InputComponent.prototype, "max", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], InputComponent.prototype, "step", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], InputComponent.prototype, "label", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], InputComponent.prototype, "value", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], InputComponent.prototype, "tooltip", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], InputComponent.prototype, "disabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], InputComponent.prototype, "oninput", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], InputComponent.prototype, "onchange", void 0);
        InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-input',
                template: `
        <div [class.selected]="isSelect" [title]="tooltip">
            <div class="title" *ngIf="label">{{ label }}</div>
            <div class="container">
                <input
                    [value]="value"
                    [type]="type"
                    [min]="min"
                    [max]="max"
                    [step]="step"
                    [disabled]="disabled"
                    (focus)="toggleSelect()"
                    (blur)="toggleSelect()"
                    (change)="handleChange($event)"
                    (input)="handleInput($event)"
                />
            </div>
        </div>
    `,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input.component.css */ "./src/modules/ui-components/components/input/input.component.css")).default]
            })
        ], InputComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/list-item/list-item.component.ts":
    /*!*******************************************************************************!*\
  !*** ./src/modules/ui-components/components/list-item/list-item.component.ts ***!
  \*******************************************************************************/
    /*! exports provided: ListItemComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ListItemComponent", function () {
            return ListItemComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let ListItemComponent = class ListItemComponent {
            constructor() {
                this.disabled = false;
                this.onclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleClick() {
                if (this.disabled === true) {
                    return;
                }
                this.onclick.emit();
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ListItemComponent.prototype, "disabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], ListItemComponent.prototype, "onclick", void 0);
        ListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-list-item',
                template: `
        <div class="item" [class.disabled]="disabled" (click)="handleClick()">
            <ng-content></ng-content>
        </div>
    `,
                styles: ["\n            .item {\n                padding: 0.8rem;\n                transition: background-color, color 0.2s ease;\n                cursor: default;\n            }\n\n            .item:hover {\n                background-color: var(--color-select-filled);\n            }\n\n            .disabled {\n                color: var(--color-on-surface-secondary);\n            }\n        "]
            })
        ], ListItemComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/modal-footer/modal-footer.component.ts":
    /*!*************************************************************************************!*\
  !*** ./src/modules/ui-components/components/modal-footer/modal-footer.component.ts ***!
  \*************************************************************************************/
    /*! exports provided: ModalFooterComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ModalFooterComponent", function () {
            return ModalFooterComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let ModalFooterComponent = class ModalFooterComponent {
        };
        ModalFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-modal-footer',
                template: `
        <div class="container left">
            <ng-content select="[left]"></ng-content>
        </div>
        <div class="container right">
            <ng-content select="[right]"></ng-content>
        </div>
    `,
                styles: ["\n            :host {\n                display: grid;\n                margin-top: 0.8rem;\n                grid-gap: 0.8rem;\n                grid-auto-flow: column;\n                align-items: center;\n            }\n\n            .container {\n                display: grid;\n                grid-gap: 0.8rem;\n                grid-auto-flow: column;\n                width: fit-content;\n            }\n\n            .left {\n                justify-self: start;\n            }\n\n            .right {\n                justify-self: end;\n            }\n        "]
            })
        ], ModalFooterComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/modal/modal.component.css":
    /*!************************************************************************!*\
  !*** ./src/modules/ui-components/components/modal/modal.component.css ***!
  \************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = (":host /deep/ .ui-dialog {\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);\r\n    border-radius: 0.3rem 0.3rem 0.2rem 0.2rem;\r\n}\r\n\r\n:host /deep/ .ui-dialog-title {\r\n    font-size: 1.4rem !important;\r\n    font-weight: normal !important;\r\n    line-height: 1.7rem;\r\n    vertical-align: sub;\r\n    display: inline-block;\r\n}\r\n\r\n:host /deep/ .ui-dialog-titlebar {\r\n    display: grid;\r\n    align-content: center;\r\n    text-align: center;\r\n    height: 3.2rem;\r\n    padding: 0 !important;\r\n    border: none !important;\r\n    background-color: var(--color-modal-header) !important;\r\n    color: var(--color-on-surface-text) !important;\r\n}\r\n\r\n:host /deep/ .ui-dialog-content {\r\n    border: none !important;\r\n    font-size: 1.4rem;\r\n    line-height: 1.7rem;\r\n    padding: 1.6rem !important;\r\n    height: 100%;\r\n    overflow: visible;\r\n    color: var(--color-on-surface-text) !important;\r\n    background-color: var(--color-surface) !important;\r\n}\r\n\r\n.header-actions {\r\n    height: 1.6rem;\r\n    width: 1.6rem;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 1rem;\r\n    bottom: 0;\r\n    margin: auto 0;\r\n}\r\n\r\n.modal-grid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-rows: 1fr auto;\r\n}\r\n\r\n.actions {\r\n    display: grid;\r\n    grid-gap: 0.8rem;\r\n    grid-auto-flow: column;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    justify-self: end;\r\n}\r\n\r\n.close-button {\r\n    color: var(--color-on-surface-secondary);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw4Q0FBOEM7SUFDOUMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHNEQUFzRDtJQUN0RCw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw4Q0FBOEM7SUFDOUMsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxTQUFTO0lBQ1QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDIiwiZmlsZSI6Ii4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgL2RlZXAvIC51aS1kaWFsb2cge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNHJlbSAwLjRyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtIDAuM3JlbSAwLjJyZW0gMC4ycmVtO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnVpLWRpYWxvZy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAudWktZGlhbG9nLXRpdGxlYmFyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMuMnJlbTtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbW9kYWwtaGVhZGVyKSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW9uLXN1cmZhY2UtdGV4dCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAgIHBhZGRpbmc6IDEuNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZS10ZXh0KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VyZmFjZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci1hY3Rpb25zIHtcclxuICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgd2lkdGg6IDEuNnJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvIDA7XHJcbn1cclxuXHJcbi5tb2RhbC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDAuOHJlbTtcclxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZS1zZWNvbmRhcnkpO1xyXG59XHJcbiJdfQ== */");

        /***/
    }),

    /***/
    "./src/modules/ui-components/components/modal/modal.component.ts":
    /*!***********************************************************************!*\
  !*** ./src/modules/ui-components/components/modal/modal.component.ts ***!
  \***********************************************************************/
    /*! exports provided: ModalComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
            return ModalComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
        /* harmony import */
        var _services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modal.service */ "./src/modules/ui-components/services/modal.service.ts");


        let ModalComponent = class ModalComponent {
            constructor(document, modalService, element) {
                this.modalService = modalService;
                this.element = element;
                this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.document = document;
            }

            ngOnInit() {
                if (this.id.trim().length === 0) {
                    throw new Error('modal must have an id');
                }
                this.document.body.appendChild(this.element.nativeElement);
                this.modalService.add(this);
            }

            ngOnDestroy() {
                this.modalService.remove(this.id);
                this.element.nativeElement.remove();
            }

            open() {
                this.visible = true;
            }

            close() {
                this.visible = false;
            }

            handleCloseModal() {
                this.close();
                this.onClose.emit();
            }

            hotKeyListener(event) {
                if (event.key === 'Escape') {
                    this.handleCloseModal();
                }
            }
        };
        ModalComponent.ctorParameters = () =;
    >
        [
            {
                type: undefined,
                decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                    args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],]
                }]
            },
            {type: _services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]},
            {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]}
        ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ModalComponent.prototype, "id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ModalComponent.prototype, "title", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ModalComponent.prototype, "width", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ModalComponent.prototype, "height", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], ModalComponent.prototype, "onClose", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
        ], ModalComponent.prototype, "hotKeyListener", null);
        ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-modal',
                template: `
        <skr-color-scheme [theme]="'blue'">
            <p-dialog
                [visible]="visible"
                [modal]="true"
                [width]="width"
                [height]="height"
                [minHeight]="0"
                [maximizable]="false"
                [draggable]="false"
                [resizable]="false"
                [closable]="false"
            >
                <p-header>
                    <div class="title">{{ title }}</div>
                    <div class="header-actions">
                        <div class="header-action" (click)="handleCloseModal()">
                            <div class="close-button">
                                <skr-close-icon></skr-close-icon>
                            </div>
                        </div>
                    </div>
                </p-header>
                <div class="modal-grid"><ng-content></ng-content></div>
            </p-dialog>
        </skr-color-scheme>
    `,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/modules/ui-components/components/modal/modal.component.css")).default]
            }),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
        ], ModalComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/select/select.component.css":
    /*!**************************************************************************!*\
  !*** ./src/modules/ui-components/components/select/select.component.css ***!
  \**************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = (".select-container {\r\n    display: grid;\r\n    align-items: center;\r\n}\r\n\r\n.title {\r\n    color: var(--color-on-surface-secondary);\r\n    font-size: 1.2rem;\r\n    margin: 0.4rem 0;\r\n    transition: color 0.2s ease;\r\n}\r\n\r\nselect {\r\n    height: 3.2rem;\r\n    padding: 0 0.8rem;\r\n    font-size: 1.4rem;\r\n    border-radius: 0.2rem;\r\n    width: 100%;\r\n    border: 0.0625rem solid var(--color-border);\r\n    outline-color: var(--color-primary);\r\n    background-color: var(--color-surface);\r\n    color: var(--color-on-surface-text);\r\n    outline-width: 0.1rem;\r\n}\r\n\r\noption {\r\n    background-color: var(--color-background);\r\n}\r\n\r\n.filled {\r\n    background-color: var(--color-select-filled);\r\n    border: none;\r\n}\r\n\r\n.selected {\r\n    color: var(--color-primary);\r\n}\r\n\r\n.title-left {\r\n    grid-template-columns: 1fr auto;\r\n    grid-gap: 0.8rem;\r\n}\r\n\r\n.title-right {\r\n    grid-gap: 0.8rem;\r\n}\r\n\r\n.title-right .title {\r\n    grid-column: 2;\r\n    grid-row: 1;\r\n}\r\n\r\n.title-bottom .title {\r\n    grid-row: 2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCwyQ0FBMkM7SUFDM0MsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiIuLi91aS1jb21wb25lbnRzL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZS1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDAuNHJlbSAwO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuOHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xyXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLXRleHQpO1xyXG4gICAgb3V0bGluZS13aWR0aDogMC4xcmVtO1xyXG59XHJcblxyXG5vcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5maWxsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2VsZWN0LWZpbGxlZCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50aXRsZS1sZWZ0IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XHJcbiAgICBncmlkLWdhcDogMC44cmVtO1xyXG59XHJcblxyXG4udGl0bGUtcmlnaHQge1xyXG4gICAgZ3JpZC1nYXA6IDAuOHJlbTtcclxufVxyXG5cclxuLnRpdGxlLXJpZ2h0IC50aXRsZSB7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiAxO1xyXG59XHJcblxyXG4udGl0bGUtYm90dG9tIC50aXRsZSB7XHJcbiAgICBncmlkLXJvdzogMjtcclxufVxyXG4iXX0= */");

        /***/
    }),

    /***/
    "./src/modules/ui-components/components/select/select.component.ts":
    /*!*************************************************************************!*\
  !*** ./src/modules/ui-components/components/select/select.component.ts ***!
  \*************************************************************************/
    /*! exports provided: SelectComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
            return SelectComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _enums_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/Position */ "./src/modules/ui-components/enums/Position.ts");


        let SelectComponent = class SelectComponent {
            constructor() {
                this.tooltip = '';
                this.titlePosition = _enums_Position__WEBPACK_IMPORTED_MODULE_2__["Position"].TOP;
                this.labelFontSize = 1.2;
                this.onselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.isSelect = false;
            }

            handleChange(event) {
                this.onselect.emit(event.target.value);
                event.target.value = this.value;
            }

            toggleSelect() {
                this.isSelect = !this.isSelect;
            }

            get class() {
                return `title-${this.titlePosition}`;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], SelectComponent.prototype, "options", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], SelectComponent.prototype, "value", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], SelectComponent.prototype, "label", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], SelectComponent.prototype, "tooltip", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], SelectComponent.prototype, "filled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], SelectComponent.prototype, "disabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], SelectComponent.prototype, "titlePosition", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], SelectComponent.prototype, "labelFontSize", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], SelectComponent.prototype, "onselect", void 0);
        SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-select',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/select/select.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select.component.css */ "./src/modules/ui-components/components/select/select.component.css")).default]
            })
        ], SelectComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/tab-view/tab-view.component.ts":
    /*!*****************************************************************************!*\
  !*** ./src/modules/ui-components/components/tab-view/tab-view.component.ts ***!
  \*****************************************************************************/
    /*! exports provided: TabViewComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TabViewComponent", function () {
            return TabViewComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let TabViewComponent = class TabViewComponent {
            constructor() {
                this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleClick() {
                this.onSelect.emit();
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TabViewComponent.prototype, "active", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], TabViewComponent.prototype, "onSelect", void 0);
        TabViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-tab-view',
                template: `
        <div class="tab" [class.active]="active" (click)="handleClick()">
            <ng-content></ng-content>
        </div>
    `,
                styles: ["\n            .tab {\n                padding: 1.5rem 2rem 1.7rem 1.6rem;\n                width: max-content;\n                border-right: 0.1rem solid var(--color-border);\n                color: var(--color-on-surface-secondary);\n                transition: background-color 0.2s;\n                user-select: none;\n            }\n\n            .active {\n                background-color: var(--color-surface);\n                color: var(--color-primary);\n            }\n\n            .tab:hover:not(.active) {\n                background-color: var(--color-text-button-hover);\n            }\n        "]
            })
        ], TabViewComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/tab/tab.component.css":
    /*!********************************************************************!*\
  !*** ./src/modules/ui-components/components/tab/tab.component.css ***!
  \********************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = (".tab {\r\n    display: grid;\r\n    position: relative;\r\n    align-items: center;\r\n    color: var(--color-on-surface-secondary);\r\n    font-size: 1.6rem;\r\n    font-weight: 600;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    height: 100%;\r\n    transition: color 0.2s ease;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.tab:not(.disabled):hover {\r\n    color: var(--color-on-surface-text);\r\n}\r\n\r\n.active {\r\n    color: var(--color-on-surface-text);\r\n}\r\n\r\n.border {\r\n    height: 0.2rem;\r\n    background-color: var(--color-primary);\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.content {\r\n    padding: 0 1.6rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy90YWIvdGFiLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiIuLi91aS1jb21wb25lbnRzL2NvbXBvbmVudHMvdGFiL3RhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLXNlY29uZGFyeSk7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnRhYjpub3QoLmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZS10ZXh0KTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itb24tc3VyZmFjZS10ZXh0KTtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgICBoZWlnaHQ6IDAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDEuNnJlbTtcclxufVxyXG4iXX0= */");

        /***/
    }),

    /***/
    "./src/modules/ui-components/components/tab/tab.component.ts":
    /*!*******************************************************************!*\
  !*** ./src/modules/ui-components/components/tab/tab.component.ts ***!
  \*******************************************************************/
    /*! exports provided: TabComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
            return TabComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let TabComponent = class TabComponent {
            constructor() {
                this.onselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleClick() {
                if (!this.disabled) {
                    this.onselect.emit();
                }
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TabComponent.prototype, "active", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TabComponent.prototype, "disabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], TabComponent.prototype, "onselect", void 0);
        TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-tab',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/tab/tab.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab.component.css */ "./src/modules/ui-components/components/tab/tab.component.css")).default]
            })
        ], TabComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/textarea/textarea.component.css":
    /*!******************************************************************************!*\
  !*** ./src/modules/ui-components/components/textarea/textarea.component.css ***!
  \******************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = (".textarea {\n    display: grid;\n    grid-gap: 0.2rem;\n    font-size: 1.4rem;\n}\n\n.label {\n    font-size: 1.2rem;\n    color: var(--color-on-surface-secondary);\n}\n\n.active {\n    color: var(--color-primary);\n}\n\n.disabled {\n    background-color: var(--color-disable);\n}\n\ntextarea {\n    width: 100%;\n    height: 100%;\n    border-radius: 0.3rem;\n    border: 0.1rem solid var(--color-border);\n    font-size: 1.4rem;\n    outline-color: var(--color-primary);\n    box-sizing: border-box;\n    resize: none;\n    outline-width: 0.1rem;\n}\n\ntextarea:disabled {\n    color: #eee;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6Ii4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRhcmVhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAwLjJyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW9uLXN1cmZhY2Utc2Vjb25kYXJ5KTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRpc2FibGUpO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcmVzaXplOiBub25lO1xuICAgIG91dGxpbmUtd2lkdGg6IDAuMXJlbTtcbn1cblxudGV4dGFyZWE6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuIl19 */");

        /***/
    }),

    /***/
    "./src/modules/ui-components/components/textarea/textarea.component.ts":
    /*!*****************************************************************************!*\
  !*** ./src/modules/ui-components/components/textarea/textarea.component.ts ***!
  \*****************************************************************************/
    /*! exports provided: TextareaComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TextareaComponent", function () {
            return TextareaComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let TextareaComponent = class TextareaComponent {
            constructor() {
                this.value = '';
                this.onchange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleChange(event) {
                this.onchange.emit(event);
            }

            handleFocus() {
                this.isFocus = true;
            }

            handleBlur() {
                this.isFocus = false;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TextareaComponent.prototype, "value", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TextareaComponent.prototype, "label", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TextareaComponent.prototype, "disabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TextareaComponent.prototype, "rows", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TextareaComponent.prototype, "cols", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TextareaComponent.prototype, "readonly", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], TextareaComponent.prototype, "onchange", void 0);
        TextareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-textarea',
                template: `
        <div class="textarea">
            <div
                class="label"
                [class.active]="isFocus"
                [class.disabled]="disabled"
                *ngIf="label"
            >
                {{ label }}
            </div>
            <textarea
                [value]="value"
                [rows]="rows"
                [cols]="cols"
                [disabled]="disabled"
                [readOnly]="readonly"
                (input)="handleChange($event)"
                (focus)="handleFocus()"
                (blur)="handleBlur()"
            ></textarea>
        </div>
    `,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./textarea.component.css */ "./src/modules/ui-components/components/textarea/textarea.component.css")).default]
            })
        ], TextareaComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/toggle-button/toggle-button.component.css":
    /*!****************************************************************************************!*\
  !*** ./src/modules/ui-components/components/toggle-button/toggle-button.component.css ***!
  \****************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = (".toggle {\r\n    position: relative;\r\n    background-color: var(--color-toggle-background);\r\n    height: 3.2rem;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    font-size: 1.2rem;\r\n    border-radius: 8.5rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.toggle:not(.disabled):hover .state:not(.active) {\r\n    color: var(--color-primary);\r\n}\r\n\r\n.disabled .slider {\r\n    background-color: var(--color-key-9);\r\n}\r\n\r\n.states {\r\n    display: grid;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.state {\r\n    padding: 0.2rem 1.2rem;\r\n    margin: auto 0;\r\n    z-index: 1;\r\n    color: var(--color-on-surface-secondary);\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.state.active {\r\n    color: var(--color-background);\r\n}\r\n\r\n.slider {\r\n    background-color: var(--color-primary);\r\n    position: absolute;\r\n    margin: 0.2rem 0.2rem;\r\n    top: 0;\r\n    left: 0;\r\n    height: 2.8rem;\r\n    z-index: 0;\r\n    border-radius: 8.5rem;\r\n    transition: transform 0.4s, margin 0.1s;\r\n}\r\n\r\n.slider.toggled {\r\n    margin: 0.2rem -0.2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VpLWNvbXBvbmVudHMvY29tcG9uZW50cy90b2dnbGUtYnV0dG9uL3RvZ2dsZS1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnREFBZ0Q7SUFDaEQsY0FBYztJQUNkLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsVUFBVTtJQUNWLHdDQUF3QztJQUN4QyxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsTUFBTTtJQUNOLE9BQU87SUFDUCxjQUFjO0lBQ2QsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoiLi4vdWktY29tcG9uZW50cy9jb21wb25lbnRzL3RvZ2dsZS1idXR0b24vdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2dnbGUtYmFja2dyb3VuZCk7XHJcbiAgICBoZWlnaHQ6IDMuMnJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOC41cmVtO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi50b2dnbGU6bm90KC5kaXNhYmxlZCk6aG92ZXIgLnN0YXRlOm5vdCguYWN0aXZlKSB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWtleS05KTtcclxufVxyXG5cclxuLnN0YXRlcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3RhdGUge1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDEuMnJlbTtcclxuICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1vbi1zdXJmYWNlLXNlY29uZGFyeSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXRlLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDAuMnJlbSAwLjJyZW07XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOC41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMsIG1hcmdpbiAwLjFzO1xyXG59XHJcblxyXG4uc2xpZGVyLnRvZ2dsZWQge1xyXG4gICAgbWFyZ2luOiAwLjJyZW0gLTAuMnJlbTtcclxufVxyXG4iXX0= */");

        /***/
    }),

    /***/
    "./src/modules/ui-components/components/toggle-button/toggle-button.component.ts":
    /*!***************************************************************************************!*\
  !*** ./src/modules/ui-components/components/toggle-button/toggle-button.component.ts ***!
  \***************************************************************************************/
    /*! exports provided: ToggleButtonComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ToggleButtonComponent", function () {
            return ToggleButtonComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let ToggleButtonComponent = class ToggleButtonComponent {
            constructor(render) {
                this.render = render;
                this.disabled = false;
                this.onpress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            handleClick() {
                if (this.disabled === true) {
                    return;
                }
                this.onpress.emit(this.pressed);
                this.moveSlider();
            }

            ngOnChanges(changes) {
                if (changes.pressed && typeof this.pressed === 'boolean') {
                    this.moveSlider();
                }
            }

            moveSlider() {
                this.render.setStyle(this.sliderElement.nativeElement, 'transform', `translateX(${this.pressed ? this.stateElement.nativeElement.clientWidth : 0}px)`);
            }

            ngAfterViewInit() {
                this.moveSlider();
            }
        };
        ToggleButtonComponent.ctorParameters = () =;
    >
        [
            {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]}
        ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('state', {static: true})
        ], ToggleButtonComponent.prototype, "stateElement", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', {static: true})
        ], ToggleButtonComponent.prototype, "sliderElement", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ToggleButtonComponent.prototype, "pressed", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ToggleButtonComponent.prototype, "firstState", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ToggleButtonComponent.prototype, "secondState", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], ToggleButtonComponent.prototype, "disabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
        ], ToggleButtonComponent.prototype, "onpress", void 0);
        ToggleButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-toggle-button',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toggle-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/ui-components/components/toggle-button/toggle-button.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toggle-button.component.css */ "./src/modules/ui-components/components/toggle-button/toggle-button.component.css")).default]
            })
        ], ToggleButtonComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/components/tooltip/tooltip.component.ts":
    /*!***************************************************************************!*\
  !*** ./src/modules/ui-components/components/tooltip/tooltip.component.ts ***!
  \***************************************************************************/
    /*! exports provided: TooltipComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
            return TooltipComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let TooltipComponent = class TooltipComponent {
            constructor(elementReference) {
                this.elementReference = elementReference;
                this.offsetX = 0;
                this.offsetY = 0;
            }

            get transform() {
                const height = this.elementReference.nativeElement.offsetHeight;
                return `
            translate(${this.x + this.offsetX}px, ${this.y + this.offsetY}px)
        `;
            }
        };
        TooltipComponent.ctorParameters = () =;
    >
        [
            {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]}
        ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TooltipComponent.prototype, "x", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TooltipComponent.prototype, "y", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TooltipComponent.prototype, "offsetX", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
        ], TooltipComponent.prototype, "offsetY", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.transform')
        ], TooltipComponent.prototype, "transform", null);
        TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'skr-tooltip',
                template: `
        <ng-content></ng-content>
    `,
                styles: ["\n            :host {\n                position: absolute;\n                z-index: 3;\n\n                padding: 0.8rem;\n                border-radius: 0.2rem;\n\n                background-color: var(--color-surface);\n\n                user-select: none;\n                pointer-events: none;\n\n                box-shadow: 0 0.2rem 0.8rem var(--color-big-shadow);\n            }\n        "]
            })
        ], TooltipComponent);


        /***/
    }),

    /***/
    "./src/modules/ui-components/enums/ColorScheme.ts":
    /*!********************************************************!*\
  !*** ./src/modules/ui-components/enums/ColorScheme.ts ***!
  \********************************************************/
    /*! exports provided: ColorScheme */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ColorScheme", function () {
            return ColorScheme;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        var ColorScheme;
        (function (ColorScheme) {
            ColorScheme["light"] = "light";
            ColorScheme["blue"] = "blue";
            ColorScheme["dark"] = "dark";
        })(ColorScheme || (ColorScheme = {}));


        /***/
    }),

    /***/
    "./src/modules/ui-components/enums/InputType.ts":
    /*!******************************************************!*\
  !*** ./src/modules/ui-components/enums/InputType.ts ***!
  \******************************************************/
    /*! exports provided: InputType */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "InputType", function () {
            return InputType;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        var InputType;
        (function (InputType) {
            InputType["TEXT"] = "text";
            InputType["NUMBER"] = "number";
            InputType["PASSWORD"] = "password";
        })(InputType || (InputType = {}));


        /***/
    }),

    /***/
    "./src/modules/ui-components/enums/Position.ts":
    /*!*****************************************************!*\
  !*** ./src/modules/ui-components/enums/Position.ts ***!
  \*****************************************************/
    /*! exports provided: Position */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Position", function () {
            return Position;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        var Position;
        (function (Position) {
            Position["LEFT"] = "left";
            Position["RIGHT"] = "right";
            Position["TOP"] = "top";
            Position["BOTTOM"] = "bottom";
        })(Position || (Position = {}));


        /***/
    }),

    /***/
    "./src/modules/ui-components/services/id-generator.service.ts":
    /*!********************************************************************!*\
  !*** ./src/modules/ui-components/services/id-generator.service.ts ***!
  \********************************************************************/
    /*! exports provided: IdGeneratorService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "IdGeneratorService", function () {
            return IdGeneratorService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
        /* harmony import */
        var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);


        let IdGeneratorService = class IdGeneratorService {
            getID() {
                return uuid__WEBPACK_IMPORTED_MODULE_2__["v4"]();
            }
        };
        IdGeneratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root',
            })
        ], IdGeneratorService);


        /***/
    }),

    /***/
    "./src/modules/ui-components/services/modal.service.ts":
    /*!*************************************************************!*\
  !*** ./src/modules/ui-components/services/modal.service.ts ***!
  \*************************************************************/
    /*! exports provided: ModalService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ModalService", function () {
            return ModalService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let ModalService = class ModalService {
            constructor() {
                this.modals = new Map();
            }

            add(modal) {
                this.modals.set(modal.id, modal);
            }

            remove(id) {
                this.modals.delete(id);
            }

            open(id) {
                const modal = this.modals.get(id);
                modal.open();
            }

            close(id) {
                const modal = this.modals.get(id);
                modal.close();
            }
        };
        ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root',
            })
        ], ModalService);


        /***/
    }),

    /***/
    "./src/modules/ui-components/ui-components.module.ts":
    /*!***********************************************************!*\
  !*** ./src/modules/ui-components/ui-components.module.ts ***!
  \***********************************************************/
    /*! exports provided: UiComponentsModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "UiComponentsModule", function () {
            return UiComponentsModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
        /* harmony import */
        var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
        /* harmony import */
        var primeng_dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */
        var _components_block_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/block/block.component */ "./src/modules/ui-components/components/block/block.component.ts");
        /* harmony import */
        var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/block-header/block-header.component */ "./src/modules/ui-components/components/block-header/block-header.component.ts");
        /* harmony import */
        var _components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/button/button.component */ "./src/modules/ui-components/components/button/button.component.ts");
        /* harmony import */
        var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ "./src/modules/ui-components/components/checkbox/checkbox.component.ts");
        /* harmony import */
        var _components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/color-picker/color-picker.component */ "./src/modules/ui-components/components/color-picker/color-picker.component.ts");
        /* harmony import */
        var _components_input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/input/input.component */ "./src/modules/ui-components/components/input/input.component.ts");
        /* harmony import */
        var _components_select_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/select/select.component */ "./src/modules/ui-components/components/select/select.component.ts");
        /* harmony import */
        var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tab/tab.component */ "./src/modules/ui-components/components/tab/tab.component.ts");
        /* harmony import */
        var _components_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/toggle-button/toggle-button.component */ "./src/modules/ui-components/components/toggle-button/toggle-button.component.ts");
        /* harmony import */
        var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tooltip/tooltip.component */ "./src/modules/ui-components/components/tooltip/tooltip.component.ts");
        /* harmony import */
        var _components_tab_view_tab_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tab-view/tab-view.component */ "./src/modules/ui-components/components/tab-view/tab-view.component.ts");
        /* harmony import */
        var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/list-item/list-item.component */ "./src/modules/ui-components/components/list-item/list-item.component.ts");
        /* harmony import */
        var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dropdown/dropdown.component */ "./src/modules/ui-components/components/dropdown/dropdown.component.ts");
        /* harmony import */
        var _components_color_scheme_color_scheme_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/color-scheme/color-scheme.component */ "./src/modules/ui-components/components/color-scheme/color-scheme.component.ts");
        /* harmony import */
        var _components_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/modal-footer/modal-footer.component */ "./src/modules/ui-components/components/modal-footer/modal-footer.component.ts");
        /* harmony import */
        var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/modules/ui-components/components/modal/modal.component.ts");
        /* harmony import */
        var _icons_icons_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../icons/icons.module */ "./src/modules/icons/icons.module.ts");
        /* harmony import */
        var _components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/textarea/textarea.component */ "./src/modules/ui-components/components/textarea/textarea.component.ts");
        /* harmony import */
        var _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/file-upload/file-upload.component */ "./src/modules/ui-components/components/file-upload/file-upload.component.ts");


        let UiComponentsModule = class UiComponentsModule {
        };
        UiComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_4__["DialogModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_21__["IconsModule"]],
                declarations: [
                    _components_block_block_component__WEBPACK_IMPORTED_MODULE_5__["BlockComponent"],
                    _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_6__["BlockHeaderComponent"],
                    _components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                    _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"],
                    _components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_9__["ColorPickerComponent"],
                    _components_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"],
                    _components_select_select_component__WEBPACK_IMPORTED_MODULE_11__["SelectComponent"],
                    _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_12__["TabComponent"],
                    _components_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_13__["ToggleButtonComponent"],
                    _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_14__["TooltipComponent"],
                    _components_tab_view_tab_view_component__WEBPACK_IMPORTED_MODULE_15__["TabViewComponent"],
                    _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__["ListItemComponent"],
                    _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["DropdownComponent"],
                    _components_color_scheme_color_scheme_component__WEBPACK_IMPORTED_MODULE_18__["ColorSchemeComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__["ModalComponent"],
                    _components_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_19__["ModalFooterComponent"],
                    _components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_22__["TextareaComponent"],
                    _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_23__["FileUploadComponent"],
                ],
                exports: [
                    _components_block_block_component__WEBPACK_IMPORTED_MODULE_5__["BlockComponent"],
                    _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_6__["BlockHeaderComponent"],
                    _components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                    _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"],
                    _components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_9__["ColorPickerComponent"],
                    _components_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"],
                    _components_select_select_component__WEBPACK_IMPORTED_MODULE_11__["SelectComponent"],
                    _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_12__["TabComponent"],
                    _components_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_13__["ToggleButtonComponent"],
                    _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_14__["TooltipComponent"],
                    _components_tab_view_tab_view_component__WEBPACK_IMPORTED_MODULE_15__["TabViewComponent"],
                    _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__["ListItemComponent"],
                    _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["DropdownComponent"],
                    _components_color_scheme_color_scheme_component__WEBPACK_IMPORTED_MODULE_18__["ColorSchemeComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__["ModalComponent"],
                    _components_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_19__["ModalFooterComponent"],
                    _components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_22__["TextareaComponent"],
                    _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_23__["FileUploadComponent"],
                ],
            })
        ], UiComponentsModule);


        /***/
    }),

    /***/
    0:
    /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(/*! /Users/lmglk/Projects/SpbSeekerAdminPanel/src/main.ts */"./src/main.ts");


        /***/
    })

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map