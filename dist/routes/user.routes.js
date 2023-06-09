"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// import axios from '@'
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    const a = function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fetch('https://fakestoreapi.com/products');
            // console.log(res);
            const data = yield result.json();
            res.send(data);
        });
    };
    a();
});
