const pause = (speed) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 500/speed)
    })
}

export {pause}