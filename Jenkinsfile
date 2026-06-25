pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                git branch: 'main', credentialsId: 'git-repo', url: 'https://github.com/Kajal-Rani18/nodejs-demo-cicd-project.git'
            }
        }
        stage('docker build image') {
            steps {
                sh 'docker build -t nodeapp .'
            }
        }
        stage('stop old container') {
            steps {
                sh '''
                docker stop nodeapp || true
                docker rm nodeapp || true
                '''
            }
        }
        stage('deploy container') {
            steps {
                sh '''
                docker run -d \
                --name nodeapp \
                -p 3000:3000 \
                nodeapp 
                '''
            }
        }
    }
}
