pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        stage("Build") {
            steps {
                dir('my-app') {
                    bat "npm install @material-ui/core" --legacy-peer-deps
                    bat "npm install"
                    bat "npm run build"
                }
            }
        }
    }
}
