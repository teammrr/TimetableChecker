$(document).ready(function(){

    
    var api = "https://school-management-api.xeersoft.co.th/api/timetable/allyesr"
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
                ${data[i].lv_tt_link ? `<a href="${data[i].lv_tt_link}" class="btn btn-primary">Class Schedule</a>` : ''}
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
            return false;
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