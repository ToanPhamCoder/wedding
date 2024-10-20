import { toast } from "react-toastify";

export const shuffleArray = (array) => {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
};

export const splitBrackets = (text) => {
  const startIdx = text.indexOf("[");
  const endIdx = text.indexOf("]");
  if (startIdx === -1 || endIdx === -1) return [text, null];
  const insideBrackets = text.slice(startIdx + 1, endIdx).trim();
  const outsideBrackets = text.slice(0, startIdx).trim() + " " + text.slice(endIdx + 1, text.length).trim();

  return [outsideBrackets, insideBrackets];
};

export const rmBrackets = (text) => splitBrackets(text)[0].trim();

const sendSubscriptionToServer = async (subscription) => {
  const serverUrl = "https://vocanote-server.vercel.app";
  const response = await fetch(serverUrl + "/notification/subscribe", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subscription),
  });
  return response.json();
};

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const publicKey = "BPE9Uz8rNkRBijup2oHsMn2gIB73Zzrvk2R8PG3C-yoWvMfhsV1LSTsZZMwqoOgPi-UkfWe3PSgzMo42ILpDrn0";
const generateSubscribeEndPoint = async (registration) => {
  const applicationServerKey = urlB64ToUint8Array(publicKey);
  const options = {
    applicationServerKey,
    userVisibleOnly: true,
  };

  const subscription = await registration.pushManager.subscribe(options);
  const result = await sendSubscriptionToServer(subscription);
  toast.success(result.message);
};

const subscribeUser = async () => {
  try {
    const registration = await navigator.serviceWorker.getRegistration();
    generateSubscribeEndPoint(registration);
  } catch (error) {
    console.log(error);
  }
};

export { subscribeUser };
