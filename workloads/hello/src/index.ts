import { createRunnerSdk, endpointPath } from "@capakit/sdk";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
const sdk = createRunnerSdk();
sdk.hijackConsoleLogging();

const mcpServer = new McpServer({
    name: process.env.CAPAKIT_WORKLOAD_MID ?? "capakit-app",
    version: "0.0.0",
});

mcpServer.registerTool(
    "hello-world",
    {
        description: "Print hello world",
        inputSchema: {},
    },
    async () => {
        return {
            content: [
                {
                    type: "text",
                    text: "hello world",
                },
            ],
            structuredContent: { text: "hello world" },
        };
    },
);

sdk.mount({
    protocol: "mcp",
    endpoint: endpointPath("/mcp"),
    server: mcpServer,
});

await sdk.start();
