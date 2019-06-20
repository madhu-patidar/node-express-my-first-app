function deleteLead(leadId) {
    $.ajax({
        url :'/lead/' +leadId + '/delete-json', 
        ContentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data:JSON.stringify({leadId}),
        type: 'POST',  // http method
        success: ((res) => {
               console.log("Result: ", res)
               $("#"+leadId).remove();
            }),
            error: ((error) => {
                console.log("Error: ", error)
             }),
        })
}

