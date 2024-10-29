const requestTimestamps = {};
const windowSizeInMillis = 60000;
const requestLimit = 12;

export default function rateLimit(req, res, next) {
  const clientIP = req.ip;
  const now = Date.now();

  if (!requestTimestamps[clientIP]) {
    requestTimestamps[clientIP] = [now];
  } else {
    requestTimestamps[clientIP].push(now);
  }

  cleanupOldEntries();

  if (requestTimestamps[clientIP].length > requestLimit) {
    res.status(429).send({ msg: "Too many requests. Please try again later." });
  } else {
    next();
  }
}

function cleanupOldEntries() {
  const now = Date.now();
  Object.keys(requestTimestamps).forEach((ip) => {
    requestTimestamps[ip] = requestTimestamps[ip].filter(
      (timestamp) => now - timestamp <= windowSizeInMillis
    );
  });
}
