

const FormatTimestampToTime = (timestamp: number) => {
    console.log(timestamp)
    let date = new Date(timestamp * 1000)
    let time = `${date.getHours()}:${date.getMinutes()}`
    console.log(date.getHours(), date.getMinutes())
    return time
}

export default FormatTimestampToTime