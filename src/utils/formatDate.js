export const chatCanvasDate = (date) => {
    let parsedDate = Date.parse(date)
    return new Date(parsedDate).toLocaleDateString('en-US', {hour: 'numeric', minute: 'numeric'})
} 

export const contactsSidebarDate = (date) => {
    let parsedDate = Date.parse(date)
    return new Date(parsedDate).toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric'})
}