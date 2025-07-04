import Elysia from "elysia";
import swagger from "@elysiajs/swagger";

new Elysia()
	.get("health", () => 200) // for docker health check
	.use(
		swagger({
			documentation: {
				info: {
					title: "MiMLoader Web API",
					version: "1.0.0",
				},
			},
		}),
	)
	.group("/api/v1", (app) =>
		app.get("steam/tags", () => ["gui", "crafting", "sprite", "qol", "cheat"]),
	)
	.listen(3000, () => {
		console.log("listening on 3000");
	});
