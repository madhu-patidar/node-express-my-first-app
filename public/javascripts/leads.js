function deleteLead(lead_id) {
    $.ajax({
        url :'/lead/' +lead_id + 'delete-json', 
        ContentType: 'json',
        dataType: 'json',
        data:JSON.stringify({lead_id}),
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

