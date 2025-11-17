// Import Router from Express.
// A Router is like a mini backend used for specific URLs.
import { Router } from "express";

// Import Prisma so we can talk to the database.
import { prisma } from "../db.js";

// Create our mini router for pages.
const router = Router();


// ======================================================================
// 1) GET /api/pages
// ======================================================================
// This returns ALL pages in the system. Example pages:
// - "/"
// - "/services"
// - "/about"
// ======================================================================

router.get("/", async (req, res) => {
  try {
    // First find the site (only one site exists)
    const site = await prisma.site.findFirst();

    // Then find every page that belongs to that site
    const pages = await prisma.page.findMany({
      where: { siteId: site?.id },
      orderBy: { createdAt: "asc" } // show oldest first
    });

    // Send the pages back to frontend
    res.json(pages);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch pages" });
  }
});


// ======================================================================
// 2) POST /api/pages
// ======================================================================
// This creates a NEW page in your website.
// Example:
// { "path": "/services", "seoTitle": "Our Services" }
// ======================================================================

router.post("/", async (req, res) => {
  try {
    const site = await prisma.site.findFirst();

    // Create a new page record in DB
    const page = await prisma.page.create({
      data: {
        siteId: site.id,
        path: req.body.path || "/new",
        seoTitle: req.body.seoTitle || "",
        seoDesc: req.body.seoDesc || ""
      }
    });

    res.json(page);

  } catch (err) {
    res.status(500).json({ error: "Failed to create page" });
  }
});


// ======================================================================
// 3) GET /api/pages/:id
// ======================================================================
// This RETURNS A SINGLE PAGE + all its blocks.
// Example:
// GET /api/pages/abc123
//
// Returns:
// {
//   "id": "...",
//   "path": "/",
//   "blocks": [
//      { kind: "HERO", data: {...} },
//      { kind: "ABOUT", data: {...} }
//   ]
// }
// ======================================================================

router.get("/:id", async (req, res) => {
  try {
    const page = await prisma.page.findUnique({
      where: { id: req.params.id },
      include: {
        blocks: {
          orderBy: { order: "asc" } // blocks in correct order
        }
      }
    });

    res.json(page);

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch page" });
  }
});


// ======================================================================
// 4) PUT /api/pages/:id
// ======================================================================
// This UPDATES a page.
// Example updates:
// - change the URL path
// - change SEO title
// - change SEO description
// ======================================================================

router.put("/:id", async (req, res) => {
  try {
    const page = await prisma.page.update({
      where: { id: req.params.id },
      data: {
        path: req.body.path,
        seoTitle: req.body.seoTitle,
        seoDesc: req.body.seoDesc
      }
    });

    res.json(page);

  } catch (err) {
    res.status(500).json({ error: "Failed to update page" });
  }
});


// ======================================================================
// 5) DELETE /api/pages/:id
// ======================================================================
// Deletes a page AND all its blocks.
// This prevents “orphan blocks” left behind.
// ======================================================================

router.delete("/:id", async (req, res) => {
  try {
    // First delete all blocks belonging to this page
    await prisma.block.deleteMany({
      where: { pageId: req.params.id }
    });

    // Then delete the page
    await prisma.page.delete({
      where: { id: req.params.id }
    });

    res.json({ ok: true });

  } catch (err) {
    res.status(500).json({ error: "Failed to delete page" });
  }
});


// Export this mini-router so index.js can use it.
export default router;
