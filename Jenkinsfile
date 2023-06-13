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
                   
                    bat "npm install"
                    bat "npm run build"
                }
            }
        }
    }
}
