"use strict";
// prisma/seed.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var tourImages, tour1, tour2, tour3, tour4, tour5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tourImages = [
                        { src: '/images/desertSafari.jpg', text: 'Desert Safari' },
                        { src: '/images/heliride.jpg', text: 'Helicopter Ride' },
                        { src: '/images/dowCuise.jpg', text: 'Dhow Cruise Dinner' },
                        { src: '/images/burjKhalifa.jpg', text: 'Burj Khalifa Tour' },
                        { src: '/images/dubaiCity.jpg', text: 'Dubai City Tour' },
                        { src: '/images/atlantas.jpg', text: 'Atlantis Aquaventure' },
                        { src: '/images/hotAir.jpg', text: 'Hot Air Balloon Ride' },
                        { src: '/images/marinaYacht.jpg', text: 'Dubai Marina Yacht Cruise' },
                        { src: '/images/garden.jpg', text: 'Dubai Miracle Garden' },
                        { src: '/images/dubai5.jpg', text: 'Dubai Frame Experience' },
                        { src: '/images/dubai1.jpg', text: 'Ski Dubai Adventure' },
                        { src: '/images/dubai2.jpg', text: 'Ferrari World Tour' },
                    ];
                    return [4 /*yield*/, prisma.tours.create({
                            data: {
                                name: 'Adventure Tours',
                                image: {
                                    create: {
                                        src: tourImages[0].src,
                                        altText: tourImages[0].text,
                                    },
                                },
                                subTours: {
                                    create: [
                                        {
                                            name: 'Desert Safari Adventure',
                                            images: {
                                                create: [
                                                    {
                                                        src: tourImages[0].src,
                                                        altText: tourImages[0].text,
                                                    },
                                                    {
                                                        src: tourImages[1].src,
                                                        altText: tourImages[1].text,
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            name: 'Helicopter Ride Experience',
                                            images: {
                                                create: [
                                                    {
                                                        src: tourImages[2].src,
                                                        altText: tourImages[2].text,
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        })];
                case 1:
                    tour1 = _a.sent();
                    return [4 /*yield*/, prisma.tours.create({
                            data: {
                                name: 'City Tours',
                                image: {
                                    create: {
                                        src: tourImages[3].src,
                                        altText: tourImages[3].text,
                                    },
                                },
                                subTours: {
                                    create: [
                                        {
                                            name: 'Burj Khalifa Tour',
                                            images: {
                                                create: [
                                                    {
                                                        src: tourImages[3].src,
                                                        altText: tourImages[3].text,
                                                    },
                                                    {
                                                        src: tourImages[4].src,
                                                        altText: tourImages[4].text,
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            name: 'Atlantis Aquaventure',
                                            images: {
                                                create: [
                                                    {
                                                        src: tourImages[5].src,
                                                        altText: tourImages[5].text,
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        })];
                case 2:
                    tour2 = _a.sent();
                    return [4 /*yield*/, prisma.tours.create({
                            data: {
                                name: 'Unique Experiences',
                                image: {
                                    create: {
                                        src: tourImages[6].src,
                                        altText: tourImages[6].text,
                                    },
                                },
                                subTours: {
                                    create: [
                                        {
                                            name: 'Hot Air Balloon Ride',
                                            images: {
                                                create: [
                                                    {
                                                        src: tourImages[6].src,
                                                        altText: tourImages[6].text,
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            name: 'Dubai Marina Yacht Cruise',
                                            images: {
                                                create: [
                                                    {
                                                        src: tourImages[7].src,
                                                        altText: tourImages[7].text,
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        })];
                case 3:
                    tour3 = _a.sent();
                    return [4 /*yield*/, prisma.tours.create({
                            data: {
                                name: 'Family Fun',
                                image: {
                                    create: {
                                        src: tourImages[8].src,
                                        altText: tourImages[8].text,
                                    },
                                },
                                subTours: {
                                    create: [
                                        {
                                            name: 'Dubai Miracle Garden',
                                            images: {
                                                create: [
                                                    {
                                                        src: tourImages[8].src,
                                                        altText: tourImages[8].text,
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            name: 'Dubai Frame Experience',
                                            images: {
                                                create: [
                                                    {
                                                        src: tourImages[9].src,
                                                        altText: tourImages[9].text,
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        })];
                case 4:
                    tour4 = _a.sent();
                    return [4 /*yield*/, prisma.tours.create({
                            data: {
                                name: 'Adventure Thrills',
                                image: {
                                    create: {
                                        src: tourImages[10].src,
                                        altText: tourImages[10].text,
                                    },
                                },
                                subTours: {
                                    create: [
                                        {
                                            name: 'Ski Dubai Adventure',
                                            images: {
                                                create: [
                                                    {
                                                        src: tourImages[10].src,
                                                        altText: tourImages[10].text,
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            name: 'Ferrari World Tour',
                                            images: {
                                                create: [
                                                    {
                                                        src: tourImages[11].src,
                                                        altText: tourImages[11].text,
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        })];
                case 5:
                    tour5 = _a.sent();
                    console.log({ tour1: tour1, tour2: tour2, tour3: tour3, tour4: tour4, tour5: tour5 });
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) { return console.error(e); })
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
