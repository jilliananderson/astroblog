export const sortChronologically = (posts) => {
    return posts.sort((postA, postB) => {
		const postADate = new Date(postA.frontmatter.pubDate);
		const postBDate = new Date(postB.frontmatter.pubDate)
		return postBDate - postADate;
    })
};

export const formatDate = (date: Date) => {
    const dateToUse = new Date(date);
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(dateToUse)
}