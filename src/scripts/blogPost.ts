document.querySelectorAll(".blog-post-item").forEach(item => {
    item.addEventListener("click", (event) => {
        const link = (event.target as HTMLElement).querySelector("a");
        window.location.assign(link.href)
    })
})

export { };