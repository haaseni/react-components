const utils = {
    getDateString: (date: Date | undefined) => date ? `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` : undefined
}
export default utils