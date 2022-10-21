var mongoose = require('mongoose');
var shema = mongoose.Schema;
var maintenance = new mongoose.Schema({

    description:{type: String},
    dateOfMaintenance: {type: Date},
    type :{type: String , 
        enum: ['wheel', 'brake', 'other'],
       },
    price : {type:Number},
    avalible : {type: Boolean},
    velo: { type: mongoose.Schema.Types.ObjectId, ref: 'velos' },
})

module.exports = mongoose.model('maintenances', maintenance)