import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "blackmedia-competitor-intelligence",
    databaseConfigured: Boolean(process.env.DATABASE_URL),
    yandexConfigured: Boolean(process.env.YANDEX_API_KEY),
    timestamp: new Date().toISOString(),
  });
}
