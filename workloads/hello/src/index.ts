import { createWorkloadSdk } from "@capakit/sdk";
import { mountMcp } from "@capakit/sdk/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
const sdk = createWorkloadSdk();
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

mountMcp(sdk, {
    endpoint: "/mcp",
    server: mcpServer,
});

await sdk.start();
