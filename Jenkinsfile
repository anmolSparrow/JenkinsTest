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

                }
            }
        }
        stage ("Build Docker Image"){
            steps{
                script{
                bat "docker stop heuristic_babbage"
                bat "docker build -t nginx-test ."
                }
            }
        }
    }
}
