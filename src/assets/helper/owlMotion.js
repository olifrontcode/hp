export const moveOwl = (path, curviness = 1, duration, ease = "") => {
    return {
        motionPath: {
            path: path,
            curviness: curviness,
        },
        duration: duration,
        ease: ease
    }
}

export const rotateOwl = (scaleX, ease) => {
    return {
        scaleX: scaleX,
        ease: ease
    }
}