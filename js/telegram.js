const entryPoint = process.env.PARCEL_ENDPOINT;
const chatId = process.env.PARCEL_CHAT_ID;
const botToke = `bot${process.env.PARCEL_BOT_TOKEN}`;
export async function sendMessage(text) {
  const url = `${entryPoint}/${botToke}/sendMessage`;
  const data = {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
