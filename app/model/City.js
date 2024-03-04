Ext.define(
    'MsTraining.model.City',{

    extend:'Ext.data.Model',
    fields:[
        "id","name",{name:"phone",type:"string"}
    ]
},
function () {
    var city=Ext.create('MsTraining.model.City')
    console.log(city);
}

)