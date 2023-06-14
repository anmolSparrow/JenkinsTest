pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        stage("Build") {
           environment {
                CI = 'false'
            }
            steps {
                dir('my-app') {
                    bat "npm install -g npm-check-updates"
                    bat "ncu -u"
                    bat "npm install --legacy-peer-deps"
                    
                    bat "npm run build"
                }
            }
        }
    }
}
