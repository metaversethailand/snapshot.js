'use strict';

var fetch$1 = require('cross-fetch');
var bytes = require('@ethersproject/bytes');
var bignumber = require('@ethersproject/bignumber');
var strings = require('@ethersproject/strings');
var abi = require('@ethersproject/abi');
var contracts = require('@ethersproject/contracts');
var jsonToGraphqlQuery = require('json-to-graphql-query');
var Ajv = require('ajv');
var addFormats = require('ajv-formats');
var set = require('lodash.set');
var providers$1 = require('@ethersproject/providers');
var wallet = require('@ethersproject/wallet');
var hash = require('@ethersproject/hash');
var address = require('@ethersproject/address');
var bignumber$1 = require('@ethersproject/bignumber/lib/bignumber');
var constants = require('@ethersproject/constants');
var solidity = require('@ethersproject/solidity');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch$1);
var Ajv__default = /*#__PURE__*/_interopDefaultLegacy(Ajv);
var addFormats__default = /*#__PURE__*/_interopDefaultLegacy(addFormats);
var set__default = /*#__PURE__*/_interopDefaultLegacy(set);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function signMessage(web3, msg, address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    msg = bytes.hexlify(new Buffer(msg, 'utf8'));
                    return [4 /*yield*/, web3.send('personal_sign', [msg, address])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getBlockNumber(provider) {
    return __awaiter(this, void 0, void 0, function () {
        var blockNumber;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, provider.getBlockNumber()];
                case 1:
                    blockNumber = _a.sent();
                    return [2 /*return*/, parseInt(blockNumber)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, Promise.reject()];
                case 3: return [2 /*return*/];
            }
        });
    });
}

var hubs = [
	"https://hub.snapshot.org",
	"https://testnet.snapshot.org"
];

var version = "0.1.3";

var Client = /** @class */ (function () {
    function Client(address) {
        if (address === void 0) { address = hubs[0]; }
        this.address = address;
    }
    Client.prototype.request = function (command, body) {
        var url = this.address + "/api/" + command;
        var init;
        if (body) {
            init = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            };
        }
        return new Promise(function (resolve, reject) {
            fetch__default["default"](url, init)
                .then(function (res) {
                if (res.ok)
                    return resolve(res.json());
                throw res;
            })
                .catch(function (e) { return e.json().then(function (json) { return reject(json); }); });
        });
    };
    Client.prototype.send = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request('message', msg)];
            });
        });
    };
    Client.prototype.getSpaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request('spaces')];
            });
        });
    };
    Client.prototype.broadcast = function (web3, account, space, type, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var msg, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        msg = {
                            address: account,
                            msg: JSON.stringify({
                                version: version,
                                timestamp: (Date.now() / 1e3).toFixed(),
                                space: space,
                                type: type,
                                payload: payload
                            })
                        };
                        _a = msg;
                        return [4 /*yield*/, signMessage(web3, msg.msg, account)];
                    case 1:
                        _a.sig = _b.sent();
                        return [4 /*yield*/, this.send(msg)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    Client.prototype.vote = function (web3, address, space, _a) {
        var proposal = _a.proposal, choice = _a.choice, _b = _a.metadata, metadata = _b === void 0 ? {} : _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                return [2 /*return*/, this.broadcast(web3, address, space, 'vote', {
                        proposal: proposal,
                        choice: choice,
                        metadata: metadata
                    })];
            });
        });
    };
    Client.prototype.proposal = function (web3, address, space, _a) {
        var name = _a.name, body = _a.body, choices = _a.choices, start = _a.start, end = _a.end, snapshot = _a.snapshot, _b = _a.type, type = _b === void 0 ? 'single-choice' : _b, _c = _a.metadata, metadata = _c === void 0 ? {} : _c;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_d) {
                return [2 /*return*/, this.broadcast(web3, address, space, 'proposal', {
                        name: name,
                        body: body,
                        choices: choices,
                        start: start,
                        end: end,
                        snapshot: snapshot,
                        type: type,
                        metadata: metadata
                    })];
            });
        });
    };
    Client.prototype.deleteProposal = function (web3, address, space, _a) {
        var proposal = _a.proposal;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.broadcast(web3, address, space, 'delete-proposal', {
                        proposal: proposal
                    })];
            });
        });
    };
    Client.prototype.settings = function (web3, address, space, settings) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.broadcast(web3, address, space, 'settings', settings)];
            });
        });
    };
    return Client;
}());

var Multicaller = /** @class */ (function () {
    function Multicaller(network, provider, abi, options) {
        this.options = {};
        this.calls = [];
        this.paths = [];
        this.network = network;
        this.provider = provider;
        this.abi = abi;
        this.options = options || {};
    }
    Multicaller.prototype.call = function (path, address, fn, params) {
        this.calls.push([address, fn, params]);
        this.paths.push(path);
        return this;
    };
    Multicaller.prototype.execute = function (from) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = from || {};
                        return [4 /*yield*/, multicall(this.network, this.provider, this.abi, this.calls, this.options)];
                    case 1:
                        result = _a.sent();
                        result.forEach(function (r, i) { return set__default["default"](obj, _this.paths[i], r.length > 1 ? r : r[0]); });
                        this.calls = [];
                        this.paths = [];
                        return [2 /*return*/, obj];
                }
            });
        });
    };
    return Multicaller;
}());

