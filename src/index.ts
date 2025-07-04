import Elysia from "elysia";
import swagger from "@elysiajs/swagger";

new Elysia()
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
		app.get("steam/tags", () => [
			"gui",
			"crafting",
			"sprite",
			"qol",
			"cheat",
			"api",
		]),
	)
	.listen(3000, () => {
		console.log("listening on 3000");
	});
