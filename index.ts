import { VK } from "vk-io";

const vk = new VK({
  token: process.env.TOKEN as string,
});

async function run() {
  await vk.updates.startPolling();
  vk.updates.on("message", (ctx) => {
    console.log(ctx);
  });
}

run().catch(console.log);
