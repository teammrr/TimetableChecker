$(document).ready(function(){
    
    var myAlert = document.getElementById('myAlert')
    var api = "https://school-management-api.xeersoft.co.th/api/timetable/allyesr"
    var api2 = "https://timetable.newton.ac.th/year/"
    // var yr = "https://school-management-api-dev.xeersoft.co.th/api/timetable/"
    let url = `${api}`;
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function(data){
            // console.log(data)           
            $.each(data, function(i, item) {
                
                // const cardBody = $('<div class="card-body"></div>');
                const card = $('<div class="row justify-content-evenly card text-center m-2" style="width: 18rem;"></div>');
                
                // Append the content to the new card-body element (For All year List)
                card.append(`<div class="card-body">
                <h5 class="class-title">${data[i].lv_title}</h5>
                <p class="class-text">${data[i].lv_academic}</p>
                ${data[i].lv_tt_link ? `<a href="${api2}${data[i].lv_tt_code}" class="btn btn-primary">View Here</a>` : `<a class="btn btn-outline-danger">Not Available</a>`}
                </div>`); 
                
                // Append the content to the new card-body element (For Custom year)
                // card.append(`<div class="card-body"><h5 class="class-title">${data[i].tt_title}</h5></div>`);
                // card.append(`<div class="card-body"><p class="class-time">${data[i].tt_time_zone}</p></div>`);
                
                // Append the new card-body to the card element
                $('#scheds').append(card);
                $('#scheds').animate({
                    opacity: 1
                },500)
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error Thrown: " + errorThrown);
            console.log("Text Status: " + textStatus);
            console.log("XMLHttpRequest: " + XMLHttpRequest);
            console.warn(XMLHttpRequest.responseText)
       }
        
    });
    
    
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    
    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
            toastBootstrap.fadeOut(100)
        })
    }
})