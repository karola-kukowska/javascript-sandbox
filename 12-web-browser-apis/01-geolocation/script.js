function curSucess(pos) {
    const coords = pos.coords;
    console.log("🚀 ~ curSucess ~ coords:", coords.latitude)

};

function curError(err) {
    console.log("🚀 ~ curError ~ err:", err)
}

const options = {};

navigator.geolocation.getCurrentPosition(curSucess, curError, options);

//more notes in solution.js