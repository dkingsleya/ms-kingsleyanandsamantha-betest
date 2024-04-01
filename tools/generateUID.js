function generateTimeBasedUUID() {
  // UUID version 1 has a fixed timestamp format
  const timestamp = new Date().getTime();
  const timestampHex = timestamp.toString(16);

  // Convert the timestamp to 100-nanosecond intervals since the UUID epoch
  const interval = (timestamp * 10000 + 122192928000000000).toString(16);

  // Generate a random node value (6 random bytes)
  const node = Array.from({ length: 6 }, () => Math.floor(Math.random() * 256))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  // Create the UUID string
  const uuid = [
    timestampHex.substring(0, 8),
    timestampHex.substring(8, 12),
    "1" + timestampHex.substring(12, 15),
    "8" + timestampHex.substring(15, 18),
    interval.substring(0, 12),
    node,
  ].join("-");

  return uuid;
}

module.exports = { generateTimeBasedUUID };
