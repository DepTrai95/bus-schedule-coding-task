import data from "../../../../schedule.json";

export async function GET(): Promise < Response > {
  await new Promise((r) => setTimeout(r, 1500));
  // Got error that 'Response.json is not a function'
  const response = new Response(JSON.stringify(data));
  return response;
}
