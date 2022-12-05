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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const app = (0, express_1.default)();
const port = 3000;
const domain = 'localhost';
const client = (0, redis_1.createClient)({
    url: 'redis://qwq.sh:6379'
});
client.on('error', (err) => {
    console.log('Redis Client Error ' + err);
});
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `*`);
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    console.log('Connected to redis.');
    console.log(`Server running at http://${domain}:${port}`);
}));
app.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const idSet = JSON.parse((_a = yield client.get('idSet')) !== null && _a !== void 0 ? _a : '[]');
    console.log(idSet);
    idSet.push(randomId);
    yield client.set('idSet', JSON.stringify(idSet));
    res.send(randomId);
}));
//# sourceMappingURL=index.js.map