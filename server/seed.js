// Import Prisma client so we can write into the database
import { prisma } from "./db.js";

async function main() {
  console.log("Seeding database...");

  // ------------------------------------------------------------
  // 1) Create Site
  // ------------------------------------------------------------
  // This is your global website info:
  // - Title
  // - Bio
  // - About
  // - Logo
  // - Theme
  // ------------------------------------------------------------

  const site = await prisma.site.create({
    data: {
      title: "My UX Marketing Website",
      bio: "Helping brands grow with UI, UX, and digital strategy.",
      about: "This is your default About section. You can edit this later.",
      logoUrl: "",
      theme: {
        colorPrimary: "#6C63FF",
        colorAccent: "#18D4A3",
        background: "#0F0F0F",
        text: "#FFFFFF"
      }
    }
  });

  console.log("✅ Site created:", site.id);


  // ------------------------------------------------------------
  // 2) Create Homepage
  // ------------------------------------------------------------
  // - path: "/" means the root URL
  // - seoTitle: title for Google search
  // - blocks[] will be added in the next step
  // ------------------------------------------------------------

  const homePage = await prisma.page.create({
    data: {
      siteId: site.id,
      path: "/",
      seoTitle: "Welcome to My UX Marketing Site",
      seoDesc: "We build modern digital experiences."
    }
  });

  console.log("✅ Homepage created:", homePage.id);


  // ------------------------------------------------------------
  // 3) Create Blocks for Homepage
  // ------------------------------------------------------------
  // Blocks = sections of your webpage:
  //  - Hero
  //  - About
  //  - Services
  //  - CTA
  //  - Opt-in A
  //
  // "order" decides the position:
  //   0 = first section on page
  //   1 = second section
  //   2 = third section, etc.
  // ------------------------------------------------------------

  await prisma.block.create({
    data: {
      pageId: homePage.id,
      kind: "HERO",
      order: 0,
      data: {
        heading: "We Design Beautiful Digital Experiences",
        subheading: "UI/UX Design • Branding • Growth Strategy",
        buttonText: "Get Started"
      }
    }
  });

  await prisma.block.create({
    data: {
      pageId: homePage.id,
      kind: "ABOUT",
      order: 1,
      data: {
        heading: "About Us",
        text: "We help brands transform through thoughtful UX and data-driven strategy."
      }
    }
  });

  await prisma.block.create({
    data: {
      pageId: homePage.id,
      kind: "SERVICES_GRID",
      order: 2,
      data: {
        heading: "What We Do",
        services: [
          {
            title: "UI/UX Design",
            description: "Crafting delightful user experiences."
          },
          {
            title: "Brand Identity",
            description: "Creating modern and memorable visuals."
          },
          {
            title: "Marketing Strategy",
            description: "Smart tactics that convert and grow."
          }
        ]
      }
    }
  });

  await prisma.block.create({
    data: {
      pageId: homePage.id,
      kind: "CTA",
      order: 3,
      data: {
        heading: "Ready to grow your brand?",
        buttonText: "Contact Us"
      }
    }
  });

  await prisma.block.create({
    data: {
      pageId: homePage.id,
      kind: "OPTIN_A",
      order: 4,
      data: {
        heading: "Join the Newsletter",
        text: "Get the latest tips and insights in your inbox.",
        buttonText: "Subscribe"
      }
    }
  });

  console.log("✅ Blocks created 📦");
}


// ------------------------------------------------------------
// RUN THE SEED FUNCTION
// ------------------------------------------------------------

main()
  .then(() => {
    console.log("✅ Database seeded successfully!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error during seed:", err);
    process.exit(1);
  });
