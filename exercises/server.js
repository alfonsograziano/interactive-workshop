import Fastify from "fastify";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  // put your options here
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fastify.get("/exercise/:id", async (request, reply) => {
  const { id } = request.params;

  const testFileName = path.join(__dirname, id, "test", "index.test.js");
  const fileContent = await fs.readFile(testFileName, { encoding: "utf-8" });

  reply.send({ content: fileContent });
});

fastify.post("/verify/:id", async (request, reply) => {
  const { id } = request.params;
  const { code } = request.body;
  reply.send({
    message: `Received POST request for verify with ID: ${id} and code: ${code}`,
  });
});

fastify.get("/solution/:id", async (request, reply) => {
  const { id } = request.params;
  const testFileName = path.join(__dirname, id, "test", "solution.test.js");
  const fileContent = await fs.readFile(testFileName, { encoding: "utf-8" });
  reply.send({ content: fileContent });
});

await fastify.listen({ port: 5000 });
fastify.log.info(`server listening on ${fastify.server.address().port}`);
