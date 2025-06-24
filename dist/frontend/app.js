"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../i18n"); // <-- Important: this initializes i18next
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const AfCFTABuyerOrder = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTABuyerOrder'))));
const AfCFTAProductDetail = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTAProductDetail'))));
const AfCFTAVendorDetail = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTAVendorDetail'))));
const AfCFTARegionalOpportunities = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTARegionalOpportunities'))));
const AfCFTAOrderForm = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTAOrderForm'))));
const AfCFTAProductGrid = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTAProductGrid'))));
const AfCFTAProductList = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTAProductList'))));
const AfCFTAChatbot = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTAChatbot'))));
const AfCFTAHelpPage = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTAHelpPage'))));
const AfCFTASubscribeForm = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTASubscribeForm'))));
const AfCFTAChatRoom = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/AfCFTAChatRoom'))));
const ExampleTranslation = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../components/ExampleTranslation'))));
const NotFound_1 = __importDefault(require("../components/NotFound"));
require("../styles/afcfta-theme.css");
const AfCFTAHome_1 = __importDefault(require("../pages/AfCFTAHome"));
const App = () => {
    const [showChatbot, setShowChatbot] = (0, react_1.useState)(false);
    const toggleChatbot = () => {
        setShowChatbot((prev) => !prev);
    };
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)("div", { className: "afcfta-app-container", children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(AfCFTAHome_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/chatbot", element: (0, jsx_runtime_1.jsx)(AfCFTAChatbot, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/subscribe", element: (0, jsx_runtime_1.jsx)(AfCFTASubscribeForm, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/chat/:roomId", element: (0, jsx_runtime_1.jsx)(AfCFTAChatRoom, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/buyer-order/:productCode", element: (0, jsx_runtime_1.jsx)(AfCFTABuyerOrder, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/product-detail/:productCode", element: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }), children: (0, jsx_runtime_1.jsx)(AfCFTAProductDetail, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/vendor-detail/:vendorCode", element: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }), children: (0, jsx_runtime_1.jsx)(AfCFTAVendorDetail, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/afcfta-tips", element: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }), children: (0, jsx_runtime_1.jsx)(AfCFTARegionalOpportunities, { productCategory: "All", userCountry: "Ghana" }) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/afcfta-orderform", element: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }), children: (0, jsx_runtime_1.jsx)(AfCFTAOrderForm, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/productgrid", element: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }), children: (0, jsx_runtime_1.jsx)(AfCFTAProductGrid, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/product-list", element: (0, jsx_runtime_1.jsx)(AfCFTAProductList, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/help", element: (0, jsx_runtime_1.jsx)(AfCFTAHelpPage, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/exampletrans", element: (0, jsx_runtime_1.jsx)(ExampleTranslation, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] }), (0, jsx_runtime_1.jsx)("button", { className: "chatbot-toggle-btn", onClick: toggleChatbot, title: "Chat with us!", children: "\uD83D\uDCAC" }), showChatbot && (0, jsx_runtime_1.jsx)(AfCFTAChatbot, {})] }) }));
};
exports.default = App;