var wanchain = {
	key: "wanchain",
	name: "Wanchain",
	chainId: 1,
	network: "mainnet",
	multicall: "0xba5934ab3056fca1fa458d30fbb3810c3eb5145f",
	rpc: [
		"https://gwan-ssl.wandevs.org:56891"
	],
	ws: [
		"wss://api.wanchain.org:8443/ws/v3/ddd16770c68f30350a21114802d5418eafe039b722de52b488e7eee1ee2cd73f"
	],
	explorer: "https://www.wanscan.org"
};
var networks = {
	"1": {
	key: "1",
	name: "Ethereum Mainnet",
	chainId: 1,
	network: "homestead",
	multicall: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
	rpc: [
		{
			url: "https://api-geth-archive.ankr.com",
			user: "balancer_user",
			password: "balancerAnkr20201015"
		},
		"https://eth-archival.gateway.pokt.network/v1/5f76124fb90218002e9ce985",
		"https://eth-mainnet.alchemyapi.io/v2/4bdDVB5QAaorY2UE-GBUbM2yQB3QJqzv",
		"https://cloudflare-eth.com"
	],
	ws: [
		"wss://eth-mainnet.ws.alchemyapi.io/v2/4bdDVB5QAaorY2UE-GBUbM2yQB3QJqzv"
	],
	explorer: "https://etherscan.io"
},
	"3": {
	key: "3",
	name: "Ethereum Testnet Ropsten",
	shortName: "Ropsten",
	chainId: 3,
	network: "ropsten",
	multicall: "0x53c43764255c17bd724f74c4ef150724ac50a3ed",
	rpc: [
		"https://eth-ropsten.alchemyapi.io/v2/QzGz6gdkpTyDzebi3PjxIaKO7bDTGnSy"
	],
	explorer: "https://ropsten.etherscan.io"
},
	"4": {
	key: "4",
	name: "Ethereum Testnet Rinkeby",
	shortName: "Rinkeby",
	chainId: 4,
	network: "rinkeby",
	multicall: "0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821",
	rpc: [
		"https://eth-rinkeby.alchemyapi.io/v2/ugiPEBqMebLQbjro42kalZ1h4StpW_fR",
		"https://eth-rinkeby.gateway.pokt.network/v1/5f76124fb90218002e9ce985"
	],
	ws: [
		"wss://eth-rinkeby.ws.alchemyapi.io/v2/twReQE9Px03E-E_N_Fbb3OVF7YgHxoGq"
	],
	explorer: "https://rinkeby.etherscan.io"
},
	"5": {
	key: "5",
	name: "Ethereum Testnet Görli",
	shortName: "Görli",
	chainId: 5,
	network: "goerli",
	multicall: "0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e",
	rpc: [
		"https://eth-goerli.alchemyapi.io/v2/v4nqH_J-J3STit45Mm07TxuYexMHQsYZ"
	],
	explorer: "https://goerli.etherscan.io"
},
	"7": {
	key: "7",
	name: "ThaiChain",
	chainId: 7,
	network: "mainnet",
	multicall: "0xB9cb900E526e7Ad32A2f26f1fF6Dee63350fcDc5",
	rpc: [
		"https://rpc.dome.cloud"
	],
	ws: [
		"wss://ws.dome.cloud"
	],
	explorer: "https://exp.tch.in.th"
},
	"17": {
	key: "17",
	name: "MetaChain",
	shortName: "meta",
	chainId: 17,
	network: "Mainnet",
	multicall: "0x5086E574190e542711b7ebD26d3cdB279d2e4D4F",
	rpc: [
		"https://rpc1.metachain.asia/"
	],
	explorer: "https://exp.metachain.asia"
},
	"30": {
	key: "30",
	name: "RSK Mainnet",
	chainId: 30,
	network: "rsk mainnet",
	multicall: "0x4eeebb5580769ba6d26bfd07be636300076d1831",
	rpc: [
		"https://public-node.rsk.co"
	],
	explorer: "https://explorer.rsk.co"
},
	"31": {
	key: "31",
	name: "RSK Testnet",
	chainId: 31,
	network: "rsk testnet",
	multicall: "0x4eeebb5580769ba6d26bfd07be636300076d1831",
	rpc: [
		"https://public-node.testnet.rsk.co"
	],
	explorer: "https://explorer.testnet.rsk.co"
},
	"42": {
	key: "42",
	name: "Ethereum Testnet Kovan",
	shortName: "Kovan",
	chainId: 42,
	network: "kovan",
	multicall: "0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a",
	rpc: [
		"https://eth-kovan.alchemyapi.io/v2/s96TIUFYg0LuddgpmafA040ZyUaZbrpM",
		"https://poa-kovan.gateway.pokt.network/v1/5f76124fb90218002e9ce985"
	],
	ws: [
		"wss://eth-kovan.ws.alchemyapi.io/v2/QCsM2iU0bQ49eGDmZ7-Y--Wpu0lVWXSO"
	],
	explorer: "https://kovan.etherscan.io"
},
	"50": {
	key: "50",
	name: "XinFin MainNet",
	shortName: "XDC",
	chainId: 50,
	network: "mainnet",
	multicall: "",
	rpc: [
		"https://rpc.xinfin.network"
	],
	ws: [
		"wss://ws.xinfin.network"
	],
	explorer: "http://explorer.xinfin.network/"
},
	"56": {
	key: "56",
	name: "Binance Smart Chain Mainnet",
	shortName: "BSC",
	chainId: 56,
	network: "mainnet",
	multicall: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
	rpc: [
		"https://speedy-nodes-nyc.moralis.io/b9aed21e7bb7bdeb35972c9a/bsc/mainnet/archive",
		"https://apis.ankr.com/c0d871dd3c6d4529b01c9362a9b79e89/6106d4a3ec1d1bcc87ec72158f8fd089/binance/archive/main",
		"https://bsc.getblock.io/mainnet/?api_key=91f8195f-bf46-488f-846a-73d6853790e7",
		"https://bsc-private-dataseed1.nariox.org",
		"https://bsc-private-dataseed2.nariox.org",
		"https://bsc-dataseed1.ninicoin.io",
		"https://bsc-dataseed1.binance.org",
		"https://bsc-dataseed2.binance.org",
		"https://bsc-dataseed3.binance.org"
	],
	explorer: "https://bscscan.com"
},
	"61": {
	key: "61",
	name: "Ethereum Classic Mainnet",
	shortName: "Ethereum Classic",
	chainId: 61,
	network: "mainnet",
	multicall: "",
	rpc: [
		"https://ethereumclassic.network"
	],
	explorer: "https://blockscout.com/etc/mainnet"
},
	"65": {
	key: "65",
	name: "OKExChain Testnet",
	shortName: "OEC Testnet",
	chainId: 65,
	network: "oec testnet",
	multicall: "0x23Daae12B7f82b1f0A276cD4f49825DE940B6374",
	rpc: [
		"https://exchaintestrpc.okex.org"
	],
	ws: [
		"wss://exchaintestws.okex.org:8443"
	],
	explorer: "https://www.oklink.com/okexchain-test"
},
	"66": {
	key: "66",
	name: "OKExChain Mainnet",
	shortName: "OEC Mainnet",
	chainId: 66,
	network: "oec mainnet",
	multicall: "0x23Daae12B7f82b1f0A276cD4f49825DE940B6374",
	rpc: [
		"https://exchainrpc.okex.org"
	],
	ws: [
		"wss://exchainws.okex.org:8443"
	],
	explorer: "https://www.oklink.com/okexchain"
},
	"70": {
	key: "70",
	name: "Hoo Smart Chain Mainnet",
	shortName: "hsc",
	chainId: 70,
	network: "Mainnet",
	multicall: "0xd4b794b89baccb70ef851830099bee4d69f19ebc",
	rpc: [
		"https://http-mainnet2.hoosmartchain.com"
	],
	ws: [
		"wss://ws-mainnet2.hoosmartchain.com"
	],
	explorer: "https://hscscan.com"
},
	"80": {
	key: "80",
	name: "GeneChain",
	chainId: 80,
	network: "Mainnet",
	multicall: "0x9e6ed491171A0D9089892aA5F14800f9f32038eb",
	rpc: [
		"https://rpc.genechain.io"
	],
	explorer: "https://scan.genechain.io"
},
	"82": {
	key: "82",
	name: "Meter Mainnet",
	shortName: "Meter",
	chainId: 82,
	network: "mainnet",
	multicall: "0x579De77CAEd0614e3b158cb738fcD5131B9719Ae",
	rpc: [
		"https://rpc.meter.io"
	],
	explorer: "https://scan.meter.io"
},
	"97": {
	key: "97",
	name: "Binance Smart Chain Testnet",
	shortName: "BSC Testnet",
	chainId: 97,
	network: "testnet",
	multicall: "0x8b54247c6BAe96A6ccAFa468ebae96c4D7445e46",
	rpc: [
		"https://speedy-nodes-nyc.moralis.io/f2963e29bec0de5787da3164/bsc/testnet/archive",
		"https://data-seed-prebsc-1-s1.binance.org:8545"
	],
	explorer: "https://testnet.bscscan.com"
},
	"99": {
	key: "99",
	name: "POA Core",
	shortName: "POA",
	chainId: 99,
	network: "mainnet",
	multicall: "",
	rpc: [
		"https://core.poa.network"
	],
	explorer: "https://blockscout.com/poa/core/"
},
	"100": {
	key: "100",
	name: "xDAI Chain",
	shortName: "xDAI",
	chainId: 100,
	network: "mainnet",
	multicall: "0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a",
	rpc: [
		"https://xdai-archive.blockscout.com",
		"https://poa-xdai.gateway.pokt.network/v1/5f76124fb90218002e9ce985"
	],
	ws: [
		"wss://rpc.xdaichain.com/wss"
	],
	explorer: "https://blockscout.com/poa/xdai"
},
	"108": {
	key: "108",
	name: "Thundercore Mainnet",
	chainId: 108,
	network: "mainnet",
	multicall: "",
	rpc: [
		"https://mainnet-rpc.thundercore.com"
	],
	explorer: "https://scan.thundercore.com"
},
	"122": {
	key: "122",
	name: "Fuse Mainnet",
	shortName: "Fuse",
	chainId: 122,
	network: "mainnet",
	multicall: "0x7a59441fb06666F6d2D766393d876945D06a169c",
	rpc: [
		"https://oefusefull1.liquify.info/"
	],
	explorer: "https://explorer.fuse.io"
},
	"128": {
	key: "128",
	name: "Huobi Eco Chain Mainnet",
	shortName: "heco",
	chainId: 128,
	network: "Mainnet",
	multicall: "0x37ab26db3df780e7026f3e767f65efb739f48d8e",
	rpc: [
		"https://pub001.hg.network/rpc"
	],
	ws: [
		"wss://pub001.hg.network/ws"
	],
	explorer: "https://hecoinfo.com"
},
	"137": {
	key: "137",
	name: "Polygon Mainnet",
	shortName: "Polygon",
	chainId: 137,
	network: "mainnet",
	multicall: "0xCBca837161be50EfA5925bB9Cc77406468e76751",
	rpc: [
		"https://speedy-nodes-nyc.moralis.io/f2963e29bec0de5787da3164/polygon/mainnet/archive",
		"https://rpc-mainnet.maticvigil.com/v1/1cfd7598e5ba6dcf0b4db58e8be484badc6ea08e",
		"https://speedy-nodes-nyc.moralis.io/b9aed21e7bb7bdeb35972c9a/polygon/mainnet/archive"
	],
	ws: [
		"wss://ws-mainnet.matic.network"
	],
	explorer: "https://polygonscan.com"
},
	"138": {
	key: "138",
	name: "Kardiachain Mainnet",
	shortName: "Kardiachain",
	chainId: 138,
	network: "mainnet",
	multicall: "0xb7B85166F948838F5Fd6Fc80a6B933B81Dec7891",
	rpc: [
		"https://rpc.kardiachain.io"
	],
	explorer: "https://explorer.kardiachain.io"
},
	"246": {
	key: "246",
	name: "Energy Web Chain",
	shortName: "EWC",
	chainId: 246,
	network: "mainnet",
	multicall: "0x0767F26d0D568aB61A98b279C0b28a4164A6f05e",
	rpc: [
		"https://voting-rpc.carbonswap.exchange"
	],
	explorer: "https://explorer.energyweb.org"
},
	"250": {
	key: "250",
	name: "Fantom Opera",
	shortName: "fantom",
	chainId: 250,
	network: "Mainnet",
	multicall: "0x7f6A10218264a22B4309F3896745687E712962a0",
	rpc: [
		"https://rpc.ftm.tools",
		"https://rpcapi.fantom.network"
	],
	explorer: "https://ftmscan.com"
},
	"256": {
	key: "256",
	name: "Huobi Eco Chain Testnet",
	shortName: "heco",
	chainId: 256,
	network: "testnet",
	multicall: "0xC33994Eb943c61a8a59a918E2de65e03e4e385E0",
	rpc: [
		"https://http-testnet.hecochain.com"
	],
	ws: [
		"wss://ws-testnet.hecochain.com"
	],
	explorer: "https://testnet.hecoinfo.com"
},
	"321": {
	key: "321",
	name: "KCC Mainnet",
	shortName: "KCC",
	chainId: 321,
	network: "mainnet",
	multicall: "0xa64D6AFb48225BDA3259246cfb418c0b91de6D7a",
	rpc: [
		"https://rpc-mainnet.kcc.network"
	],
	ws: [
		"wss://rpc-ws-mainnet.kcc.network"
	],
	explorer: "https://explorer.kcc.io"
},
	"499": {
	key: "499",
	name: "Rupaya",
	shortName: "RUPX",
	chainId: 499,
	network: "mainnet",
	multicall: "0x7955FF653FfDBf13056FeAe227f655CfF5C194D5",
	rpc: [
		"https://rpc.rupx.io"
	],
	ws: [
		"wss://ws.rupx.io"
	],
	explorer: "http://scan.rupx.io"
},
	"1287": {
	key: "1287",
	name: "Moonbase Alpha TestNet",
	shortName: "Moonbase",
	chainId: 1287,
	network: "testnet",
	multicall: "0xD7bA481DE7fB53A7a29641c43232B09e5D9CAe7b",
	rpc: [
		"https://rpc.testnet.moonbeam.network"
	],
	explorer: "https://moonbase-blockscout.testnet.moonbeam.network/"
},
	"2109": {
	key: "2109",
	name: "Avalanche",
	chainId: 43114,
	network: "mainnet",
	multicall: "0x7E9985aE4C8248fdB07607648406a48C76e9e7eD",
	rpc: [
		"https://api.avax.network/ext/bc/C/rpc"
	],
	explorer: "https://cchain.explorer.avax.network"
},
	"4689": {
	key: "4689",
	name: "IoTeX Mainnet",
	shortName: "IoTeX",
	chainId: 4689,
	network: "mainnet",
	multicall: "0x9c8B105c94282CDB0F3ecF27e3cfA96A35c07be6",
	rpc: [
		"https://babel-api.mainnet.iotex.io"
	],
	explorer: "https://iotexscan.io"
},
	"4690": {
	key: "4690",
	name: "IoTeX Testnet",
	shortName: "IoTeX",
	chainId: 4690,
	network: "testnet",
	multicall: "0x30aE8783d26aBE7Fbb9d83549CCb7430AE4A301F",
	rpc: [
		"https://babel-api.testnet.iotex.io"
	],
	explorer: "https://testnet.iotexscan.io"
},
	"32659": {
	key: "32659",
	name: "Fusion Mainnet",
	chainId: 32659,
	network: "mainnet",
	multicall: "",
	rpc: [
		"https://vote.anyswap.exchange/mainnet"
	],
	ws: [
		"wss://mainnetpublicgateway1.fusionnetwork.io:10001"
	],
	explorer: "https://fsnex.com"
},
	"42220": {
	key: "42220",
	name: "Celo Mainnet",
	shortName: "Celo",
	chainId: 42220,
	network: "mainnet",
	multicall: "0xb8d0d2C1391eeB350d2Cd39EfABBaaEC297368D9",
	rpc: [
		"https://celo-mainnet--rpc.datahub.figment.io/apikey/e892a66dc36e4d2d98a5d6406d609796/"
	],
	explorer: "https://explorer.celo.org"
},
	"80001": {
	key: "80001",
	name: "Matic Mumbai",
	chainId: 80001,
	network: "testnet",
	multicall: "0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc",
	rpc: [
		"https://speedy-nodes-nyc.moralis.io/f2963e29bec0de5787da3164/polygon/mumbai/archive",
		"https://rpc-mumbai.matic.today"
	],
	ws: [
		"wss://ws-mumbai.matic.today"
	],
	explorer: ""
},
	"1666600000": {
	key: "1666600000",
	name: "Harmony Mainnet",
	shortName: "HarmonyMainnet",
	chainId: 1666600000,
	network: "mainnet",
	multicall: "0x9c31392D2e0229dC4Aa250F043d46B9E82074BF8",
	rpc: [
		"https://a.api.s0.t.hmny.io"
	],
	ws: [
		"wss://ws.s0.t.hmny.io"
	],
	explorer: "https://explorer.harmony.one"
},
	"1666700000": {
	key: "1666700000",
	name: "Harmony Testnet",
	shortName: "HarmonyTestnet",
	chainId: 1666700000,
	network: "testnet",
	multicall: "0x9923589503Fd205feE3d367DDFF2378f0F7dD2d4",
	rpc: [
		"https://api.s0.b.hmny.io"
	],
	ws: [
		"wss://ws.s0.b.hmny.io"
	],
	explorer: "https://explorer.pops.one"
},
	wanchain: wanchain
};

