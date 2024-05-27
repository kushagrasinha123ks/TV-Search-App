$(document).ready(function(){  
   
    $("#showSubmit").click(function(event){
        
        //get JSON data
        const show = $("#showSearch").val();
        const link = `https://api.tvmaze.com/search/shows?q=${show}`;
        
        $.get(link, function(data){
            // Clear previous search results
            $("#data").empty();
            // Iterate through each result
            data.forEach(function(result) {
                // Check if image is available
                if (result.show && result.show.image && result.show.image.original) {
                    // Create image element
                    const imgElement = $("<img id='cnt-img'>").attr("src", result.show.image.original);
                    // Create details HTML
                    const details = `
                    <div class="container-lg" id="cnt-details">
                        <div class="row">
                            <div class="col-sm-4">
                                ${imgElement.prop("outerHTML")} 
                            </div>
                            <div class="col-sm-8">
                                <strong>${result.show.name}</strong><br>
                                <u>Genres:</u> 
                                <i>
                                ${result.show.genres.map(genre => genre).join(", ")}
                                </i><br>
                                <u>Status:</u> ${result.show.status}<br>
                                <u>Language:</u> ${result.show.language}<br>
                                <u>Premiered:</u> ${result.show.premiered}<br>
                                <u>Official Site:</u> <a href="${result.show.officialSite}" target="_blank">${result.show.officialSite}</a><br>
                                <u>Rating:</u> ${result.show.rating.average}<br>
                                <u>Summary:</u> ${result.show.summary}<br>
                            </div>
                        </div>
                    </div>
                    `;
                    // Append details HTML to #data
                    $("#data").append(details);
                }
            });
        });
    });

    $('#bt-dark').click(function(){
        $('html').attr('data-bs-theme',"dark");
    });

    
    $('#bt-light').click(function(){
        $('html').attr('data-bs-theme',"light");
    });

});
