let backendHosts = {};

const hostname = window && window.location && window.location.hostname;
// const port = window && window.location && window.location.port;
// const origin = window && window.location && window.location.origin;

if (hostname.includes("amplifyapp") || hostname === "localhost" || hostname.includes("ngrok")) {
  backendHosts.TOLL_PLUS = `https://issuat.icicibank.com:8443/ISROTIAPIV1.2/customer`;
  backendHosts.TOLL_PLUS_TAG_VERIFY = `https://issuat.icicibank.com:8443/ISRDigitalPOSAPI/Retailer`;
  backendHosts.KYC = `https://govtapi.kycvideo.in`;
  backendHosts.LOGISTIC = `https://logistics.fastaggpay.com`;
  backendHosts.SMS = "https://api.msg91.com";
  backendHosts.ENV="dev";
  backendHosts.RECK="http://54.71.47.216:8080";
} else {
  backendHosts.TOLL_PLUS = `https://fastagapi.icicibank.com:8443/ISROTIAPIV1.2/Customer`;
  backendHosts.TOLL_PLUS_TAG_VERIFY = `https://fastagapi.icicibank.com:8443/ISRDigitalPOSAPI/Retailer`;
  backendHosts.KYC = `https://govtapi.kycvideo.in`;
  backendHosts.LOGISTIC = `https://logistics.fastaggpay.com`;
  backendHosts.SMS = "https://api.msg91.com";
  backendHosts.ENV="prod";
  backendHosts.RECK="http://54.71.47.216:8080";
}

export default backendHosts;
