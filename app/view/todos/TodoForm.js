Ext.define('MsTraining.view.todos.TodoForm', {
    extends:'Ext.window.Window',
    xtype:'todoform',
    title:'Add Todo',
    height:'150',
    width:'460',
    autoshow:true,
    closable:true,
    modal:true,
    items:[

        {
            xtype:'form',
            layout:'form',
            defaultType:'textfield',
            layout:'fit',
        
            item:[
                {
                    fieldLabel:'Todo ID',
                    name:'_id'
                },
                {
                    fieldLabel:'Title',
                    name:'title',
                    allowBlank:false
                },
                {
                    fieldLabel:'Completed',
                    xtype:'checkbox',
                    boxlabel:'Completed',
                    name:'completed'
                },
                {
                    fieldLabel:'User ID',
                    name:'userId'
                }


            ], buttons:[
                {
                    text:'cancel'
                },
                {
                    text:'save',
                    formbind:true
                }

            ]
           
        }
    ]
})