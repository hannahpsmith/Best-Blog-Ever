const container = document.querySelector('#container');

const blogs = JSON.parse(localStorage.getItem('blogs'))


function createElement(elementType, content) {
    const element = document.createElement(elementType);
    const textNode = document.createTextNode(content);
    element.appendChild(textNode);
    return element;
}

function renderBlogPost(blogPost) {
	const div = createElement("div", "");
	const title = createElement("h2", blogPost.title);
	const username = createElement("p", blogPost.username);
	const content = createElement("p", blogPost.content);
	div.appendChild(title);
	div.appendChild(username);
	div.appendChild(content);
	container.appendChild(div);
}

blogs.forEach((blogPost) => {
	renderBlogPost(blogPost);
});