var providers = {};
function getProvider(network) {
    var url = networks[network].rpc[0];
    if (!providers[network])
        providers[network] = new providers$1.StaticJsonRpcProvider(url);
    return providers[network];
}

function validate$1(author, space, proposal, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var strategies, onlyMembers, minScore, members, scores, totalScore;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    strategies = options.strategies || space.strategies;
                    onlyMembers = options.onlyMembers || ((_a = space.filters) === null || _a === void 0 ? void 0 : _a.onlyMembers);
                    minScore = options.minScore || ((_b = space.filters) === null || _b === void 0 ? void 0 : _b.minScore);
                    members = (space.members || []).map(function (address) { return address.toLowerCase(); });
                    if (members.includes(author.toLowerCase()))
                        return [2 /*return*/, true];
                    if (onlyMembers)
                        return [2 /*return*/, false];
                    if (!minScore) return [3 /*break*/, 2];
                    return [4 /*yield*/, getScores(space.id || space.key, strategies, space.network, '', [author])];
                case 1:
                    scores = _c.sent();
                    totalScore = scores
                        .map(function (score) { return Object.values(score).reduce(function (a, b) { return a + b; }, 0); })
                        .reduce(function (a, b) { return a + b; }, 0);
                    if (totalScore < minScore)
                        return [2 /*return*/, false];
                    _c.label = 2;
                case 2: return [2 /*return*/, true];
            }
        });
    });
}

/**
 * Aave Space Validation proposal validation uses:
 *  - Proposition power of GovernanceStrategy contract
 *  - Other active Aave Snapshot voting strategies
 *
 * The current validation implementation mutates the "strategies" field of the space
 * to be able to use proposition power instead of voting power for "aave-governance-power".
 *
 */
function validate(author, space, proposal, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var onlyMembers, minScore, members, strategies, aaveGovernanceStrategyIndex, scores, totalScore;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    onlyMembers = options.onlyMembers || ((_a = space.filters) === null || _a === void 0 ? void 0 : _a.onlyMembers);
                    minScore = options.minScore || ((_b = space.filters) === null || _b === void 0 ? void 0 : _b.minScore);
                    members = (space.members || []).map(function (address) { return address.toLowerCase(); });
                    strategies = __spreadArrays(space.strategies);
                    aaveGovernanceStrategyIndex = strategies.findIndex(function (_a) {
                        var name = _a.name;
                        return name === 'aave-governance-power';
                    });
                    // Use the proposition power instead of voting power
                    if (aaveGovernanceStrategyIndex >= 0) {
                        strategies[aaveGovernanceStrategyIndex].params.powerType = 'proposition';
                    }
                    if (members.includes(author.toLowerCase()))
                        return [2 /*return*/, true];
                    if (onlyMembers)
                        return [2 /*return*/, false];
                    if (!minScore) return [3 /*break*/, 2];
                    return [4 /*yield*/, getScores(space.id || space.key, strategies, space.network, '', [author])];
                case 1:
                    scores = _c.sent();
                    totalScore = scores
                        .map(function (score) { return Object.values(score).reduce(function (a, b) { return a + b; }, 0); })
                        .reduce(function (a, b) { return a + b; }, 0);
                    if (totalScore < minScore)
                        return [2 /*return*/, false];
                    _c.label = 2;
                case 2: return [2 /*return*/, true];
            }
        });
    });
}

var validations = {
    basic: validate$1,
    aave: validate
};

