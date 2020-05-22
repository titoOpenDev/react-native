import Constants from 'expo-constants';


const ENV = {
    dev: {
        API_HOST: 'http://localhost:8080',
        EXECUTIVE_API_HOST: 'http://192.168.0.218:8000/api/ejecutivos'
    },
    test: {
        API_HOST: '',
        EXECUTIVE_API_HOST: ''
    },
    uat: {
        API_HOST: '',
        EXECUTIVE_API_HOST: ''
    },
    production: {
        API_HOST: '',
        EXECUTIVE_API_HOST: ''
    }
}

export default  (env = Constants.manifest.releaseChannel) => {
    switch (env) {

        case undefined: {
            return ENV.dev;
            break;
        }
        
        case (__DEV__): {
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
            return ENV.production;
            break;
        }

    }
}
