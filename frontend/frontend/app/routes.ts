import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [

    layout('./routes/layout/Main.tsx',[
        route("/","./routes/home.tsx"),
    ]

    )
] satisfies RouteConfig;
