// Import Router to create our mini backend for blocks
import { Router } from "express";

// Import database client
import { prisma } from "../db.js";

// Create Router object
const router = Router();


// ======================================================================
// 1) POST /api/blocks
// ======================================================================
// Purpose:
// Create a NEW block inside a page.
// Example: Adding a HERO block, or ABOUT block, etc.
// ======================================================================
router.post("/", async (req, res) => {
  try {
    // Read from frontend
    const { pageId, kind, data } = req.body;

    // Count existing blocks to decide order
    const count = await prisma.block.count({
      where: { pageId }
    });

    // Create the new block
    const block = await prisma.block.create({
      data: {
        pageId,
        kind,
        order: count, // new block added LAST
        data: data || {} // empty data if none given
      }
    });

    res.json(block);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create block" });
  }
});


// ======================================================================
// 2) PUT /api/blocks/:id
// ======================================================================
// Purpose:
// Edit a block's content.
// Example: Change Hero heading, text, image, etc.
// ======================================================================
router.put("/:id", async (req, res) => {
  try {
    const block = await prisma.block.update({
      where: { id: req.params.id },
      data: {
        data: req.body.data // block content
      }
    });

    res.json(block);

  } catch (err) {
    res.status(500).json({ error: "Failed to update block" });
  }
});


// ======================================================================
// 3) POST /api/blocks/reorder
// ======================================================================
// Purpose:
// Change block ORDER on a page (move up/down).
// Example frontend sends:
// [
//   { "id": "block1", "order": 0 },
//   { "id": "block2", "order": 1 }
// ]
// ======================================================================
router.post("/reorder", async (req, res) => {
  try {
    const items = req.body; // list of {id, order}

    // Update each block
    await Promise.all(
      items.map(b =>
        prisma.block.update({
          where: { id: b.id },
          data: { order: b.order }
        })
      )
    );

    res.json({ ok: true });

  } catch (err) {
    res.status(500).json({ error: "Failed to reorder blocks" });
  }
});


// ======================================================================
// 4) DELETE /api/blocks/:id
// ======================================================================
// Purpose:
// Remove a block from a page.
// Example: Delete Hero block or CTA section.
// ======================================================================
router.delete("/:id", async (req, res) => {
  try {
    await prisma.block.delete({
      where: { id: req.params.id }
    });

    res.json({ ok: true });

  } catch (err) {
    res.status(500).json({ error: "Failed to delete block" });
  }
});


// Export router to use in index.js
export default router;