function verifyDefault(address, sig, hash, provider) {
    return __awaiter(this, void 0, void 0, function () {
        var returnValue, magicValue, abi, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    magicValue = '0x1626ba7e';
                    abi = 'function isValidSignature(bytes32 _hash, bytes memory _signature) public view returns (bytes4 magicValue)';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, call(provider, [abi], [address, 'isValidSignature', [bytes.arrayify(hash), sig]])];
                case 2:
                    returnValue = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/, returnValue.toLowerCase() === magicValue.toLowerCase()];
            }
        });
    });
}
function verifyOldVersion(address, sig, hash, provider) {
    return __awaiter(this, void 0, void 0, function () {
        var returnValue, magicValue, abi, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    magicValue = '0x20c13b0b';
                    abi = 'function isValidSignature(bytes _hash, bytes memory _signature) public view returns (bytes4 magicValue)';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, call(provider, [abi], [address, 'isValidSignature', [bytes.arrayify(hash), sig]])];
                case 2:
                    returnValue = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    console.log(e_2);
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/, returnValue.toLowerCase() === magicValue.toLowerCase()];
            }
        });
    });
}
function verify$1(address, sig, hash) {
    return __awaiter(this, void 0, void 0, function () {
        var provider;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    provider = getProvider('1');
                    return [4 /*yield*/, verifyDefault(address, sig, hash, provider)];
                case 1:
                    if (_a.sent())
                        return [2 /*return*/, true];
                    return [4 /*yield*/, verifyOldVersion(address, sig, hash, provider)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}

function getHash(data) {
    var domain = data.domain, types = data.types, message = data.message;
    return hash._TypedDataEncoder.hash(domain, types, message);
}
function verify(address, sig, data) {
    return __awaiter(this, void 0, void 0, function () {
        var domain, types, message, recoverAddress, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    domain = data.domain, types = data.types, message = data.message;
                    recoverAddress = wallet.verifyTypedData(domain, types, message, sig);
                    hash = getHash(data);
                    console.log('Hash', hash);
                    console.log('Address', address);
                    console.log('Recover address', recoverAddress);
                    if (address === recoverAddress)
                        return [2 /*return*/, true];
                    console.log('Check EIP1271 signature');
                    return [4 /*yield*/, verify$1(address, sig, hash)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}

var gateways = [
	"cloudflare-ipfs.com",
	"cf-ipfs.com",
	"ipfs.io",
	"ipfs.fleek.co",
	"gateway.pinata.cloud",
	"dweb.link",
	"ipfs.infura.io"
];

var SNAPSHOT_SCORE_API = 'http://localhost:3002/api/scores';
function call(provider, abi, call, options) {
    return __awaiter(this, void 0, void 0, function () {
        var contract, params, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contract = new contracts.Contract(call[0], abi, provider);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    params = call[2] || [];
                    return [4 /*yield*/, contract[call[1]].apply(contract, __spreadArrays(params, [options || {}]))];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, Promise.reject(e_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function multicall(network, provider, abi$1, calls, options) {
    return __awaiter(this, void 0, void 0, function () {
        var multicallAbi, multi, itf, _a, res, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    multicallAbi = [
                        'function aggregate(tuple(address target, bytes callData)[] calls) view returns (uint256 blockNumber, bytes[] returnData)'
                    ];
                    multi = new contracts.Contract(networks[network].multicall, multicallAbi, provider);
                    itf = new abi.Interface(abi$1);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, multi.aggregate(calls.map(function (call) { return [
                            call[0].toLowerCase(),
                            itf.encodeFunctionData(call[1], call[2])
                        ]; }), options || {})];
                case 2:
                    _a = _b.sent(), res = _a[1];
                    return [2 /*return*/, res.map(function (call, i) { return itf.decodeFunctionResult(calls[i][1], call); })];
                case 3:
                    e_2 = _b.sent();
                    return [2 /*return*/, Promise.reject(e_2)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function subgraphRequest(url, query, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch__default["default"](url, {
                        method: 'POST',
                        headers: __assign({ Accept: 'application/json', 'Content-Type': 'application/json' }, options === null || options === void 0 ? void 0 : options.headers),
                        body: JSON.stringify({ query: jsonToGraphqlQuery.jsonToGraphQLQuery({ query: query }) })
                    })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data || {}];
            }
        });
    });
}
function getUrl(uri, gateway) {
    if (gateway === void 0) { gateway = gateways[0]; }
    var ipfsGateway = "https://" + gateway;
    if (!uri)
        return null;
    if (!uri.includes('ipfs') && !uri.includes('ipns') && !uri.includes('http'))
        return ipfsGateway + "/ipfs/" + uri;
    var uriScheme = uri.split('://')[0];
    if (uriScheme === 'ipfs')
        return uri.replace('ipfs://', ipfsGateway + "/ipfs/");
    if (uriScheme === 'ipns')
        return uri.replace('ipns://', ipfsGateway + "/ipns/");
    return uri;
}
function ipfsGet(gateway, ipfsHash, protocolType) {
    if (protocolType === void 0) { protocolType = 'ipfs'; }
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "https://" + gateway + "/" + protocolType + "/" + ipfsHash;
            return [2 /*return*/, fetch__default["default"](url).then(function (res) { return res.json(); })];
        });
    });
}
function sendTransaction(web3, contractAddress, abi, action, params, overrides) {
    if (overrides === void 0) { overrides = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var signer, contract, contractWithSigner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    signer = web3.getSigner();
                    contract = new contracts.Contract(contractAddress, abi, web3);
                    contractWithSigner = contract.connect(signer);
                    return [4 /*yield*/, contractWithSigner[action].apply(contractWithSigner, __spreadArrays(params, [overrides]))];
                case 1: 
                // overrides.gasLimit = 12e6;
                return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getScores(space, strategies, network, provider, addresses, snapshot) {
    if (snapshot === void 0) { snapshot = 'latest'; }
    return __awaiter(this, void 0, void 0, function () {
        var params, res, obj, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    params = {
                        space: space,
                        network: network,
                        snapshot: snapshot,
                        strategies: strategies,
                        addresses: addresses
                    };
                    return [4 /*yield*/, fetch__default["default"](SNAPSHOT_SCORE_API, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ params: params })
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    obj = _a.sent();
                    return [2 /*return*/, obj.result.scores];
                case 3:
                    e_3 = _a.sent();
                    return [2 /*return*/, Promise.reject(e_3)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function validateSchema(schema, data) {
    var ajv = new Ajv__default["default"]({ allErrors: true, allowUnionTypes: true, $data: true });
    // @ts-ignore
    addFormats__default["default"](ajv);
    var validate = ajv.compile(schema);
    var valid = validate(data);
    return valid ? valid : validate.errors;
}
var utils = {
    call: call,
    multicall: multicall,
    subgraphRequest: subgraphRequest,
    ipfsGet: ipfsGet,
    getUrl: getUrl,
    sendTransaction: sendTransaction,
    getScores: getScores,
    validateSchema: validateSchema,
    getProvider: getProvider,
    signMessage: signMessage,
    getBlockNumber: getBlockNumber,
    Multicaller: Multicaller,
    validations: validations,
    getHash: getHash,
    verify: verify
};

var NO_TOKEN = "" + '0x'.padEnd(42, '0');
var ARAGON_SUBGRAPH_URL = {
    '1': 'https://api.thegraph.com/subgraphs/name/aragon/aragon-govern-mainnet',
    '4': 'https://api.thegraph.com/subgraphs/name/aragon/aragon-govern-rinkeby'
};
var queueAbi = [
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'executionTime',
                                type: 'uint256'
                            },
                            {
                                internalType: 'address',
                                name: 'submitter',
                                type: 'address'
                            },
                            {
                                internalType: 'contract IERC3000Executor',
                                name: 'executor',
                                type: 'address'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'address',
                                        name: 'to',
                                        type: 'address'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'value',
                                        type: 'uint256'
                                    },
                                    {
                                        internalType: 'bytes',
                                        name: 'data',
                                        type: 'bytes'
                                    }
                                ],
                                internalType: 'struct ERC3000Data.Action[]',
                                name: 'actions',
                                type: 'tuple[]'
                            },
                            {
                                internalType: 'bytes32',
                                name: 'allowFailuresMap',
                                type: 'bytes32'
                            },
                            {
                                internalType: 'bytes',
                                name: 'proof',
                                type: 'bytes'
                            }
                        ],
                        internalType: 'struct ERC3000Data.Payload',
                        name: 'payload',
                        type: 'tuple'
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'executionDelay',
                                type: 'uint256'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'address',
                                        name: 'token',
                                        type: 'address'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'amount',
                                        type: 'uint256'
                                    }
                                ],
                                internalType: 'struct ERC3000Data.Collateral',
                                name: 'scheduleDeposit',
                                type: 'tuple'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'address',
                                        name: 'token',
                                        type: 'address'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'amount',
                                        type: 'uint256'
                                    }
                                ],
                                internalType: 'struct ERC3000Data.Collateral',
                                name: 'challengeDeposit',
                                type: 'tuple'
                            },
                            {
                                internalType: 'address',
                                name: 'resolver',
                                type: 'address'
                            },
                            {
                                internalType: 'bytes',
                                name: 'rules',
                                type: 'bytes'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxCalldataSize',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct ERC3000Data.Config',
                        name: 'config',
                        type: 'tuple'
                    }
                ],
                internalType: 'struct ERC3000Data.Container',
                name: '_container',
                type: 'tuple'
            }
        ],
        name: 'schedule',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'containerHash',
                type: 'bytes32'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'nonce',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
