import config from "./config";

// Example function written for testing
export default function () {
	return "hello";
}

// Confirm .env configuration is being read.
console.info(config);
