import Constants from 'expo-constants';


const ENV = {
    dev: {
        API_HOST: 'http://localhost:8080'
    },
    test: {
        API_HOST: ''
    },
    uat: {
        API_HOST: ''
    },
    production: {
        API_HOST: ''
    }
}

export default  (env = Constants.manifest.releaseChannel) => {
    switch (env) {
        case __DEV__: {
            return ENV.dev;
            break;
        }

        case 'test': {
            return ENV.test;
            break;
        }

        case 'uat': {
            return ENV.uat;
            break;
        }

        case 'production': {
            break;
            return ENV.production;
        }

    }
}
