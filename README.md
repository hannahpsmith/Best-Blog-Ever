# Hannah-Smith-Blog

Welcome to the Best Blog Ever.

GIVEN a personal blog
x WHEN I load the app,
x THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
x WHEN I submit the form,
x THEN blog post data is stored to localStorage.
x WHEN the form submits,
x THEN I am redirected to the posts page.
x WHEN I enter try to submit a form without a username, title, or content,
x THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.