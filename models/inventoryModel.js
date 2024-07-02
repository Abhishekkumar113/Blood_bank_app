import mongoose  from "mongoose";

export const inventorySchema = new mongoose.Schema({
           inventoryType:{
            type:String,
            required:[true,'inventory type required'],
            enum:['in','out']
           },
           bloodGroup: {
            type: String,
            required: [true, "blood group is require"],
            enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
          },
          quantity: {
            type: Number,
            require: [true, "blood quanity is require"],
          },
          email: {
            type: String,
            required: [true, "Donar Email is Required"],
          },
          organisation: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: [true, "organisation is require"],
          },
          hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: function () {
              return this.inventoryType === "out";
            },
          },
          donar: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: function () {
              return this.inventoryType === "in";
            },
          },
        },
        { timestamps: true }
      );
      


export default mongoose.model('inventory',inventorySchema);