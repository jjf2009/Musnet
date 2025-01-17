const express = require('express');
const Music = require('./music.model');
const { /*postAMusic,*/ getAllMusics, getSingleMusic, UpdateMusic, deleteAMusic } = require('./music.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router =  express.Router();

// frontend => backend server => controller => music schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

// post a music
//router.post("/create-music", verifyAdminToken, postAMusic)

// get all musics
router.get("/", getAllMusics);

// single music endpoint
router.get("/:id", getSingleMusic);

// update a music endpoint
router.put("/edit/:id", verifyAdminToken, UpdateMusic);

router.delete("/:id", verifyAdminToken, deleteAMusic)


module.exports = router;
