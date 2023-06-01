const parseEnv = () => {
    const envVariableArray = process.env;
    // console.log(envVariableArray);
    let filtered = {}

    for (let key in envVariableArray) {
        if ( key.match(/^MITSO_/) ) {
            filtered[key] = envVariableArray[key];
        }
    }

    console.log(filtered);
};

parseEnv();
