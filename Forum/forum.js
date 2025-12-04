//absolute work in progess not at all done
fetch('forumpostdata.JSON')
    .then(response =>{
        if(!response.ok){
            throw new Error('Error! satus: ${response.status}' );
        }
        return response.json();
    })
    .then(data=>{
        renderPosts(data); 
    })

function renderPosts(posts){
    const container = document.getElementById('post-container');
    container.innerHTML = "";

    posts.forEach(post => {
        createElement("div")
        const newPost = document.createElement('div');
        newPost.classList.add('post-card');

        set innerHTML = post.title
        append to page
    })

}


