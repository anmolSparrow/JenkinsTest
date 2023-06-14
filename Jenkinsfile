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
                    bat "npm -f install @material-ui/core"
                    bat "npm -f install"
                    bat "npm run build"
                    
                     bat "npm install -g serve"
                     bat "serve -s build"
                }
            }
        }
    }
}
