const isClient = (component) => {
    if(typeof window === undefined) {
        return 'On Serve'
    }
    return component
}
export {isClient}