var ercAbi = [
    {
        constant: false,
        inputs: [
            {
                name: '_spender',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        name: 'approve',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            {
                name: '_owner',
                type: 'address'
            },
            {
                name: '_spender',
                type: 'address'
            }
        ],
        name: 'allowance',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    }
];
var GQL_QUERY = {
    registryEntry: {
        __args: {
            id: undefined
        },
        executor: {
            address: true
        },
        queue: {
            address: true,
            config: {
                executionDelay: true,
                scheduleDeposit: {
                    token: true,
                    amount: true
                },
                challengeDeposit: {
                    token: true,
                    amount: true
                },
                resolver: true,
                rules: true,
                maxCalldataSize: true
            }
        }
    }
};
var FAILURE_MAP = '0x0000000000000000000000000000000000000000000000000000000000000000';
var EMPTY_BYTES = '0x00';
/**
 * scheduleAction schedules an action into a GovernQueue.
 * Instead of sending the action to a disputable delay from aragonOS, we directly call this
 * contract.
 * the actionsFromAragonPlugin is an array of objects with the form { to, value, data }
 */
function scheduleAction(network, web3, daoName, account, proof, actionsFromAragonPlugin) {
    return __awaiter(this, void 0, void 0, function () {
        var query, result, config, nonce, bnNonce, newNonce, currentDate, allowance, resetTx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = GQL_QUERY;
                    query.registryEntry.__args.id = daoName;
                    return [4 /*yield*/, subgraphRequest(ARAGON_SUBGRAPH_URL[network], query)];
                case 1:
                    result = _a.sent();
                    config = result.registryEntry.queue.config;
                    return [4 /*yield*/, call(web3, queueAbi, [
                            result.registryEntry.queue.address,
                            'nonce'
                        ])];
                case 2:
                    nonce = _a.sent();
                    bnNonce = bignumber.BigNumber.from(nonce);
                    newNonce = bnNonce.add(bignumber.BigNumber.from(1));
                    currentDate = Math.round(Date.now() / 1000) + Number(config.executionDelay) + 60;
                    return [4 /*yield*/, call(web3, ercAbi, [
                            config.scheduleDeposit.token,
                            'allowance',
                            [account, result.registryEntry.queue.address]
                        ])];
                case 3:
                    allowance = _a.sent();
                    if (!(allowance.lt(config.scheduleDeposit.amount) &&
                        config.scheduleDeposit.token !== NO_TOKEN)) return [3 /*break*/, 8];
                    if (!!allowance.isZero()) return [3 /*break*/, 6];
                    return [4 /*yield*/, sendTransaction(web3, config.scheduleDeposit.token, ercAbi, 'approve', [result.registryEntry.queue.address, '0'])];
                case 4:
                    resetTx = _a.sent();
                    return [4 /*yield*/, resetTx.wait(1)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, sendTransaction(web3, config.scheduleDeposit.token, ercAbi, 'approve', [result.registryEntry.queue.address, config.scheduleDeposit.amount])];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: return [4 /*yield*/, sendTransaction(web3, result.registryEntry.queue.address, queueAbi, 'schedule', [
                        {
                            payload: {
                                nonce: newNonce.toString(),
                                executionTime: currentDate,
                                submitter: account,
                                executor: result.registryEntry.executor.address,
                                actions: actionsFromAragonPlugin,
                                allowFailuresMap: FAILURE_MAP,
                                // proof in snapshot's case, could be the proposal's IPFS CID
                                proof: proof ? strings.toUtf8Bytes(proof) : EMPTY_BYTES
                            },
                            config: {
                                executionDelay: config.executionDelay,
                                scheduleDeposit: {
                                    token: config.scheduleDeposit.token,
                                    amount: config.scheduleDeposit.amount
                                },
                                challengeDeposit: {
                                    token: config.challengeDeposit.token,
                                    amount: config.challengeDeposit.amount
                                },
                                resolver: config.resolver,
                                rules: config.rules,
                                maxCalldataSize: config.maxCalldataSize
                            }
                        }
                    ], {
                        // This can probably be optimized
                        gasLimit: 500000
                    })];
                case 9: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
var Plugin$4 = /** @class */ (function () {
    function Plugin() {
        this.author = 'Evalir';
        this.version = '0.1.3';
        this.name = 'Aragon Govern';
        this.website = 'https://aragon.org/blog/snapshot';
    }
    Plugin.prototype.action = function (network, web3, spaceOptions, proposalOptions, proposalId, winningChoice) {
        return __awaiter(this, void 0, void 0, function () {
            var account, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, web3.listAccounts()];
                    case 1:
                        account = (_a.sent())[0];
                        return [4 /*yield*/, scheduleAction(network, web3, spaceOptions.id, account, proposalId, proposalOptions["choice" + winningChoice].actions)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Plugin;
}());

var UNISWAP_V2_SUBGRAPH_URL = {
    '1': 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
    '4': 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2-rinkeby',
    '100': 'https://api.thegraph.com/subgraphs/name/1hive/uniswap-v2'
};
var OMEN_SUBGRAPH_URL = {
    '1': 'https://api.thegraph.com/subgraphs/name/protofire/omen',
    '4': 'https://api.thegraph.com/subgraphs/name/protofire/omen-rinkeby',
    '100': 'https://api.thegraph.com/subgraphs/name/protofire/omen-xdai'
};
var WETH_ADDRESS = {
    '1': '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    '4': '0xc778417e063141139fce010982780140aa0cd5ab',
    '100': '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1'
};
var OMEN_GQL_QUERY = {
    condition: {
        __args: {
            id: undefined
        },
        id: true,
        fixedProductMarketMakers: {
            id: true,
            collateralToken: true,
            outcomeTokenAmounts: true,
            outcomeTokenMarginalPrices: true
        }
    }
};
var UNISWAP_V2_GQL_QUERY = {
    pairsTokens: {
        __aliasFor: 'pairs',
        __args: {
            where: {
                token0: true,
                token1: true
            }
        },
        token0Price: true
    },
    pairsTokensInverted: {
        __aliasFor: 'pairs',
        __args: {
            where: {
                token0: true,
                token1: true
            }
        },
        token1Price: true
    },
    pairsTokens0: {
        __aliasFor: 'pairs',
        __args: {
            where: {
                token0: true,
                token1: true
            }
        },
        token0Price: true
    },
    pairsTokens1: {
        __aliasFor: 'pairs',
        __args: {
            where: {
                token0: true,
                token1: true
            }
        },
        token0Price: true
    }
};
var erc20Abi = [
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{ name: '_upgradedAddress', type: 'address' }],
        name: 'deprecate',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            { name: '_spender', type: 'address' },
            { name: '_value', type: 'uint256' }
        ],
        name: 'approve',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'deprecated',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{ name: '_evilUser', type: 'address' }],
        name: 'addBlackList',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            { name: '_from', type: 'address' },
            { name: '_to', type: 'address' },
            { name: '_value', type: 'uint256' }
        ],
        name: 'transferFrom',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'upgradedAddress',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [{ name: '', type: 'address' }],
        name: 'balances',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'maximumFee',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: '_totalSupply',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [],
        name: 'unpause',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [{ name: '_maker', type: 'address' }],
        name: 'getBlackListStatus',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            { name: '', type: 'address' },
            { name: '', type: 'address' }
        ],
        name: 'allowed',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'paused',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [{ name: 'who', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [],
        name: 'pause',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'getOwner',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            { name: '_to', type: 'address' },
            { name: '_value', type: 'uint256' }
        ],
        name: 'transfer',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            { name: 'newBasisPoints', type: 'uint256' },
            { name: 'newMaxFee', type: 'uint256' }
        ],
        name: 'setParams',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{ name: 'amount', type: 'uint256' }],
        name: 'issue',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{ name: 'amount', type: 'uint256' }],
        name: 'redeem',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            { name: '_owner', type: 'address' },
            { name: '_spender', type: 'address' }
        ],
        name: 'allowance',
        outputs: [{ name: 'remaining', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'basisPointsRate',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [{ name: '', type: 'address' }],
        name: 'isBlackListed',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{ name: '_clearedUser', type: 'address' }],
        name: 'removeBlackList',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'MAX_UINT',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{ name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{ name: '_blackListedUser', type: 'address' }],
        name: 'destroyBlackFunds',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { name: '_initialSupply', type: 'uint256' },
            { name: '_name', type: 'string' },
            { name: '_symbol', type: 'string' },
            { name: '_decimals', type: 'uint256' }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: 'amount', type: 'uint256' }],
        name: 'Issue',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: 'amount', type: 'uint256' }],
        name: 'Redeem',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: 'newAddress', type: 'address' }],
        name: 'Deprecate',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, name: 'feeBasisPoints', type: 'uint256' },
            { indexed: false, name: 'maxFee', type: 'uint256' }
        ],
        name: 'Params',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, name: '_blackListedUser', type: 'address' },
            { indexed: false, name: '_balance', type: 'uint256' }
        ],
        name: 'DestroyedBlackFunds',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: '_user', type: 'address' }],
        name: 'AddedBlackList',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: '_user', type: 'address' }],
        name: 'RemovedBlackList',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'owner', type: 'address' },
            { indexed: true, name: 'spender', type: 'address' },
            { indexed: false, name: 'value', type: 'uint256' }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'from', type: 'address' },
            { indexed: true, name: 'to', type: 'address' },
            { indexed: false, name: 'value', type: 'uint256' }
        ],
        name: 'Transfer',
        type: 'event'
    },
    { anonymous: false, inputs: [], name: 'Pause', type: 'event' },
    { anonymous: false, inputs: [], name: 'Unpause', type: 'event' }
];
/**
 * Returns the token `name` and `symbol` from a given ERC-20 contract address
 * @param web3
 * @param tokenAddress
 * @param method
 */
