import { Router } from "express"; //to create routes import express
import { prisma } from "../db.js";


const router = Router(); //create router

//GET /api/site

router.get("/", async (req, res) => {
    try{
        //find the first site in the db
        const site = await prisma.site.findFirst({
            include: {fonts :true} //also load Fonts
        });

        res.json(site); //Send data back to frontend
    }
    catch(err){
        res.status(500).json({error : "Something went wrong"});
    }

});


//PUT /api/site
router.put("/", async (req, res) => {
    try{
        const data =req.body; // frontend send edited data
    
        //Find the existing site
        let site= await prisma.site.findFirst();

        if(!site){
            site = await prisma.site.create({
                data:{
                    title: data.title || "My website",
                    bio : data.bio || "",
                    about: data.about || "",
                    logoUrl: data.logoUrl || "",
                    theme : data.theme || {}
                }
            });
        }
        //if site exists
        else{
            site = await prisma.site.update({
                where:{id:site.id},
                data:{
                    title: data.title,
                    bio : data.bio,
                    about: data.about,
                    logoUrl: data.logoUrl,
                    theme : data.theme
                }
            });

        }
        res.json(site); //return updated site
    }catch(err){
        res.status(500).json({error : "Failed to update site"});
    }
});

export default router;