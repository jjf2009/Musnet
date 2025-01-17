const Music = require("./music.model");

//const postAMusic = async (req, res) => {
//    try {
//        const newMusic = await Music({...req.body});
//        await newMusic.save();
//        res.status(200).send({message: "Music posted successfully", music: newMusic})
//    } catch (error) {
//        console.error("Error creating music", error);
//        res.status(500).send({message: "Failed to create music"})
//    }
//}

// get all musics
const getAllMusics =  async (req, res) => {
    try {
        const musics = await Music.find().sort({ createdAt: -1});
        res.status(200).send(musics)
        
    } catch (error) {
        console.error("Error fetching musics", error);
        res.status(500).send({message: "Failed to fetch musics"})
    }
}

const getSingleMusic = async (req, res) => {
    try {
        const {id} = req.params;
        const music =  await Music.findById(id);
        if(!music){
            res.status(404).send({message: "Music not Found!"})
        }
        res.status(200).send(music)
        
    } catch (error) {
        console.error("Error fetching music", error);
        res.status(500).send({message: "Failed to fetch music"})
    }

}

// update music data
const UpdateMusic = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedMusic =  await Music.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedMusic) {
            res.status(404).send({message: "Music is not Found!"})
        }
        res.status(200).send({
            message: "Music updated successfully",
            music: updatedMusic
        })
    } catch (error) {
        console.error("Error updating a music", error);
        res.status(500).send({message: "Failed to update a music"})
    }
}

const deleteAMusic = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedMusic =  await Music.findByIdAndDelete(id);
        if(!deletedMusic) {
            res.status(404).send({message: "Music is not Found!"})
        }
        res.status(200).send({
            message: "Music deleted successfully",
            music: deletedMusic
        })
    } catch (error) {
        console.error("Error deleting a music", error);
        res.status(500).send({message: "Failed to delete a music"})
    }
};

module.exports = {
//    postAMusic,
    getAllMusics,
    getSingleMusic,
    UpdateMusic,
    deleteAMusic
}
