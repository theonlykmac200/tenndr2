const mongoose = require("mongoose")

const tenndrSchema = new mongoose.Schema({
    workout: { type: String,required: true},
    sets: { type: Number, required: false},
    reps: { type: Number, required: false},
    description: {type: String, required: false},
    duration_in_mins: {type: Number, required: true},
    difficulty: {type: String, required: true},
    mood_before: {type: String, required: false},
    mood_after: {type: String,  required: false},
   },
    {
    timestamps: true
    }
)

const Tenndr = mongoose.model("tenndr", tenndrSchema)

module.exports= Tenndr