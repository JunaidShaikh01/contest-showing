const imageUrls = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
];



const url = "https://kontests.net/api/v1/all";

fetch(url)
    .then(responce => responce.json())
    .then((result) => {

        console.log(result)
        outputSection = ""
        for (index in result) {
            console.log(result[index]);
            outputSection += `
            
                    <div class="card col gy-3 " style="width: 20rem; margin: 1rem;">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" class="card-img-top" id="randomImage" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${result[index].name}</h5>
                            <p class="card-text">${result[index].start_time}</p>
                            <p class="card-text">${result[index].end_time}</p>
                            <a href="${result[index].url}" class="btn btn-primary">Visit site</a>
                        </div>
                    </div>

        `
        }

        cardComponets.innerHTML = outputSection;
    })
