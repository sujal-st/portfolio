import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout('./routes/layout/Main.tsx', [
        route("/", "./routes/home.tsx"),
    ]),
    route("*", "./routes/errors/ErrorPage.tsx"),
] satisfies RouteConfig;