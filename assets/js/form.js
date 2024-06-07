const blogUserName = document.querySelector('#username');
const blogTitle = document.querySelector('#title');
const blogContent = document.querySelector('#content');


document.addEventListener(
    'submit', function(event) {
     event.preventDefault()
     console.log(event)
     addBlogPost()
    }
)

function addBlogPost() {
    const newBlogPost = {
            title: blogTitle.value, content: blogContent.value, username: blogUserName.value
        }
    const currentBlogs = localStorage.getItem("blogs");
    if (currentBlogs === null) {
        const blogs = [newBlogPost];
        localStorage.setItem('blogs', JSON.stringify(blogs));
    } else {
        const currentBlogsArray = JSON.parse(currentBlogs);
        currentBlogsArray.push(newBlogPost);
        localStorage.setItem('blogs', JSON.stringify(currentBlogsArray));
    }
    location.assign("https://hannahpsmith.github.io/blog.html")
}
