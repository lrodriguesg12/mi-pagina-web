import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("aficiones", "routes/aficiones.tsx"),
    route("info", "routes/info.tsx"),
] satisfies RouteConfig;
