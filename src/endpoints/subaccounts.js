const route = "/subaccounts";

const subaccounts = {
    createSubaccounts: {
        route: route,
        method: "post",
        bodyParams:{
            required:["business_name", "settlement_bank", "account_number", "percentage_charge", "description" ],
            optional:[
                "primary_contact_email",
                "primary_contact_phone",
                "primary_contact_phone",
                "metadata"
            ]
        }
    },
    listSubaccounts:{
        route: route,
        method: "get",
        queryParams:{
            required:["perPage", "page"],
            optional: ["from", "to"]
        }
    },
    fetchSubaccounts:{
        route: route + ":/id",
        method: "get",
        queryParams:{
            required: ["id"],
            optional: []
        }
    },
    updateSubaccounts:{
       route: route +":/id",
       method: "put",
       queryParams:{
         required: ["id"],
         optional: []
       },
       bodyParams:{
        required:["business_name", "settlement_bank"],
        optional:[
            "account_number", 
            "active",
            "percentage_charge",
            "description",
            "primary_contact_email",
            "primary_contact_name",
            "primary_contact_phone", 
            "settlement_schedule", 
            "contact"],
       }
    }
}

export default subaccounts;