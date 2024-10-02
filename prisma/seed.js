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
var slugify_1 = require("slugify");
var prisma = new client_1.PrismaClient();
var images = [
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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var toursData, _loop_1, _i, toursData_1, tour;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    toursData = [
                        'Dubai City Tour',
                        'Burj Khalifa Tour',
                        'Atlantis Aquaventure',
                        'Desert Safari',
                        'Dhow Cruise Dinner',
                        'Helicopter Ride',
                        'Dubai Marina Yacht Cruise',
                        'Dubai Miracle Garden',
                        'Dubai Frame Experience',
                        'Ski Dubai Adventure',
                        'Ferrari World Tour',
                        'Hot Air Balloon Ride',
                    ].map(function (tourName) {
                        var slug = (0, slugify_1.default)(tourName, { lower: true });
                        return { name: tourName, slug: slug };
                    });
                    _loop_1 = function (tour) {
                        var createdTour, subToursData, _b, subToursData_1, subTour, createdSubTour;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, prisma.tours.create({
                                        data: {
                                            name: tour.name,
                                            slug: tour.slug,
                                            image: {
                                                create: {
                                                    src: getRandomImage().src,
                                                    altText: getRandomImage().text,
                                                },
                                            },
                                        },
                                    })
                                    // Create a random number of sub-tours for each tour
                                ];
                                case 1:
                                    createdTour = _c.sent();
                                    subToursData = [
                                        'Morning Tour',
                                        'Afternoon Tour',
                                        'Evening Tour',
                                        'VIP Tour',
                                        'Exclusive Experience',
                                    ].map(function (subTourName) {
                                        var slug = (0, slugify_1.default)("".concat(tour.name, " ").concat(subTourName), { lower: true });
                                        return { name: subTourName, slug: slug, tourSlug: createdTour.slug };
                                    });
                                    _b = 0, subToursData_1 = subToursData;
                                    _c.label = 2;
                                case 2:
                                    if (!(_b < subToursData_1.length)) return [3 /*break*/, 6];
                                    subTour = subToursData_1[_b];
                                    return [4 /*yield*/, prisma.subTours.create({
                                            data: {
                                                slug: subTour.slug,
                                                tourSlug: subTour.tourSlug,
                                                images: {
                                                    create: [
                                                        {
                                                            src: getRandomImage().src,
                                                            altText: getRandomImage().text,
                                                        },
                                                        {
                                                            src: getRandomImage().src,
                                                            altText: getRandomImage().text,
                                                        },
                                                    ],
                                                },
                                            },
                                        })
                                        // Create associated SubTourInfo for each sub-tour
                                    ];
                                case 3:
                                    createdSubTour = _c.sent();
                                    // Create associated SubTourInfo for each sub-tour
                                    return [4 /*yield*/, prisma.subTourInfo.create({
                                            data: {
                                                subTourSlug: createdSubTour.slug,
                                                description: "This is the ".concat(subTour.name, " of ").concat(tour.name, "."),
                                                dateTime: new Date(),
                                                duration: Math.floor(Math.random() * 4) + 1, // Random duration 1-4 hours
                                                time: Math.floor(Math.random() * 24), // Random start time between 0 and 23
                                            },
                                        })];
                                case 4:
                                    // Create associated SubTourInfo for each sub-tour
                                    _c.sent();
                                    _c.label = 5;
                                case 5:
                                    _b++;
                                    return [3 /*break*/, 2];
                                case 6: return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, toursData_1 = toursData;
                    _a.label = 1;
                case 1:
                    if (!(_i < toursData_1.length)) return [3 /*break*/, 4];
                    tour = toursData_1[_i];
                    return [5 /*yield**/, _loop_1(tour)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log('Seeding complete!');
                    return [2 /*return*/];
            }
        });
    });
}
// Helper function to get a random image
function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
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
