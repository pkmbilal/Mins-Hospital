import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export const runtime = "nodejs"          // IMPORTANT: allow fs
export const dynamic = "force-dynamic"   // so it refreshes in dev

export async function GET() {
  try {
    // ✅ NOTE: "images" plural (matches your folder)
    const dir = path.join(process.cwd(), "public", "images", "home", "offers")

    if (!fs.existsSync(dir)) {
      return NextResponse.json({ images: [] })
    }

    const images = fs
      .readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|webp|gif|svg)$/i.test(f))
      .map((name) => {
        const fullPath = path.join(dir, name)
        const stat = fs.statSync(fullPath)
        return { name, url: `/images/home/offers/${name}`, mtime: stat.mtimeMs }
      })
      .sort((a, b) => b.mtime - a.mtime) // newest first
      .map(({ name, url }) => ({ name, url }))

    return NextResponse.json({ images })
  } catch (e) {
    return NextResponse.json({ images: [] }, { status: 500 })
  }
}