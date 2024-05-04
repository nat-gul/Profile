const videoSection = document.querySelector("ytapi");

fetch (
"https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=8&playlistId=UUorr2WMm7QDmJL7Miz-r1gg&key=AIzaSyClHWYlUE3ljNkZxNXdZ_B13Uk1NIPbVrQ"
)

.then(res  => res.json())
.then(data => {
	data.items.forEach(el => {
	videoSection.innerHTML += `

			<div class="col-sm-6">
				<div class="single-post-area wow fadeInUpBig" data-wow-delay="100ms">
                    <a href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="post-thumbnail"><img src="${el.snippet.thumbnails.standard.url}" alt=""></a>
                    <a href="https://www.youtube.com/channel/UCorr2WMm7QDmJL7Miz-r1gg?sub_confirmation=1" class="btn post-catagory">${el.snippet.channelTitle}</a>
                    <div class="post-content">
                        <a href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="post-title">${el.snippet.title}</a>
                    </div>
                </div> 
            </div>
		`
	});
	
})
