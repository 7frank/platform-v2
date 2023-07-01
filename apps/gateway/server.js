const traefik = require('traefik');
const path = require('path');

// // Static Config Only
// service = await traefik.start({
//   defaultEntryPoints: ["http"],
//   entryPoints: {
//     http: {
//       address: ":3001",
//     },
//   },
//   "log.level": "DEBUG",
// })

// // Long Form
// service = await traefik.start({
//   log: true,
//   staticConfig: {
//     defaultEntryPoints: ["http"],
//     entryPoints: {
//       http: {
//         address: ":3001",
//       },
//     },
//     // dot notation is also OK!
//     "log.level": "DEBUG",
//   },
//   dynamicConfig: {
//     http: {
//       routers: {
//         someRouter: {
//           service: "someService",
//           rule: "PathPrefix(`/`)",
//         },
//       },
//       services: {
//         someService: {
//           "loadBalancer.servers": [{ url: "http://localhost:3000" }],
//         },
//       },
//     },
//   },
// })

async function main() {
  // Path to YAML/TOML
  const p = path.resolve('./traefik/traefik.yml');
  console.log('Static Config File:', p);
  let service = await traefik.start(p);

  //  await service.stop();
}

main();
