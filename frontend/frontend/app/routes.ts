import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [

    layout('./routes/layout/Main.tsx',[
        route("/","./routes/home.tsx"),
        route("#projects","./routes/home.tsx"),
        // route("about","./routes/about.tsx"),
    ]

    )
] satisfies RouteConfig;