var getTokenInfo = function (web3, tokenAddress) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, multicall(web3._network.chainId.toString(), web3, erc20Abi, [
                    [tokenAddress, 'name'],
                    [tokenAddress, 'symbol']
                ])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var Plugin$3 = /** @class */ (function () {
    function Plugin() {
        this.author = 'davidalbela';
        this.version = '0.0.1';
        this.name = 'Gnosis Impact';
        this.website = 'https://gnosis.io';
    }
    Plugin.prototype.getTokenInfo = function (web3, tokenAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenInfo, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getTokenInfo(web3, tokenAddress)];
                    case 1:
                        tokenInfo = _a.sent();
                        return [2 /*return*/, {
                                address: tokenAddress,
                                checksumAddress: address.getAddress(tokenAddress),
                                name: tokenInfo[0][0],
                                symbol: tokenInfo[1][0]
                            }];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Plugin.prototype.getOmenCondition = function (network, conditionId) {
        return __awaiter(this, void 0, void 0, function () {
            var query, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = OMEN_GQL_QUERY;
                        query.condition.__args.id = conditionId;
                        return [4 /*yield*/, subgraphRequest(OMEN_SUBGRAPH_URL[network], query)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Plugin.prototype.getUniswapPair = function (network, token0, token1) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = UNISWAP_V2_GQL_QUERY;
                        query.pairsTokens.__args.where = {
                            token0: token0.toLowerCase(),
                            token1: token1.toLowerCase()
                        };
                        query.pairsTokensInverted.__args.where = {
                            token0: token1.toLowerCase(),
                            token1: token0.toLowerCase()
                        };
                        query.pairsTokens0.__args.where = {
                            token0: token0.toLowerCase(),
                            token1: WETH_ADDRESS[network]
                        };
                        query.pairsTokens1.__args.where = {
                            token0: token1.toLowerCase(),
                            token1: WETH_ADDRESS[network]
                        };
                        return [4 /*yield*/, subgraphRequest(UNISWAP_V2_SUBGRAPH_URL[network], query)];
                    case 1:
                        result = _a.sent();
                        if (result.pairsTokens.length > 0) {
                            return [2 /*return*/, result.pairsTokens[0]];
                        }
                        else if (result.pairsTokensInverted.length > 0) {
                            return [2 /*return*/, {
                                    token0Price: result.pairsTokensInverted[0].token1Price
                                }];
                        }
                        else if (result.pairsTokens0.length > 0 &&
                            result.pairsTokens1.length > 0) {
                            return [2 /*return*/, {
                                    token0Price: (parseFloat(result.pairsTokens0[0].token0Price) /
                                        parseFloat(result.pairsTokens1[0].token0Price)).toString()
                                }];
                        }
                        throw new Error("Does not exist market pairs for " + token0 + " and " + token1 + ".");
                    case 2:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Plugin;
}());

var EIP712_TYPES = {
    Transaction: [
        {
            name: 'to',
            type: 'address'
        },
        {
            name: 'value',
            type: 'uint256'
        },
        {
            name: 'data',
            type: 'bytes'
        },
        {
            name: 'operation',
            type: 'uint8'
        },
        {
            name: 'nonce',
            type: 'uint256'
        }
    ]
};
var ModuleAbi = [
    // Events
    'event ProposalQuestionCreated(bytes32 indexed questionId, string indexed proposalId)',
    // Read functions
    'function executor() view returns (address)',
    'function oracle() view returns (address)',
    'function questionCooldown() view returns (uint32)',
    'function buildQuestion(string proposalId, bytes32[] txHashes) view returns (string)',
    'function executedProposalTransactions(bytes32 questionHash, bytes32 txHash) view returns (bool)',
    'function questionIds(bytes32 questionHash) view returns (bytes32)',
    'function minimumBond() view returns (uint256)',
    // Write functions
    'function addProposal(string proposalId, bytes32[] txHashes)',
    'function executeProposalWithIndex(string proposalId, bytes32[] txHashes, address to, uint256 value, bytes data, uint8 operation, uint256 txIndex)'
];
var OracleAbi = [
    // Events
    "event LogNewAnswer(\n    bytes32 answer,\n    bytes32 indexed question_id,\n    bytes32 history_hash,\n    address indexed user,\n    uint256 bond,\n    uint256 ts,\n    bool is_commitment\n  )",
    // Read functions
    'function resultFor(bytes32 question_id) view returns (bytes32)',
    'function getFinalizeTS(bytes32 question_id) view returns (uint32)',
    'function getBond(bytes32 question_id) view returns (uint256)',
    'function getBestAnswer(bytes32 question_id) view returns (uint32)',
    'function balanceOf(address) view returns (uint256)',
    'function getHistoryHash(bytes32 question_id) view returns (bytes32)',
    'function isFinalized(bytes32 question_id) view returns (bool)',
    'function token() view returns (address)',
    // Write functions
    'function submitAnswer(bytes32 question_id, bytes32 answer, uint256 max_previous) external payable',
    'function submitAnswerERC20(bytes32 question_id, bytes32 answer, uint256 max_previous, uint256 tokens) external',
    "function claimMultipleAndWithdrawBalance(\n    bytes32[] question_ids,\n    uint256[] lengths,\n    bytes32[] hist_hashes,\n    address[] addrs,\n    uint256[] bonds,\n    bytes32[] answers\n  ) public",
    'function withdraw() public'
];
var TokenAbi = [
    //Read functions
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint32)',
    'function symbol() view returns (string)',
    'function allowance(address owner, address spender) external view returns (uint256)',
    // Write functions
    'function approve(address spender, uint256 value) external returns (bool)'
];
var START_BLOCKS = {
    1: 6531147,
    4: 3175028
};
var buildQuestion = function (proposalId, txHashes) { return __awaiter(void 0, void 0, void 0, function () {
    var hashesHash;
    return __generator(this, function (_a) {
        hashesHash = solidity.keccak256(['bytes32[]'], [txHashes]).slice(2);
        return [2 /*return*/, proposalId + "\u241F" + hashesHash];
    });
}); };
var getProposalDetails = function (provider, network, moduleAddress, questionHash, txHashes) { return __awaiter(void 0, void 0, void 0, function () {
    var proposalInfo, questionId, nextIndexToExecute;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, multicall(network, provider, ModuleAbi, [[moduleAddress, 'questionIds', [questionHash]]].concat(txHashes.map(function (txHash) { return [
                    moduleAddress,
                    'executedProposalTransactions',
                    [questionHash, txHash]
                ]; })))];
            case 1:
                proposalInfo = (_a.sent()).map(function (res) { return res[0]; });
                questionId = proposalInfo[0];
                nextIndexToExecute = proposalInfo.indexOf(false, 1) - 1;
                return [2 /*return*/, {
                        questionId: questionId !== constants.HashZero ? questionId : undefined,
                        nextTxIndex: nextIndexToExecute < 0 || nextIndexToExecute >= txHashes.length
                            ? undefined
                            : nextIndexToExecute
                    }];
        }
    });
}); };
var getModuleDetails = function (provider, network, moduleAddress) { return __awaiter(void 0, void 0, void 0, function () {
    var moduleDetails;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, multicall(network, provider, ModuleAbi, [
                    [moduleAddress, 'executor'],
                    [moduleAddress, 'oracle'],
                    [moduleAddress, 'questionCooldown'],
                    [moduleAddress, 'minimumBond']
                ])];
            case 1:
                moduleDetails = _a.sent();
                return [2 /*return*/, {
                        dao: moduleDetails[0][0],
                        oracle: moduleDetails[1][0],
                        cooldown: moduleDetails[2][0],
                        minimumBond: moduleDetails[3][0]
                    }];
        }
    });
}); };
var checkPossibleExecution = function (provider, network, oracleAddress, questionId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!questionId) return [3 /*break*/, 4];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, multicall(network, provider, OracleAbi, [
                        [oracleAddress, 'resultFor', [questionId]],
                        [oracleAddress, 'getFinalizeTS', [questionId]]
                    ])];
            case 2:
                result = _a.sent();
                return [2 /*return*/, {
                        executionApproved: bignumber$1.BigNumber.from(result[0][0]).eq(bignumber$1.BigNumber.from(1)),
                        finalizedAt: bignumber$1.BigNumber.from(result[1][0]).toNumber()
                    }];
            case 3:
                _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, {
                    executionApproved: false,
                    finalizedAt: undefined
                }];
        }
    });
}); };
var retrieveInfoFromOracle = function (provider, network, oracleAddress, questionId) { return __awaiter(void 0, void 0, void 0, function () {
    var result, currentBond, answer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!questionId) return [3 /*break*/, 2];
                return [4 /*yield*/, multicall(network, provider, OracleAbi, [
                        [oracleAddress, 'getFinalizeTS', [questionId]],
                        [oracleAddress, 'getBond', [questionId]],
                        [oracleAddress, 'getBestAnswer', [questionId]]
                    ])];
            case 1:
                result = _a.sent();
                currentBond = bignumber$1.BigNumber.from(result[1][0]);
                answer = bignumber$1.BigNumber.from(result[2][0]);
                return [2 /*return*/, {
                        currentBond: currentBond,
                        isApproved: answer.eq(bignumber$1.BigNumber.from(1)),
                        endTime: bignumber$1.BigNumber.from(result[0][0]).toNumber()
                    }];
            case 2: return [2 /*return*/, {
                    currentBond: undefined,
                    isApproved: false,
                    endTime: undefined
                }];
        }
    });
}); };
var Plugin$2 = /** @class */ (function () {
    function Plugin() {
        this.author = 'Gnosis';
        this.version = '1.0.0';
        this.name = 'SafeSnap';
        this.website = 'https://safe.gnosis.io';
    }
    Plugin.prototype.validateTransaction = function (transaction) {
        var addressEmptyOrValidate = transaction.to === '' || address.isAddress(transaction.to);
        return (bignumber$1.isBigNumberish(transaction.value) &&
            addressEmptyOrValidate &&
            (!transaction.data || bytes.isHexString(transaction.data)) &&
            transaction.operation in ['0', '1'] &&
            bignumber$1.isBigNumberish(transaction.nonce));
    };
    Plugin.prototype.calcTransactionHash = function (network, moduleAddress, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var chainId, domain;
            return __generator(this, function (_a) {
                chainId = parseInt(network);
                domain = {
                    chainId: chainId,
                    verifyingContract: moduleAddress
                };
                return [2 /*return*/, hash._TypedDataEncoder.hash(domain, EIP712_TYPES, transaction)];
            });
        });
    };
    Plugin.prototype.calcTransactionHashes = function (chainId, moduleAddress, transactions) {
        return __awaiter(this, void 0, void 0, function () {
            var domain;
            return __generator(this, function (_a) {
                domain = {
                    chainId: chainId,
                    verifyingContract: moduleAddress
                };
                return [2 /*return*/, transactions.map(function (tx) {
                        var txHash = hash._TypedDataEncoder.hash(domain, EIP712_TYPES, __assign({ 
                            // @ts-ignore
                            nonce: '0', 
                            // @ts-ignore
                            data: '0x' }, tx));
                        return txHash;
                    })];
            });
        });
    };
    Plugin.prototype.getExecutionDetails = function (network, moduleAddress, proposalId, transactions) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, chainId, txHashes, question, questionHash, proposalDetails, moduleDetails, questionState, infoFromOracle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = getProvider(network);
                        chainId = parseInt(network);
                        return [4 /*yield*/, this.calcTransactionHashes(chainId, moduleAddress, transactions)];
                    case 1:
                        txHashes = _a.sent();
                        return [4 /*yield*/, buildQuestion(proposalId, txHashes)];
                    case 2:
                        question = _a.sent();
                        questionHash = solidity.keccak256(['string'], [question]);
                        return [4 /*yield*/, getProposalDetails(provider, network, moduleAddress, questionHash, txHashes)];
                    case 3:
                        proposalDetails = _a.sent();
                        return [4 /*yield*/, getModuleDetails(provider, network, moduleAddress)];
                    case 4:
                        moduleDetails = _a.sent();
                        return [4 /*yield*/, checkPossibleExecution(provider, network, moduleDetails.oracle, proposalDetails.questionId)];
                    case 5:
                        questionState = _a.sent();
                        return [4 /*yield*/, retrieveInfoFromOracle(provider, network, moduleDetails.oracle, proposalDetails.questionId)];
                    case 6:
                        infoFromOracle = _a.sent();
                        try {
                            return [2 /*return*/, __assign(__assign(__assign(__assign(__assign(__assign({}, moduleDetails), { proposalId: proposalId }), questionState), proposalDetails), { transactions: transactions,
                                    txHashes: txHashes }), infoFromOracle)];
                        }
                        catch (e) {
                            throw new Error(e);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Plugin.prototype.getModuleDetails = function (network, moduleAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                provider = getProvider(network);
                return [2 /*return*/, getModuleDetails(provider, network, moduleAddress)];
            });
        });
    };
    Plugin.prototype.submitProposal = function (web3, moduleAddress, proposalId, transactions) {
        return __awaiter(this, void 0, void 0, function () {
            var txHashes, tx, receipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calcTransactionHashes(web3.network.chainId, moduleAddress, transactions)];
                    case 1:
                        txHashes = _a.sent();
                        return [4 /*yield*/, sendTransaction(web3, moduleAddress, ModuleAbi, 'addProposal', [proposalId, txHashes])];
                    case 2:
                        tx = _a.sent();
                        return [4 /*yield*/, tx.wait()];
                    case 3:
                        receipt = _a.sent();
                        console.log('[DAO module] submitted proposal:', receipt);
                        return [2 /*return*/];
                }
            });
        });
    };
    Plugin.prototype.loadClaimBondData = function (web3, network, questionId, oracleAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var contract, provider, _a, userBalance, bestAnswer, historyHash, isFinalized, tokenSymbol, tokenDecimals, token, _b, symbol, decimals, answersFilter, events, users, historyHashes, bonds, answers, alreadyClaimed, address, currentUserAnswers, votedForCorrectQuestion, hasBalance, firstHash;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        contract = new contracts.Contract(oracleAddress, OracleAbi, web3);
                        provider = getProvider(network);
                        return [4 /*yield*/, multicall(network, provider, OracleAbi, [
                                [oracleAddress, 'balanceOf', [web3.provider.selectedAddress]],
                                [oracleAddress, 'getBestAnswer', [questionId]],
                                [oracleAddress, 'getHistoryHash', [questionId]],
                                [oracleAddress, 'isFinalized', [questionId]]
                            ])];
                    case 1:
                        _a = _c.sent(), userBalance = _a[0][0], bestAnswer = _a[1][0], historyHash = _a[2][0], isFinalized = _a[3][0];
                        tokenSymbol = 'ETH';
                        tokenDecimals = 18;
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, call(provider, OracleAbi, [
                                oracleAddress,
                                'token',
                                []
                            ])];
                    case 3:
                        token = _c.sent();
                        return [4 /*yield*/, multicall(network, provider, TokenAbi, [
                                [token, 'symbol', []],
                                [token, 'decimals', []]
                            ])];
                    case 4:
                        _b = _c.sent(), symbol = _b[0][0], decimals = _b[1][0];
                        tokenSymbol = symbol;
                        tokenDecimals = decimals;
                        return [3 /*break*/, 6];
                    case 5:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        answersFilter = contract.filters.LogNewAnswer(null, questionId);
                        return [4 /*yield*/, contract.queryFilter(answersFilter, START_BLOCKS[network])];
                    case 7:
                        events = _c.sent();
                        users = [];
                        historyHashes = [];
                        bonds = [];
                        answers = [];
                        // We need to send the information from last to first
                        events.reverse().forEach(function (_a) {
                            var args = _a.args;
                            users.push(args === null || args === void 0 ? void 0 : args.user.toLowerCase());
                            historyHashes.push(args === null || args === void 0 ? void 0 : args.history_hash);
                            bonds.push(args === null || args === void 0 ? void 0 : args.bond);
                            answers.push(args === null || args === void 0 ? void 0 : args.answer);
                        });
                        alreadyClaimed = bignumber$1.BigNumber.from(historyHash).eq(0);
                        address = web3.provider.selectedAddress.toLowerCase();
                        currentUserAnswers = users.map(function (user, i) {
                            if (user === address)
                                return answers[i];
                        });
                        votedForCorrectQuestion = currentUserAnswers.some(function (answer) {
                            if (answer) {
                                return bignumber$1.BigNumber.from(answer).eq(bestAnswer);
                            }
                        }) && isFinalized;
                        hasBalance = !userBalance.eq(0) && isFinalized;
                        // Remove the first history and add an empty one
                        // More info: https://github.com/realitio/realitio-contracts/blob/master/truffle/contracts/Realitio.sol#L502
                        historyHashes.shift();
                        firstHash = '0x0000000000000000000000000000000000000000000000000000000000000000';
                        historyHashes.push(firstHash);
                        return [2 /*return*/, {
                                tokenSymbol: tokenSymbol,
                                tokenDecimals: tokenDecimals,
                                canClaim: (!alreadyClaimed && votedForCorrectQuestion) || hasBalance,
                                data: {
                                    length: [bonds.length.toString()],
                                    historyHashes: historyHashes,
                                    users: users,
                                    bonds: bonds,
                                    answers: answers
                                }
                            }];
                }
            });
        });
    };
    Plugin.prototype.claimBond = function (web3, oracleAddress, questionId, claimParams) {
        return __awaiter(this, void 0, void 0, function () {
            var currentHistoryHash, tx_1, receipt_1, tx, receipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, call(web3, OracleAbi, [
                            oracleAddress,
                            'getHistoryHash',
                            [questionId]
                        ])];
                    case 1:
                        currentHistoryHash = _a.sent();
                        if (!bignumber$1.BigNumber.from(currentHistoryHash).eq(0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, sendTransaction(web3, oracleAddress, OracleAbi, 'withdraw', [])];
                    case 2:
                        tx_1 = _a.sent();
                        return [4 /*yield*/, tx_1.wait()];
                    case 3:
                        receipt_1 = _a.sent();
                        console.log('[Realitio] executed withdraw:', receipt_1);
                        return [2 /*return*/];
                    case 4: return [4 /*yield*/, sendTransaction(web3, oracleAddress, OracleAbi, 'claimMultipleAndWithdrawBalance', __spreadArrays([[questionId]], claimParams))];
                    case 5:
                        tx = _a.sent();
                        return [4 /*yield*/, tx.wait()];
                    case 6:
                        receipt = _a.sent();
                        console.log('[Realitio] executed claimMultipleAndWithdrawBalance:', receipt);
                        return [2 /*return*/];
                }
            });
        });
    };
    Plugin.prototype.executeProposal = function (web3, moduleAddress, proposalId, transactions, transactionIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var txHashes, moduleTx, tx, receipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calcTransactionHashes(web3.network.chainId, moduleAddress, transactions)];
                    case 1:
                        txHashes = _a.sent();
                        moduleTx = transactions[transactionIndex];
                        return [4 /*yield*/, sendTransaction(web3, moduleAddress, ModuleAbi, 'executeProposalWithIndex', [
                                proposalId,
                                txHashes,
                                moduleTx.to,
                                moduleTx.value,
                                moduleTx.data || '0x',
                                moduleTx.operation,
                                transactionIndex
                            ])];
                    case 2:
                        tx = _a.sent();
                        return [4 /*yield*/, tx.wait()];
                    case 3:
                        receipt = _a.sent();
                        console.log('[DAO module] executed proposal:', receipt);
                        return [2 /*return*/];
                }
            });
        });
    };
    Plugin.prototype.voteForQuestion = function (network, web3, oracleAddress, questionId, minimumBondInDaoModule, answer) {
        return __awaiter(this, void 0, void 0, function () {
            var currentBond, bond, methodName, txOverrides, parameters, currentBondIsZero, daoBondIsZero, token, _a, tokenDecimals, allowance, approveTx, tx, receipt;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, call(web3, OracleAbi, [
                            oracleAddress,
                            'getBond',
                            [questionId]
                        ])];
                    case 1:
                        currentBond = _b.sent();
                        txOverrides = {};
                        parameters = [
                            questionId,
                            "0x000000000000000000000000000000000000000000000000000000000000000" + answer
                        ];
                        currentBondIsZero = currentBond.eq(bignumber$1.BigNumber.from(0));
                        if (currentBondIsZero) {
                            daoBondIsZero = bignumber$1.BigNumber.from(minimumBondInDaoModule).eq(0);
                            bond = daoBondIsZero ? bignumber$1.BigNumber.from(10) : minimumBondInDaoModule;
                        }
                        else {
                            bond = currentBond.mul(2);
                        }
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 8, , 9]);
                        return [4 /*yield*/, call(web3, OracleAbi, [oracleAddress, 'token', []])];
                    case 3:
                        token = _b.sent();
                        return [4 /*yield*/, multicall(network, web3, TokenAbi, [
                                [token, 'decimals', []],
                                [token, 'allowance', [web3.provider.selectedAddress, oracleAddress]]
                            ])];
                    case 4:
                        _a = _b.sent(), tokenDecimals = _a[0][0], allowance = _a[1][0];
                        if (bond.eq(10)) {
                            bond = bond.pow(tokenDecimals);
                        }
                        if (!allowance.lt(bond)) return [3 /*break*/, 7];
                        return [4 /*yield*/, sendTransaction(web3, token, TokenAbi, 'approve', [oracleAddress, bond], {})];
                    case 5:
                        approveTx = _b.sent();
                        return [4 /*yield*/, approveTx.wait()];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        parameters = __spreadArrays(parameters, [bond, bond]);
                        methodName = 'submitAnswerERC20';
                        return [3 /*break*/, 9];
                    case 8:
                        _b.sent();
                        if (bond.eq(10)) {
                            bond = bond.pow(18);
                        }
                        parameters = __spreadArrays(parameters, [bond]);
                        txOverrides['value'] = bond.toString();
                        methodName = 'submitAnswer';
                        return [3 /*break*/, 9];
                    case 9: return [4 /*yield*/, sendTransaction(web3, oracleAddress, OracleAbi, methodName, parameters, txOverrides)];
                    case 10:
                        tx = _b.sent();
                        return [4 /*yield*/, tx.wait()];
                    case 11:
                        receipt = _b.sent();
                        console.log('[DAO module] executed vote on oracle:', receipt);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Plugin;
}());

