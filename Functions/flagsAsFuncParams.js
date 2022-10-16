// Don't use flags as function parameters

// DON'T!

function updateProgress(score, progress) {
    if (progress) {
        navigate(`${progress}&${score}`)
    } else {
        navigate(score)
    }
}

// DO!

function updateLocalProgress(score) {
    navigate(score);
};

function updateGlobalProgress(progress, score) {
    navigate(`${progress}&${score}`)
};