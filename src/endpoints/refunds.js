const route = "/refunds";

const refunds ={
    createRefunds:{
        route: route,
        method: 'post',
        bodyParams:{
            required:["transaction"],
            optional:["amount","currency","customer_note","merchant_note"]
        },
    },
    listRefunds:{
        method:"get",
        route: route,
        queryParams:{
            required: ["reterence", "currency"],
            optional: ["from", "to", "perPage", "page"],
        },
    },
    fetchRefund: {
        method: "get",
        route: route,
        queryParams:{
            required: ["reference"],
            optional: [],
        }
    }

}

export default refunds;