var Plugin$1 = /** @class */ (function () {
    function Plugin() {
        this.author = 'lbeder';
        this.version = '0.1.0';
        this.name = 'Quorum';
    }
    /**
     * Returns the total voting power at specific snapshot
     */
    Plugin.prototype.getTotalVotingPower = function (web3, quorumOptions, snapshot) {
        return __awaiter(this, void 0, void 0, function () {
            var strategy, _a, address, methodABI, decimals, blockTag, totalVotingPower, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        strategy = quorumOptions.strategy;
                        _a = strategy;
                        switch (_a) {
                            case 'static': return [3 /*break*/, 1];
                            case 'balance': return [3 /*break*/, 2];
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        {
                            return [2 /*return*/, quorumOptions.total];
                        }
                    case 2:
                        address = quorumOptions.address, methodABI = quorumOptions.methodABI, decimals = quorumOptions.decimals;
                        blockTag = 
                        // @ts-ignore
                        snapshot === 'latest' ? snapshot : parseInt(snapshot);
                        return [4 /*yield*/, call(web3, [methodABI], [address, methodABI.name], { blockTag: blockTag })];
                    case 3:
                        totalVotingPower = _b.sent();
                        return [2 /*return*/, bignumber.BigNumber.from(totalVotingPower)
                                .div(bignumber.BigNumber.from(10).pow(decimals))
                                .toNumber()];
                    case 4: throw new Error("Unsupported quorum strategy: " + strategy);
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _b.sent();
                        throw new Error(e_1);
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Plugin;
}());

// URLS
var API_BASE_URL = 'https://api.poap.xyz';
var APP_BASE_URL = 'https://app.poap.xyz';
var Plugin = /** @class */ (function () {
    function Plugin() {
        this.author = 'Poap-xyz';
        this.version = '1.0.0';
        this.name = 'Poap Module';
    }
    Plugin.prototype.openScanPage = function (address) {
        window.open(APP_BASE_URL + "/scan/" + address, '_blank');
    };
    Plugin.prototype.getCurrentState = function (snapshot, address) {
        return __awaiter(this, void 0, void 0, function () {
            var eventResponse, image_url, addressResponse, _a, claimed, status, voted;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch(API_BASE_URL + "/snapshot/proposal/" + snapshot)];
                    case 1:
                        eventResponse = _b.sent();
                        // If the fetch fails: the event doesn't exists for this poap yet
                        if (!eventResponse.ok) {
                            return [2 /*return*/, { image_url: '', currentState: 'NO_POAP' }];
                        }
                        return [4 /*yield*/, eventResponse.json()];
                    case 2:
                        image_url = (_b.sent()).image_url;
                        // Check that the address is not empty
                        if (!address) {
                            return [2 /*return*/, { image_url: image_url, currentState: 'NOT_VOTED' }];
                        }
                        return [4 /*yield*/, fetch(API_BASE_URL + "/snapshot/proposal/" + snapshot + "/" + address)];
                    case 3:
                        addressResponse = _b.sent();
                        // If the fetch failed return the NOT_VOTED state
                        if (!addressResponse.ok) {
                            return [2 /*return*/, { image_url: image_url, currentState: 'NOT_VOTED' }];
                        }
                        return [4 /*yield*/, addressResponse.json()];
                    case 4:
                        _a = _b.sent(), claimed = _a.claimed, status = _a.status, voted = _a.voted;
                        if (claimed) {
                            // If the address claim the token but the status is not passed
                            // it means that the token is being minted
                            if (claimed && status !== 'passed') {
                                return [2 /*return*/, { image_url: image_url, currentState: 'LOADING' }];
                            }
                            // If the status is passed: the token was claimed
                            return [2 /*return*/, { image_url: image_url, currentState: 'CLAIMED' }];
                        }
                        else if (voted) {
                            // The token is not claimed but the address voted
                            return [2 /*return*/, { image_url: image_url, currentState: 'UNCLAIMED' }];
                        }
                        return [2 /*return*/, { image_url: image_url, currentState: 'NOT_VOTED' }];
                }
            });
        });
    };
    Plugin.prototype.claim = function (snapshot, address) {
        return __awaiter(this, void 0, void 0, function () {
            var body, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            snapshotProposalHash: snapshot,
                            address: address
                        };
                        return [4 /*yield*/, fetch(API_BASE_URL + "/claim/snapshot-proposal", {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(body)
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            // If the response is not ok: return the UNCLAIMED state
                            console.log(response.json());
                            return [2 /*return*/, 'UNCLAIMED'];
                        }
                        return [2 /*return*/, 'LOADING'];
                }
            });
        });
    };
    return Plugin;
}());

