export default function loadBalancer(chinaDownload, USDownload) {
  const fasterServer = Promise.any([chinaDownload, USDownload]).then(
    (value) => value,
  );
  return fasterServer;
}