var plugins = {
    aragon: Plugin$4,
    gnosis: Plugin$3,
    safeSnap: Plugin$2,
    poap: Plugin,
    quorum: Plugin$1
};

var $schema$2 = "http://json-schema.org/draft-07/schema#";
var $ref$2 = "#/definitions/Space";
var definitions$2 = {
	Space: {
		title: "Space",
		type: "object",
		properties: {
			name: {
				type: "string",
				title: "name",
				minLength: 1,
				maxLength: 32
			},
			"private": {
				type: "boolean"
			},
			about: {
				type: "string",
				title: "about",
				maxLength: 160
			},
			guidelines: {
				type: "string",
				title: "guidelines",
				maxLength: 1024
			},
			terms: {
				type: "string",
				title: "terms",
				format: "uri",
				maxLength: 128
			},
			avatar: {
				type: "string",
				title: "avatar",
				format: "uri",
				maxLength: 256
			},
			location: {
				type: "string",
				title: "location",
				maxLength: 24
			},
			website: {
				type: "string",
				title: "website",
				format: "uri",
				maxLength: 128
			},
			twitter: {
				type: "string",
				title: "twitter",
				pattern: "^[A-Za-z0-9_]*$",
				maxLength: 15
			},
			github: {
				type: "string",
				title: "github",
				pattern: "^[A-Za-z0-9_-]*$",
				maxLength: 39
			},
			email: {
				type: "string",
				title: "email",
				maxLength: 32
			},
			network: {
				type: "string",
				title: "network",
				minLength: 1,
				maxLength: 32
			},
			symbol: {
				type: "string",
				title: "symbol",
				minLength: 1,
				maxLength: 12
			},
			skin: {
				type: "string",
				title: "skin",
				maxLength: 32
			},
			domain: {
				type: "string",
				title: "domain",
				maxLength: 64
			},
			strategies: {
				type: "array",
				minItems: 1,
				maxItems: 8,
				items: {
					type: "object",
					properties: {
						name: {
							type: "string",
							maxLength: 64,
							title: "name"
						},
						params: {
							type: "object",
							title: "params"
						}
					},
					required: [
						"name"
					],
					additionalProperties: false
				},
				title: "strategies"
			},
			members: {
				type: "array",
				items: {
					type: "string",
					pattern: "^[A-Za-z0-9]*$",
					minLength: 42,
					maxLength: 42
				},
				title: "members"
			},
			admins: {
				type: "array",
				items: {
					type: "string",
					pattern: "^[A-Za-z0-9]*$",
					minLength: 42,
					maxLength: 42
				},
				title: "admins"
			},
			filters: {
				type: "object",
				properties: {
					defaultTab: {
						type: "string"
					},
					minScore: {
						type: "number",
						minimum: 0
					},
					onlyMembers: {
						type: "boolean"
					},
					invalids: {
						type: "array",
						items: {
							type: "string",
							maxLength: 64
						},
						title: "invalids"
					}
				},
				additionalProperties: false
			},
			validation: {
				type: "object",
				properties: {
					name: {
						type: "string",
						maxLength: 64,
						title: "name"
					},
					params: {
						type: "object",
						title: "params"
					}
				},
				required: [
					"name"
				],
				additionalProperties: false
			},
			plugins: {
				type: "object"
			}
		},
		required: [
			"name",
			"network",
			"symbol",
			"strategies"
		],
		additionalProperties: false
	}
};
var space = {
	$schema: $schema$2,
	$ref: $ref$2,
	definitions: definitions$2
};

var $schema$1 = "http://json-schema.org/draft-07/schema#";
var $ref$1 = "#/definitions/Proposal";
var definitions$1 = {
	Proposal: {
		title: "Proposal",
		type: "object",
		properties: {
			name: {
				type: "string",
				title: "name",
				minLength: 1,
				maxLength: 256
			},
			body: {
				type: "string",
				title: "body",
				minLength: 0,
				maxLength: 40000
			},
			choices: {
				type: "array",
				title: "choices",
				minItems: 2,
				maxItems: 64
			},
			type: {
				type: "string",
				"enum": [
					"single-choice",
					"approval",
					"ranked-choice",
					"quadratic",
					"weighted",
					"custom"
				]
			},
			snapshot: {
				type: "number",
				title: "snapshot"
			},
			start: {
				type: "number",
				title: "start",
				minimum: 1000000000,
				maximum: 2000000000
			},
			end: {
				type: "number",
				title: "end",
				minimum: 1000000000,
				maximum: 2000000000,
				exclusiveMinimum: {
					$data: "1/start"
				}
			},
			metadata: {
				type: "object",
				title: "metadata"
			}
		},
		required: [
			"name",
			"body",
			"choices",
			"snapshot",
			"start",
			"end"
		],
		additionalProperties: false
	}
};
var proposal = {
	$schema: $schema$1,
	$ref: $ref$1,
	definitions: definitions$1
};

var $schema = "http://json-schema.org/draft-07/schema#";
var $ref = "#/definitions/Vote";
var definitions = {
	Vote: {
		title: "Vote",
		type: "object",
		properties: {
			proposal: {
				type: "string",
				title: "proposal"
			},
			choice: {
				type: [
					"number",
					"array",
					"object",
					"boolean"
				],
				title: "choice"
			},
			metadata: {
				type: "object",
				title: "metadata"
			}
		},
		required: [
			"proposal",
			"choice"
		],
		additionalProperties: false
	}
};
var vote = {
	$schema: $schema,
	$ref: $ref,
	definitions: definitions
};

var schemas = {
    space: space.definitions.Space,
    proposal: proposal.definitions.Proposal,
    vote: vote.definitions.Vote
};

var index = {
    Client: Client,
    plugins: plugins,
    schemas: schemas,
    utils: utils
};

module.exports = index;
